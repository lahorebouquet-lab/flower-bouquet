#!/usr/bin/env python3
"""Import 8 new blogs into Sanity (hgqfqfmw/production) as blog documents.
Idempotent via fixed _id = blog-<slug>. FAQs extracted from static pages."""
import json, re, urllib.request, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
env = {}
for line in open(os.path.join(BASE, '.env.local')):
    line = line.strip()
    if line and '=' in line and not line.startswith('#'):
        k, v = line.split('=', 1)
        env[k.strip()] = v.strip().strip('"').strip("'")

PROJECT, DATASET, TOKEN = 'hgqfqfmw', 'production', env['SANITY_API_WRITE_TOKEN']
APP = os.path.join(BASE, 'app', 'blog')

def span(text, key):
    return {'_type': 'span', '_key': key, 'text': text, 'marks': []}

def para(text, key):
    return {'_type': 'block', '_key': key, 'style': 'normal', 'children': [span(text, key + 's')]}

def h2(text, key):
    return {'_type': 'block', '_key': key, 'style': 'h2', 'children': [span(text, key + 's')]}

def bullet(text, key):
    return {'_type': 'block', '_key': key, 'style': 'normal', 'listItem': 'bullet', 'level': 1,
            'children': [span(text, key + 's')]}

def extract_faqs(slug):
    src = open(os.path.join(APP, slug, 'page.tsx')).read()
    pairs = re.findall(r'q:\s*"((?:[^"\\]|\\.)*)"\s*,\s*a:\s*"((?:[^"\\]|\\.)*)"', src)
    out = []
    for i, (q, a) in enumerate(pairs):
        q = q.replace('\\"', '"').replace("\\'", "'")
        a = a.replace('\\"', '"').replace("\\'", "'")
        out.append({'_type': 'object', '_key': f'fq{i}', 'question': q, 'answer': a})
    return out

def extract_meta(slug):
    """Pull title/excerpt from BLOG_POSTS in app/blog/page.tsx"""
    src = open(os.path.join(BASE, 'app', 'blog', 'page.tsx')).read()
    m = re.search(r'slug:\s*"%s".*?title:\s*"((?:[^"\\]|\\.)*)".*?excerpt:\s*"((?:[^"\\]|\\.)*)".*?readTime:\s*"([^"]*)".*?tag:\s*"([^"]*)"' % re.escape(slug), src, re.S)
    if not m:
        raise ValueError(f'meta not found for {slug}')
    return {'title': m.group(1).replace('\\"', '"'), 'excerpt': m.group(2).replace('\\"', '"'),
            'readTime': m.group(3), 'tag': m.group(4)}

BODIES = {
'valentines-day-flowers-lahore': [
    para('Valentine\u2019s Day is the busiest flower day of the year in Lahore \u2014 and the most romantic. Every 14th February, thousands of red rose bouquets travel across DHA, Gulberg, Bahria Town and Model Town. Here\u2019s how to get yours right.', 'v1'),
    h2('Best Valentine\u2019s Flowers', 'v2'),
    bullet('Classic red roses (12, 24 or 50 stems) \u2014 the undisputed Valentine\u2019s favourite', 'v3'),
    bullet('Red rose + teddy bear combo \u2014 our most-ordered Valentine\u2019s gift', 'v4'),
    bullet('Pink roses for new relationships \u2014 romantic without going overboard', 'v5'),
    bullet('Chocolate bouquet for a sweet twist on the tradition', 'v6'),
    h2('Valentine\u2019s Prices in Lahore', 'v7'),
    para('Valentine\u2019s rose bouquets start at Rs. 1,180 for a hand-tied bunch. A dozen red roses runs Rs. 2,500\u20134,500 depending on stem length and whether roses are local or imported. Grand 50-rose bouquets go up to Rs. 12,000+. Combo with teddy (from Rs. 1,499) or cake for the full surprise.', 'v8'),
    h2('Order Early \u2014 14 Feb Sells Out', 'v9'),
    para('Valentine\u2019s slots book out 3\u20135 days before 14 February, and prices rise in the final 48 hours as rose demand peaks. Order by 12 February for the best selection and normal prices. We offer same-day delivery on the day itself while slots last \u2014 and our midnight surprise service (11:30 PM\u201312:15 AM) for the ultimate romantic gesture. Every bouquet is confirmed with a photo and video on WhatsApp before dispatch.', 'v10'),
],
'mothers-day-flowers-lahore': [
    para('Nothing says \u201c Ami, I love you\u201d like fresh flowers on Mother\u2019s Day. Pink roses, elegant lilies and soft pastel bouquets are Lahore\u2019s most-ordered Mother\u2019s Day gifts \u2014 delivered with a free handwritten card.', 'm1'),
    h2('Best Flowers for Mother\u2019s Day', 'm2'),
    bullet('Pink roses \u2014 the universal flower of gratitude and admiration', 'm3'),
    bullet('Oriental lilies \u2014 elegant, fragrant, long-lasting', 'm4'),
    bullet('Mixed pastel bouquets \u2014 soft, cheerful, perfect for Ami', 'm5'),
    bullet('Carnations \u2014 the traditional Mother\u2019s Day flower', 'm6'),
    h2('Prices', 'm7'),
    para('Mother\u2019s Day bouquets start at Rs. 1,180. Most people spend Rs. 2,000\u20134,000 on a beautiful bouquet for their mother. Lily bouquets (Rs. 2,800\u20135,500) are the premium pick.', 'm8'),
    h2('Ordering Tips', 'm9'),
    para('Order a day early \u2014 Mother\u2019s Day morning is our busiest delivery window. Add a heartfelt card message (free with every bouquet) and consider a cake or mithai box alongside. We deliver across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt, Wapda Town and Askari with photo and video approval on WhatsApp first.', 'm10'),
],
'eid-flowers-gifts-lahore': [
    para('Eid in Lahore means family, feasting \u2014 and thoughtful gifts. Fresh flower bouquets, sweet boxes and money bouquets are increasingly popular Eid gifts, for Eid-ul-Fitr and Eid-ul-Adha alike.', 'e1'),
    h2('Best Eid Gift Ideas', 'e2'),
    bullet('Fresh flower bouquet + mithai box \u2014 the classic Eid combination', 'e3'),
    bullet('Money bouquet (Eidi bouquet) \u2014 Eidi presented beautifully', 'e4'),
    bullet('Luxury gift hamper \u2014 flowers, chocolates and dry fruits', 'e5'),
    bullet('White and pastel bouquets \u2014 elegant for Eid mornings', 'e6'),
    h2('Eid Delivery Timings', 'e7'),
    para('We deliver throughout the Eid holidays with adjusted slots. The chand raat rush is real \u2014 order 2\u20133 days before Eid for guaranteed delivery. On Eid day itself, morning slots fill first. Bouquets start at Rs. 1,180; money bouquets are priced by denomination + Rs. 1,500 styling.', 'e8'),
    h2('For Overseas Pakistanis', 'e9'),
    para('Sending Eid love from the UK, USA or UAE? Order on WhatsApp, pay by international card, and we\u2019ll deliver to your family in Lahore with photo and video proof. Many of our Eid orders come from abroad.', 'e10'),
],
'sympathy-flowers-lahore': [
    para('When words fall short, flowers speak quietly. Lahore Bouquet handles condolence flower orders with the care and discretion they deserve \u2014 tasteful white arrangements delivered promptly and respectfully across Lahore.', 's1'),
    h2('Appropriate Sympathy Flowers', 's2'),
    bullet('White lilies \u2014 the traditional flower of sympathy and peace', 's3'),
    bullet('White roses \u2014 respectful, pure, traditional', 's4'),
    bullet('White chrysanthemum arrangements \u2014 dignified condolence pieces', 's5'),
    para('Avoid bright celebratory colours for condolences. White and soft green arrangements are always appropriate.', 's6'),
    h2('How Ordering Works', 's7'),
    para('Message us on WhatsApp (0310-4225974) with the recipient\u2019s address. We\u2019ll suggest a suitable arrangement, confirm with a photo before dispatch, and deliver quietly \u2014 our riders are briefed to be discreet. Same-day 2\u20135 hour delivery across all Lahore areas. Include a short condolence message and we\u2019ll handwrite it on the card.', 's8'),
],
'birthday-flower-delivery-lahore': [
    para('Birthdays deserve flowers \u2014 and in Lahore, they deserve them at exactly midnight. Lahore Bouquet delivers birthday bouquets from Rs. 1,180 with same-day 2\u20135 hour delivery, or make it unforgettable with our midnight surprise service.', 'b1'),
    h2('Birthday Bouquet Ideas', 'b2'),
    bullet('Classic red rose bouquet \u2014 timeless, from Rs. 1,180', 'b3'),
    bullet('Elegant lily bouquet \u2014 sophisticated and fragrant', 'b4'),
    bullet('Cheerful sunflower bouquet \u2014 Rs. 2,400\u20133,800, perfect for friends', 'b5'),
    bullet('Chocolate bouquet \u2014 premium chocolates arranged like flowers', 'b6'),
    h2('The Midnight Birthday Surprise', 'b7'),
    para('Our midnight slot (11:30 PM\u201312:15 AM, +Rs. 500) delivers flowers, cake, teddy bear and a handwritten card right at 12 AM. Book before 8 PM. We can also decorate the birthday room with balloons and flowers \u2014 book decorations 2\u20133 days ahead.', 'b8'),
    h2('How to Order in 3 Steps', 'b9'),
    para('1) Pick your bouquet or tell us your budget on WhatsApp. 2) Add extras \u2014 cake, teddy bear, helium balloons, free card message. 3) Approve the photo and video we send before dispatch. Nothing leaves until you say it looks perfect.', 'b10'),
],
'proposal-engagement-flowers-lahore': [
    para('She\u2019ll remember this moment forever \u2014 make it perfect. From grand 100-rose proposals to intimate ring-box bouquets, Lahore Bouquet helps you plan a proposal she can\u2019t refuse.', 'p1'),
    h2('Proposal Flower Ideas', 'p2'),
    bullet('100 red roses \u2014 the grand romantic gesture', 'p3'),
    bullet('Ring-box rose bouquet \u2014 the ring hidden among roses', 'p4'),
    bullet('Heart-shaped rose arrangement \u2014 for the big question moment', 'p5'),
    bullet('Proposal room decoration \u2014 petals, candles, fairy lights', 'p6'),
    h2('Planning Tips', 'p7'),
    para('Book 3\u20135 days ahead for proposal setups \u2014 we\u2019ll coordinate timing secretly with you on WhatsApp. Keep the card message short and from the heart. Our team can also arrange the full romantic room decoration (Rs. 14,999+) while you bring her in. Photo and video approval before anything is dispatched.', 'p8'),
],
'rose-prices-lahore-2026': [
    para('How much do roses actually cost in Lahore in 2026? This guide breaks down real per-stem and bouquet prices \u2014 local vs imported \u2014 so you never overpay.', 'r1'),
    h2('Rose Price Table 2026 (Lahore)', 'r2'),
    bullet('Single rose stem (local): Rs. 100\u2013150', 'r3'),
    bullet('Single rose stem (imported/Dutch): Rs. 400\u2013650', 'r4'),
    bullet('6 roses bouquet: Rs. 900\u20131,800', 'r5'),
    bullet('12 roses (one dozen): Rs. 1,800\u20133,500', 'r6'),
    bullet('24 roses: Rs. 3,500\u20136,500', 'r7'),
    bullet('50 roses: Rs. 7,500\u201312,000', 'r8'),
    bullet('100 roses: Rs. 15,000\u201325,000', 'r9'),
    h2('Local vs Imported Roses', 'r10'),
    para('Local (desi) roses are fragrant, affordable and perfect for everyday bouquets and garlands. Imported Dutch roses have longer stems, bigger heads and last 5\u20137 days \u2014 worth it for weddings, proposals and Valentine\u2019s Day. Ask our florist on WhatsApp which suits your occasion and budget.', 'r11'),
    h2('What Affects the Price?', 'r12'),
    para('Season (winter roses cost more), stem length, special days (Valentine\u2019s week prices peak), and add-ons like premium wrapping or a keepsake box. Our bouquets always start at Rs. 1,180 with photo and video approval before delivery.', 'r13'),
],
'wedding-car-decoration-price-lahore': [
    para('The baraat car deserves flowers too. Here\u2019s what wedding car decoration actually costs in Lahore in 2026 \u2014 fresh vs artificial \u2014 and how to book.', 'w1'),
    h2('Car Decoration Prices 2026', 'w2'),
    bullet('Artificial flower car d\u00e9cor: Rs. 5,000\u20139,000 \u2014 reusable, weather-proof', 'w3'),
    bullet('Fresh flower car d\u00e9cor: Rs. 8,000\u201315,000 \u2014 roses, seasonal blooms', 'w4'),
    bullet('Luxury fresh d\u00e9cor (imported roses/orchids): Rs. 15,000\u201325,000', 'w5'),
    h2('Fresh vs Artificial?', 'w6'),
    para('Fresh flowers photograph beautifully and smell divine \u2014 best for daytime baraats. Artificial lasts the whole wedding season and survives Lahore\u2019s heat. Many families choose fresh for the main car and artificial for accompanying cars.', 'w7'),
    h2('Booking Tips', 'w8'),
    para('Book 5\u20137 days ahead in wedding season (Nov\u2013Feb). Share your car model and colour on WhatsApp \u2014 d\u00e9cor is styled to match. We decorate at your home or venue 2\u20133 hours before the baraat departs. Pair with our full wedding d\u00e9cor services for stage, home and room packages.', 'w9'),
],
}

BLOGS = [
    ('valentines-day-flowers-lahore', '2026-10-06'),
    ('mothers-day-flowers-lahore', '2026-10-06'),
    ('eid-flowers-gifts-lahore', '2026-10-06'),
    ('sympathy-flowers-lahore', '2026-10-06'),
    ('birthday-flower-delivery-lahore', '2026-10-06'),
    ('proposal-engagement-flowers-lahore', '2026-10-06'),
    ('rose-prices-lahore-2026', '2026-10-06'),
    ('wedding-car-decoration-price-lahore', '2026-10-06'),
]

def api(payload):
    req = urllib.request.Request(
        f"https://{PROJECT}.api.sanity.io/v2021-06-07/data/mutate/{DATASET}",
        data=json.dumps(payload).encode(),
        headers={'Authorization': f'Bearer {TOKEN}', 'Content-Type': 'application/json'})
    return json.load(urllib.request.urlopen(req, timeout=60))

docs = []
for slug, pubdate in BLOGS:
    meta = extract_meta(slug)
    faqs = extract_faqs(slug)
    if len(faqs) < 3:
        print(f"WARNING: only {len(faqs)} FAQs for {slug}")
    docs.append({
        '_id': f'blog-{slug}',
        '_type': 'blog',
        'title': meta['title'],
        'slug': {'_type': 'slug', 'current': slug},
        'excerpt': meta['excerpt'],
        'tag': meta['tag'],
        'readTime': meta['readTime'],
        'publishedAt': pubdate,
        'author': 'Lahore Bouquet Florist Team',
        'body': BODIES[slug],
        'faqs': faqs,
        'isFeatured': False,
    })

res = api({'mutations': [{'createOrReplace': d} for d in docs]})
ok = sum(1 for r in res.get('results', []) if r.get('operation') in ('create', 'update'))
print(f"Imported: {ok}/{len(docs)} blog documents")
print("IDs:", ', '.join(f"blog-{s}" for s, _ in BLOGS))
