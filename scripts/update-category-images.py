#!/usr/bin/env python3
"""Upload 8 AI category images to Sanity and attach to category docs."""
import json, urllib.request, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMGDIR = os.path.expanduser('~/workspace/lahore-bouquet-category-images')
env = {}
for line in open(os.path.join(BASE, '.env.local')):
    line = line.strip()
    if line and '=' in line and not line.startswith('#'):
        k, v = line.split('=', 1)
        env[k.strip()] = v.strip().strip('"').strip("'")

PROJECT, DATASET, TOKEN = 'hgqfqfmw', 'production', env['SANITY_API_WRITE_TOKEN']

MAP = [
    ('hand-tied-bouquets.webp', 'category-all-bouquets'),
    ('imported-dutch-roses.webp', 'category-roses-collection'),
    ('velvet-red-roses.webp', 'category-velvet-red-roses'),
    ('pure-white-roses.webp', 'category-pure-white-roses'),
    ('sunflowers-mixed.webp', 'category-sunflowers'),
    ('money-bouquet.webp', 'category-money-bouquets'),
    ('crochet-bouquet.webp', 'category-crochet-bouquets'),
    ('dried-florals.webp', 'category-dried-flowers'),
]

def upload_image(path):
    with open(path, 'rb') as f:
        data = f.read()
    req = urllib.request.Request(
        f"https://{PROJECT}.api.sanity.io/v2021-06-07/assets/images/{DATASET}?filename={os.path.basename(path)}",
        data=data,
        headers={'Authorization': f'Bearer {TOKEN}', 'Content-Type': 'image/webp'})
    res = json.load(urllib.request.urlopen(req, timeout=120))
    return res['document']['_id']

def mutate(payload):
    req = urllib.request.Request(
        f"https://{PROJECT}.api.sanity.io/v2021-06-07/data/mutate/{DATASET}",
        data=json.dumps(payload).encode(),
        headers={'Authorization': f'Bearer {TOKEN}', 'Content-Type': 'application/json'})
    return json.load(urllib.request.urlopen(req, timeout=60))

for fname, doc_id in MAP:
    path = os.path.join(IMGDIR, fname)
    asset_id = upload_image(path)
    print(f"uploaded {fname} -> {asset_id[:24]}...")
    mutate({'mutations': [{
        'patch': {
            'id': doc_id,
            'set': {'image': {'_type': 'image', 'asset': {'_type': 'reference', '_ref': asset_id}}}
        }
    }]})
    print(f"  category {doc_id} updated")

print("DONE: 8 category images replaced via Sanity")
