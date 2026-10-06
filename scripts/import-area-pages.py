#!/usr/bin/env python3
"""Import 12 neighborhood area pages into Sanity (hgqfqfmw/production). Idempotent via fixed _id."""
import json, urllib.request, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
env = {}
for line in open(os.path.join(BASE, '.env.local')):
    line = line.strip()
    if line and '=' in line and not line.startswith('#'):
        k, v = line.split('=', 1)
        env[k.strip()] = v.strip().strip('"').strip("'")

PROJECT = 'hgqfqfmw'
DATASET = 'production'
TOKEN = env['SANITY_API_WRITE_TOKEN']

AREAS = [
    dict(slug='lake-city', name='Lake City', fee='Rs. 500', time='3–4 hours',
         landmarks=['Lake City Golf Course & Country Club', 'Downtown commercial strip', 'Sectors near Ring Road interchange', 'Golf-course villas'],
         nearby=[('Bahria Orchard', 'bahria-orchard'), ('Raiwind Road', 'raiwind-road'), ('DHA Rahbar', 'dha-rahbar')],
         intro='Lake City is one of Lahore\u2019s most prestigious gated communities \u2014 and Lahore Bouquet delivers fresh flowers to its villas, apartments and the golf club area in 3 to 4 hours. From birthday bouquets to wedding stage flowers at the Golf Course & Country Club, every order is confirmed with a photo and video on WhatsApp before our rider leaves.',
         cov='We deliver to the golf-course villas around Lake City Golf Course & Country Club, the Downtown commercial strip, and the residential sectors near the Lake City Ring Road interchange.',
         gate='Our riders carry valid CNICs for checkpoint clearance at the Lake City gates. Share your gate\u2019s guard phone number or inform security that a Lahore Bouquet courier is arriving \u2014 we\u2019ll send the rider\u2019s name and number on WhatsApp before dispatch.',
         event='Yes \u2014 wedding flowers, bridal bouquets, stage d\u00e9cor flowers and car d\u00e9cor for events at the Lake City Golf Course & Country Club. Book at least 24 hours ahead so flowers stay fresh and entry can be coordinated.'),
    dict(slug='valencia-town', name='Valencia Town', fee='Rs. 400', time='2.5–3.5 hours',
         landmarks=['Valencia main boulevard', 'Valencia commercial market', 'Residential blocks A–D', 'Near DHA Rahbar'],
         nearby=[('Tariq Gardens', 'tariq-gardens'), ('EME Society', 'eme-society'), ('DHA Rahbar', 'dha-rahbar')],
         intro='Valencia Town\u2019s wide boulevards and family homes order some of our most beautiful birthday and anniversary bouquets. Lahore Bouquet delivers across Valencia Town in 2.5 to 3.5 hours \u2014 fresh roses, lilies, money bouquets and midnight surprises, all confirmed with a photo and video on WhatsApp first.',
         cov='We cover Valencia\u2019s main boulevard, the commercial market area and residential blocks A to D, plus the streets bordering DHA Rahbar.',
         gate='Valencia Town has security-managed entrances. Just share your block, street and house number \u2014 and if your street needs gate clearance, send us the guard\u2019s number on WhatsApp and our rider will coordinate.',
         event='Yes \u2014 we decorate homes in Valencia for birthdays, bridal showers and nikkah functions: balloon garlands, backdrops, fairy lights and fresh flower styling. Book 2\u20133 days ahead for decoration setups.'),
    dict(slug='eme-society', name='EME Society', fee='Rs. 400', time='2.5–3.5 hours',
         landmarks=['EME DHA sectors', 'EME commercial area', 'Main boulevard', 'Near Valencia Town'],
         nearby=[('Valencia Town', 'valencia-town'), ('NFC Society', 'nfc'), ('DHA Rahbar', 'dha-rahbar')],
         intro='EME Society\u2019s planned sectors are a regular stop for our riders. Lahore Bouquet delivers fresh bouquets, cakes and gift combos across EME in 2.5 to 3.5 hours \u2014 with photo and video approval on WhatsApp before anything leaves for delivery.',
         cov='We deliver across EME\u2019s sectors and the commercial area along the main boulevard, including the blocks near Valencia Town.',
         gate='Share your sector, street and house number precisely \u2014 EME\u2019s grid layout makes exact addresses important. For gated streets, our rider coordinates entry on WhatsApp.',
         event='Yes \u2014 birthday room decoration, nikkah home setups and anniversary surprises across EME Society. Decoration bookings need 2\u20133 days\u2019 notice.'),
    dict(slug='nfc', name='NFC Society', fee='Rs. 400', time='2.5–3.5 hours',
         landmarks=['NFC Society Phase 1 & 2', 'Main commercial strip', 'Near Wapda Town', 'Residential blocks'],
         nearby=[('EME Society', 'eme-society'), ('Valencia Town', 'valencia-town'), ('Wapda Town', 'wapda-town')],
         intro='NFC Society Phase 1 and 2 get same-day flower delivery from Lahore Bouquet in 2.5 to 3.5 hours. Birthdays, anniversaries, get-well bouquets and midnight surprises \u2014 every order confirmed with a photo and video on WhatsApp before dispatch.',
         cov='We cover NFC Phase 1 and Phase 2 residential blocks and the main commercial strip, plus nearby streets towards Wapda Town.',
         gate='Most of NFC is openly accessible; for any gated street just share the details on WhatsApp and our rider will call on arrival.',
         event='Yes \u2014 home birthday decoration and small event flower setups across NFC. Book decorations 2\u20133 days ahead.'),
    dict(slug='tariq-gardens', name='Tariq Gardens', fee='Rs. 400', time='2.5–3.5 hours',
         landmarks=['Tariq Gardens residential blocks', 'Main park area', 'Commercial shops strip', 'Near Valencia Town'],
         nearby=[('Valencia Town', 'valencia-town'), ('NFC Society', 'nfc'), ('EME Society', 'eme-society')],
         intro='Tariq Gardens is a quiet family neighbourhood \u2014 perfect for surprise flower deliveries. Lahore Bouquet reaches Tariq Gardens in 2.5 to 3.5 hours with fresh bouquets, teddy combos and midnight birthday surprises, all photo-and-video approved on WhatsApp first.',
         cov='We deliver across Tariq Gardens\u2019 residential blocks, the main park area and the commercial shops strip.',
         gate='Share your block and house number; riders coordinate on WhatsApp for smooth handover at your door.',
         event='Yes \u2014 birthday and anniversary home decoration in Tariq Gardens, plus nikkah flower setups. 2\u20133 days\u2019 notice for decorations.'),
    dict(slug='dha-rahbar', name='DHA Rahbar', fee='Rs. 400', time='3–4 hours',
         landmarks=['DHA Rahbar sectors', 'Bedian Road access', 'Rahbar commercial', 'Near Valencia Town'],
         nearby=[('Valencia Town', 'valencia-town'), ('EME Society', 'eme-society'), ('DHA', 'dha')],
         intro='DHA Rahbar\u2019s growing sectors near Bedian Road are fully covered by Lahore Bouquet \u2014 fresh flower delivery in 3 to 4 hours, from everyday bouquets to wedding flowers. Photo and video approval on WhatsApp before every dispatch.',
         cov='We cover DHA Rahbar\u2019s sectors along Bedian Road and the Rahbar commercial area.',
         gate='DHA Rahbar has security checkpoints \u2014 share your sector and street, and our rider will coordinate entry via WhatsApp with valid ID.',
         event='Yes \u2014 wedding and event flowers for DHA Rahbar venues and homes, including stage d\u00e9cor. Book events 24 hours ahead.'),
    dict(slug='al-kabir-town', name='Al Kabir Town', fee='Rs. 500', time='3–4 hours',
         landmarks=['Al Kabir Town Phase 1 & 2', 'Raiwind Road frontage', 'Main commercial boulevard', 'Residential blocks'],
         nearby=[('Bahria Orchard', 'bahria-orchard'), ('Raiwind Road', 'raiwind-road'), ('Lake City', 'lake-city')],
         intro='Al Kabir Town on Raiwind Road gets Lahore Bouquet\u2019s full menu \u2014 fresh bouquets, money bouquets, cakes, teddy bears and midnight surprises \u2014 delivered in 3 to 4 hours. Every order is photo-and-video approved on WhatsApp before the rider leaves.',
         cov='We deliver across Al Kabir Town Phase 1 and 2, the main commercial boulevard and all residential blocks.',
         gate='Share your phase, block and house number; our rider calls on WhatsApp before arrival for easy handover.',
         event='Yes \u2014 birthday decoration and wedding flower services across Al Kabir Town. Decorations need 2\u20133 days\u2019 booking.'),
    dict(slug='bahria-orchard', name='Bahria Orchard', fee='Rs. 500', time='3–4 hours',
         landmarks=['Bahria Orchard Phase 1–4', 'Grand Mosque Bahria Orchard', 'Orchard commercial areas', 'Raiwind Road link'],
         nearby=[('Al Kabir Town', 'al-kabir-town'), ('Raiwind Road', 'raiwind-road'), ('Bahria Town', 'bahria-town')],
         intro='Bahria Orchard Phase 1 to 4 \u2014 Lahore Bouquet delivers fresh flowers, gift combos and midnight birthday surprises here in 3 to 4 hours. From the Grand Mosque area to the far phases, every bouquet is confirmed with a photo and video on WhatsApp first.',
         cov='We cover all four phases of Bahria Orchard, the Grand Mosque vicinity and the commercial areas.',
         gate='Bahria Orchard\u2019s gates need visitor coordination \u2014 share your phase/block and we\u2019ll arrange entry on WhatsApp with the rider\u2019s details.',
         event='Yes \u2014 home and venue decoration plus wedding flowers across Bahria Orchard. Book 24 hours ahead for events.'),
    dict(slug='raiwind-road', name='Raiwind Road', fee='Rs. 500', time='3–4 hours',
         landmarks=['Raiwind Road corridor', 'Bhobtian Chowk', 'Housing societies along the road', 'Near Lake City'],
         nearby=[('Lake City', 'lake-city'), ('Bahria Orchard', 'bahria-orchard'), ('Thokar Niaz Baig', 'thokar-niaz-baig')],
         intro='The Raiwind Road corridor \u2014 from Thokar to Bhobtian Chowk and beyond \u2014 is covered by Lahore Bouquet with a 3 to 4 hour delivery window. Farmhouses, societies and homes along the road all get fresh bouquets with WhatsApp photo-and-video approval.',
         cov='We deliver along the Raiwind Road corridor including Bhobtian Chowk, adjoining housing societies and farmhouse areas.',
         gate='Farmhouses and societies here vary \u2014 share your exact location pin on WhatsApp and our rider will navigate to you.',
         event='Yes \u2014 farmhouse wedding and event flowers are a specialty on Raiwind Road: stage d\u00e9cor, car d\u00e9cor and bulk garlands. Book events 24\u201348 hours ahead.'),
    dict(slug='thokar-niaz-baig', name='Thokar Niaz Baig', fee='Rs. 300', time='2–3 hours',
         landmarks=['Thokar Niaz Baig interchange', 'M-2 motorway access', 'Canal Road', 'Multan Road junction'],
         nearby=[('Iqbal Town', 'iqbal-town'), ('Faisal Town', 'faisal-town'), ('Johar Town', 'johar-town')],
         intro='Thokar Niaz Baig \u2014 Lahore\u2019s gateway interchange \u2014 gets fast flower delivery from Lahore Bouquet in 2 to 3 hours. The interchange location means quick rider access to surrounding areas too. Photo and video approval on WhatsApp before every dispatch.',
         cov='We cover the Thokar Niaz Baig interchange area, Canal Road stretches and the Multan Road junction neighbourhoods.',
         gate='Share your exact street or society name \u2014 the area around the interchange is busy, so a WhatsApp location pin helps our rider reach you fastest.',
         event='Yes \u2014 birthday and wedding flower delivery around Thokar, including quick 2-hour rush orders when slots allow.'),
    dict(slug='iqbal-town', name='Iqbal Town', fee='Rs. 300', time='2–3 hours',
         landmarks=['Moon Market Iqbal Town', 'Karim Block', 'Wahdat Road', 'Residential blocks'],
         nearby=[('Faisal Town', 'faisal-town'), ('Thokar Niaz Baig', 'thokar-niaz-baig'), ('Model Town', 'model-town')],
         intro='Moon Market\u2019s own Iqbal Town \u2014 one of Lahore\u2019s liveliest commercial-residential areas \u2014 gets Lahore Bouquet delivery in 2 to 3 hours. Fresh bouquets for every occasion, midnight surprises, and WhatsApp photo-and-video approval before dispatch.',
         cov='We deliver across Iqbal Town\u2019s residential blocks, Karim Block, Moon Market surroundings and Wahdat Road.',
         gate='Moon Market traffic can slow riders at peak hours \u2014 order a little earlier in the evening, or choose morning delivery for the fastest service.',
         event='Yes \u2014 birthday surprises and home decoration across Iqbal Town, plus wedding flowers. Decorations need 2\u20133 days\u2019 notice.'),
    dict(slug='faisal-town', name='Faisal Town', fee='Rs. 300', time='2–3 hours',
         landmarks=['Faisal Town blocks A–D', 'Main boulevard', 'Near Moon Market', 'Model Town link road'],
         nearby=[('Iqbal Town', 'iqbal-town'), ('Model Town', 'model-town'), ('Johar Town', 'johar-town')],
         intro='Faisal Town\u2019s blocks A to D are a quick ride for our delivery team \u2014 fresh flowers at your door in 2 to 3 hours. Birthdays, anniversaries, nikkah flowers and midnight surprises, every order confirmed with a photo and video on WhatsApp first.',
         cov='We cover Faisal Town blocks A, B, C and D, the main boulevard and streets towards Model Town link road.',
         gate='Share your block, street and house number \u2014 Faisal Town\u2019s similar-looking streets make exact addresses important.',
         event='Yes \u2014 home decoration for birthdays and bridal showers across Faisal Town. Book decorations 2\u20133 days ahead.'),
]

def doc(a):
    return {
        '_id': f"areaPage-{a['slug']}",
        '_type': 'areaPage',
        'title': f"Flower Delivery in {a['name']} Lahore",
        'slug': {'_type': 'slug', 'current': a['slug']},
        'areaName': a['name'],
        'deliveryFee': a['fee'],
        'deliveryTime': a['time'],
        'intro': a['intro'],
        'landmarks': a['landmarks'],
        'faqs': [
            {'_type': 'object', '_key': 'f1', 'question': f"How long does flower delivery to {a['name']} Lahore take, and what is the fee?",
             'answer': f"Delivery to {a['name']} takes {a['time']} with a delivery fee of {a['fee']}. Order on WhatsApp (0310-4225974) and we\u2019ll confirm your slot instantly."},
            {'_type': 'object', '_key': 'f2', 'question': f"Which parts of {a['name']} do you deliver to?",
             'answer': a['cov'] + ' Share your complete address on WhatsApp for the fastest delivery.'},
            {'_type': 'object', '_key': 'f3', 'question': f"How does the rider reach me in {a['name']}?",
             'answer': a['gate']},
            {'_type': 'object', '_key': 'f4', 'question': f"Do you do event and decoration flowers in {a['name']}?",
             'answer': a['event']},
            {'_type': 'object', '_key': 'f5', 'question': f"WhatsApp par {a['name']} ke liye order kaise karun?",
             'answer': f"0310-4225974 par likhein \u2014 masalan \u2018{a['name']} me birthday ke liye gulab ka bouquet chahiye.\u2019 Hum apko WhatsApp par phoolon ki photo aur video bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain."},
        ],
        'nearbyAreas': [{'_type': 'object', '_key': f"n{i}", 'name': n, 'slug': s} for i, (n, s) in enumerate(a['nearby'])],
        'seoTitle': f"Flower Delivery in {a['name']} Lahore | {a['fee']}, {a['time']}",
        'seoDescription': f"Same-day flower delivery to {a['name']} Lahore in {a['time']}. Delivery fee {a['fee']}. Fresh bouquets, midnight surprises. Photo & video on WhatsApp first.",
    }

def api(path, payload):
    req = urllib.request.Request(
        f"https://{PROJECT}.api.sanity.io/v2021-06-07/data/mutate/{DATASET}",
        data=json.dumps(payload).encode(),
        headers={'Authorization': f'Bearer {TOKEN}', 'Content-Type': 'application/json'})
    return json.load(urllib.request.urlopen(req, timeout=60))

mutations = [{'createOrReplace': doc(a)} for a in AREAS]
# delete test doc if present
mutations.append({'delete': {'id': 'areaPage-test1'}})
res = api('mutate', {'mutations': mutations})
results = res.get('results', [])
ok = sum(1 for r in results if r.get('operation') in ('create', 'update', 'delete'))
print(f"Transaction: {res.get('transactionId')}")
print(f"Operations ok: {ok}/{len(mutations)}")
