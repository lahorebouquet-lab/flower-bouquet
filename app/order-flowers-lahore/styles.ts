/* Ported verbatim from the owner-supplied landing ZIP (client/src/index.css),
 * with bare element selectors scoped under .lb-site so the styles stay on
 * this page and beat the site-wide Tailwind preflight. The two Vite
 * @import lines were dropped (Tailwind is already loaded globally). */
export const LANDING_CSS = `
:root {
  --burgundy: #741f3b;
  --burgundy-deep: #4a152a;
  --burgundy-soft: #8d3a55;
  --blush: #f5e3e4;
  --blush-deep: #e9c5cc;
  --cream: #fffaf3;
  --paper: #fffdf9;
  --ink: #261c20;
  --muted: #796c6d;
  --line: #eadfd8;
  --gold: #b88b54;
  --radius: 18px;
}

.lb-site, .lb-site * { box-sizing: border-box; }
/* smooth scroll handled by scrollIntoView in JS */
.lb-site { margin: 0; background: var(--paper); color: var(--ink); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
.lb-site button, .lb-site input, .lb-site select { font: inherit; }
.lb-site a { color: inherit; text-decoration: none; }
.lb-site button { border: 0; }

.lb-site { overflow: hidden; }
.lb-container { width: min(1160px, calc(100% - 48px)); margin: 0 auto; }
.section-pad { padding: 112px 0; }

.announcement-bar { background: var(--burgundy); color: #fff7f2; font-size: 11px; letter-spacing: .11em; text-transform: uppercase; }
.announcement-inner { display: flex; align-items: center; justify-content: center; gap: 12px; min-height: 38px; }
.announcement-dot { width: 6px; height: 6px; border-radius: 99px; background: #f7c3ca; box-shadow: 0 0 0 4px rgba(247,195,202,.16); }
.announcement-divider { height: 13px; width: 1px; background: rgba(255,255,255,.28); }
.announcement-inner strong { color: #f7c3ca; font-weight: 600; }

.site-header { position: relative; z-index: 10; background: rgba(255,250,243,.94); border-bottom: 1px solid rgba(234,223,216,.82); }
.header-inner { min-height: 76px; display: flex; align-items: center; justify-content: space-between; }
.wordmark { display: inline-flex; align-items: center; gap: 10px; color: var(--burgundy); font-family: Georgia, "Times New Roman", serif; font-size: 21px; line-height: .88; letter-spacing: -.04em; }
.wordmark > span:last-child { display: flex; flex-direction: column; }
.wordmark b { font-weight: 500; }
.wordmark em { font-style: italic; font-size: 18px; margin-left: 13px; color: var(--burgundy-soft); }
.wordmark-mark { display: grid; place-items: center; width: 34px; height: 34px; color: var(--burgundy); border: 1px solid var(--blush-deep); border-radius: 50%; background: #fff; }
.header-right { display: flex; align-items: center; gap: 24px; font-size: 12px; color: var(--muted); }
.header-note { letter-spacing: .05em; }
.header-call { display: inline-flex; align-items: center; gap: 7px; color: var(--burgundy); font-weight: 700; }

.hero-section { position: relative; background: var(--cream); min-height: 660px; display: flex; align-items: center; }
.hero-grid { position: relative; z-index: 1; display: grid; grid-template-columns: .95fr 1.05fr; gap: 58px; align-items: center; padding: 74px 0 85px; }
.hero-copy { max-width: 565px; }
.kicker { display: flex; align-items: center; gap: 9px; margin: 0 0 22px; color: var(--burgundy-soft); font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
.kicker span { width: 26px; height: 1px; background: var(--burgundy-soft); }
.lb-site h1, .lb-site h2, .lb-site h3, .lb-site p { margin-top: 0; }
.lb-site h1, .lb-site h2 { font-family: Georgia, "Times New Roman", serif; font-weight: 400; letter-spacing: -.055em; }
.lb-site h1 { max-width: 600px; margin-bottom: 24px; color: var(--burgundy-deep); font-size: clamp(50px, 6vw, 82px); line-height: .94; }
.lb-site h1 i, .lb-site h2 i { font-style: italic; color: var(--burgundy-soft); }
.hero-lede { max-width: 490px; margin-bottom: 31px; color: var(--muted); font-size: 17px; line-height: 1.65; }
.hero-actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 48px; padding: 0 19px; border-radius: 999px; font-size: 13px; font-weight: 700; transition: transform .2s ease, box-shadow .2s ease, background .2s ease; cursor: pointer; }
.button:hover { transform: translateY(-2px); }
.button-primary { background: var(--burgundy); color: white; box-shadow: 0 11px 24px rgba(116,31,59,.2); }
.button-primary:hover { background: var(--burgundy-deep); box-shadow: 0 14px 28px rgba(116,31,59,.26); }
.button-ghost { background: transparent; color: var(--burgundy); border: 1px solid var(--blush-deep); }
.button-ghost:hover { background: #fff; }
.urgency { display: flex; align-items: center; gap: 8px; margin: 18px 0 0; color: var(--burgundy-soft); font-size: 12px; font-weight: 600; }
.hero-trust { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 34px; padding-top: 23px; border-top: 1px solid var(--line); color: var(--muted); font-size: 11px; }
.hero-trust span { display: inline-flex; align-items: center; gap: 5px; }
.hero-trust svg { color: var(--burgundy-soft); }
.hero-visual { position: relative; min-height: 484px; }
.hero-image-wrap { position: absolute; inset: 0 16px 0 30px; overflow: hidden; border-radius: 180px 180px 20px 20px; background: var(--blush); box-shadow: 0 24px 55px rgba(74,21,42,.13); }
.hero-image-wrap::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(74,21,42,.12), transparent 52%); pointer-events: none; }
.hero-image-wrap img { width: 100%; height: 100%; display: block; object-fit: cover; }
.hero-image-stamp { position: absolute; z-index: 1; top: 28px; left: 28px; display: flex; align-items: center; gap: 10px; color: white; text-transform: uppercase; letter-spacing: .1em; }
.hero-image-stamp span { display: grid; place-items: center; width: 29px; height: 29px; border: 1px solid rgba(255,255,255,.8); border-radius: 50%; font: 12px Georgia, serif; }
.hero-image-stamp small { font-size: 9px; line-height: 1.3; }
.floating-card { position: absolute; z-index: 3; display: flex; align-items: center; gap: 9px; border: 1px solid rgba(234,223,216,.9); background: rgba(255,253,249,.94); box-shadow: 0 17px 35px rgba(74,21,42,.12); }
.floating-card-proof { left: -2px; bottom: 54px; padding: 12px 17px 12px 12px; border-radius: 11px; }
.floating-card-price { right: -2px; bottom: 17px; display: block; padding: 13px 18px; border-radius: 11px; color: var(--burgundy); }
.floating-icon { display: grid; place-items: center; width: 32px; height: 32px; color: var(--burgundy); background: var(--blush); border-radius: 50%; }
.floating-card b, .floating-card small { display: block; }
.floating-card b { color: var(--ink); font-size: 11px; }
.floating-card small, .price-label { display: block; margin-top: 3px; color: var(--muted); font-size: 10px; }
.floating-card-price b { margin-top: 3px; font: 21px Georgia, serif; letter-spacing: -.05em; }
.hero-bloom { position: absolute; border: 1px solid rgba(233,197,204,.64); border-radius: 50%; pointer-events: none; }
.bloom-one { width: 300px; height: 300px; top: -140px; left: -140px; }
.bloom-two { width: 260px; height: 260px; right: -95px; bottom: -125px; }

.proof-strip { background: #fff; border-bottom: 1px solid var(--line); }
.proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
.proof-grid > div { display: flex; align-items: center; gap: 12px; min-height: 98px; padding: 17px 24px; border-right: 1px solid var(--line); color: var(--burgundy); }
.proof-grid > div:first-child { border-left: 1px solid var(--line); }
.proof-grid span { display: block; }
.proof-grid b, .proof-grid small { display: block; }
.proof-grid b { font-size: 12px; color: var(--ink); }
.proof-grid small { margin-top: 5px; color: var(--muted); font-size: 10px; line-height: 1.35; }

.order-section { background: var(--paper); }
.order-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 90px; align-items: center; }
.lb-site h2 { margin-bottom: 18px; color: var(--burgundy-deep); font-size: clamp(39px, 4.6vw, 62px); line-height: .98; }
.section-intro > p:not(.kicker), .faq-intro > p:not(.kicker) { max-width: 390px; color: var(--muted); font-size: 15px; line-height: 1.7; }
.order-assurance { display: flex; gap: 12px; align-items: flex-start; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--line); }
.order-assurance > span { display: grid; place-items: center; width: 25px; height: 25px; color: var(--burgundy); background: var(--blush); border-radius: 50%; }
.order-assurance p { margin: 0; color: var(--muted); font-size: 12px; line-height: 1.5; }
.order-assurance b { color: var(--ink); }
.order-form { padding: 30px; background: #fff; border: 1px solid var(--line); border-radius: 17px; box-shadow: 0 18px 42px rgba(74,21,42,.07); }
.form-heading { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 20px; padding-bottom: 18px; border-bottom: 1px solid var(--line); }
.form-heading span { color: var(--burgundy); font: 24px Georgia, serif; letter-spacing: -.04em; }
.form-heading small { color: var(--muted); font-size: 10px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; margin-bottom: 13px; }
.order-form label { display: block; color: var(--muted); font-size: 10px; font-weight: 700; letter-spacing: .03em; }
.order-form input, .order-form select { width: 100%; height: 43px; margin-top: 7px; padding: 0 12px; color: var(--ink); background: #fffdfa; border: 1px solid var(--line); border-radius: 8px; outline: 0; font-size: 12px; }
.order-form input:focus, .order-form select:focus { border-color: var(--burgundy-soft); box-shadow: 0 0 0 3px rgba(141,58,85,.09); }
.order-form input::placeholder { color: #b5a9a5; }
.button-form { width: 100%; margin-top: 8px; background: var(--burgundy); color: white; }
.form-footnote { display: flex; align-items: center; justify-content: center; gap: 6px; margin: 13px 0 0; color: #998b88; font-size: 10px; }

.section-tint { background: #fcf3ef; }
.center-heading { text-align: center; }
.center-heading .kicker { justify-content: center; }
.center-heading > p:last-child { margin: -5px auto 0; color: var(--muted); font-size: 15px; }
.benefit-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 52px; }
.benefit-card { min-height: 235px; padding: 24px; background: rgba(255,255,255,.66); border: 1px solid rgba(234,223,216,.9); border-radius: 14px; }
.line-icon { display: grid; place-items: center; width: 42px; height: 42px; margin-bottom: 24px; color: var(--burgundy); background: #fff; border-radius: 50%; box-shadow: 0 6px 16px rgba(116,31,59,.08); }
.card-eyebrow { margin-bottom: 8px; color: var(--burgundy-soft); font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
.benefit-card h3, .product-card h3, .process-grid h3 { margin-bottom: 10px; color: var(--burgundy-deep); font: 24px Georgia, serif; letter-spacing: -.04em; }
.benefit-card > p:last-child, .product-card .product-body > p, .process-grid p { color: var(--muted); font-size: 12px; line-height: 1.65; }

.products-section { background: var(--paper); }
.section-heading-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 25px; }
.section-heading-row h2 { margin-bottom: 0; }
.text-link { display: inline-flex; align-items: center; gap: 6px; padding-bottom: 5px; border-bottom: 1px solid var(--burgundy-soft); color: var(--burgundy); font-size: 12px; font-weight: 700; white-space: nowrap; }
.product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 54px; }
.product-price { display: block; margin-bottom: 14px; color: var(--burgundy); font: 700 20px Georgia, serif; letter-spacing: -.02em; }
.product-order { display: flex; align-items: center; justify-content: center; gap: 7px; min-height: 42px; padding: 0 12px; border-radius: 8px; background: #1f9e63; color: #fff; font-size: 12px; font-weight: 700; transition: background .2s ease; }
.product-order:hover { background: #188553; }
.product-note { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-top: 34px; padding-top: 26px; border-top: 1px solid var(--line); }
.product-note p { max-width: 560px; color: var(--muted); font-size: 12px; line-height: 1.65; }
.review-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
.review-card { margin: 0; padding: 26px; background: #fff; border: 1px solid var(--line); border-radius: 14px; }
.review-stars { display: flex; gap: 3px; margin-bottom: 16px; color: #d79b2b; }
.review-card blockquote { margin: 0 0 20px; color: var(--burgundy-deep); font: 17px/1.5 Georgia, serif; }
.review-card figcaption b { display: block; color: var(--burgundy); font-size: 13px; }
.review-card figcaption small { color: var(--muted); font-size: 11px; }
.product-card { overflow: hidden; background: #fff; border: 1px solid var(--line); border-radius: 15px; transition: transform .2s ease, box-shadow .2s ease; }
.product-card:hover { transform: translateY(-5px); box-shadow: 0 16px 28px rgba(74,21,42,.1); }
.product-image { position: relative; aspect-ratio: 1 / 1; overflow: hidden; background: var(--blush); }
.product-image img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform .35s ease; }
.product-card:hover .product-image img { transform: scale(1.04); }
.product-image span { position: absolute; top: 14px; left: 14px; padding: 7px 10px; background: rgba(255,253,249,.9); border-radius: 99px; color: var(--burgundy); font-size: 9px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; }
.product-body { padding: 21px 21px 20px; }
.product-body h3 { margin-bottom: 8px; }
.product-body > p { min-height: 42px; margin-bottom: 20px; }
.product-meta { display: flex; align-items: center; justify-content: space-between; padding-top: 15px; border-top: 1px solid var(--line); }
.product-meta strong { color: var(--burgundy); font-size: 12px; }
.product-meta a { display: inline-flex; align-items: center; gap: 4px; color: var(--burgundy); font-size: 11px; font-weight: 700; }

.section-dark { background: var(--burgundy-deep); color: #fffaf4; }
.occasion-layout { display: grid; grid-template-columns: .72fr 1.28fr; gap: 90px; align-items: center; }
.kicker-light { color: #f5cbd0; }
.kicker-light span { background: #f5cbd0; }
.section-dark h2 { color: #fffaf4; }
.occasion-intro > p:not(.kicker) { max-width: 350px; color: #cdbbc0; font-size: 14px; line-height: 1.7; }
.button-light { background: #fffaf4; color: var(--burgundy-deep); }
.button-light:hover { background: #f6dfe0; }
.occasion-intro .button { margin-top: 20px; }
.occasion-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.occasion-card { position: relative; display: flex; flex-direction: column; min-height: 148px; padding: 19px; border: 1px solid rgba(255,250,244,.16); background: rgba(255,255,255,.04); transition: border-color .2s ease, background .2s ease, transform .2s ease; }
.occasion-card:hover { transform: translateY(-3px); border-color: rgba(245,203,208,.6); background: rgba(255,255,255,.09); }
.occasion-card > span { display: grid; place-items: center; width: 34px; height: 34px; margin-bottom: 21px; color: #f5cbd0; border: 1px solid rgba(245,203,208,.38); border-radius: 50%; }
.occasion-card b { font: 18px Georgia, serif; font-weight: 400; }
.occasion-card small { margin-top: 6px; padding-right: 14px; color: #cdbbc0; font-size: 10px; line-height: 1.35; }
.occasion-arrow { position: absolute; top: 20px; right: 18px; color: #f5cbd0; }

.delivery-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
.delivery-art { position: relative; min-height: 340px; display: grid; place-items: center; background: var(--blush); border-radius: 50% 50% 16px 16px; }
.delivery-art::before, .delivery-art::after { content: ""; position: absolute; border: 1px solid rgba(116,31,59,.16); border-radius: 50%; }
.delivery-art::before { inset: 28px; }
.delivery-art::after { inset: 58px; }
.delivery-circle { position: relative; z-index: 1; display: grid; place-items: center; gap: 10px; width: 154px; height: 154px; color: var(--burgundy); border: 1px solid var(--burgundy-soft); border-radius: 50%; text-align: center; font-size: 10px; letter-spacing: .16em; }
.delivery-circle b { font-size: 12px; letter-spacing: .2em; }
.delivery-sticker { position: absolute; z-index: 2; right: 6%; bottom: 12%; width: 106px; height: 106px; display: grid; place-content: center; border-radius: 50%; background: var(--burgundy); color: #fbe8e4; font-size: 11px; line-height: 1.2; text-align: center; transform: rotate(8deg); }
.delivery-sticker b { color: white; font-size: 12px; }
.delivery-copy > p:not(.kicker) { max-width: 470px; color: var(--muted); font-size: 15px; line-height: 1.7; }
.delivery-points { display: grid; gap: 11px; margin: 28px 0; padding: 21px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.delivery-points span { display: flex; align-items: center; gap: 8px; color: var(--ink); font-size: 12px; }
.delivery-points svg { color: var(--burgundy-soft); }

.process-section { padding-bottom: 120px; }
.process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; margin-top: 58px; }
.process-grid > div { position: relative; padding-top: 23px; border-top: 1px solid var(--burgundy-soft); }
.process-number { color: var(--burgundy-soft); font: 20px Georgia, serif; }
.process-grid h3 { margin-top: 18px; margin-bottom: 8px; }
.process-grid p { max-width: 270px; margin-bottom: 0; }

.faq-layout { display: grid; grid-template-columns: .75fr 1.25fr; gap: 120px; }
.faq-intro .text-link { margin-top: 19px; }
.faq-list { border-top: 1px solid var(--line); }
.faq-item { border-bottom: 1px solid var(--line); }
.faq-item button { display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 20px 0; background: transparent; color: var(--ink); text-align: left; font-size: 14px; cursor: pointer; }
.faq-item button svg { flex: none; color: var(--burgundy-soft); transition: transform .2s ease; }
.faq-item.is-open button svg { transform: rotate(180deg); }
.faq-item p { max-width: 600px; margin: -3px 0 21px; color: var(--muted); font-size: 13px; line-height: 1.65; }

.final-cta { background: var(--burgundy); color: white; }
.final-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; padding: 83px 0; }
.final-cta h2 { margin-bottom: 0; color: white; }
.final-cta h2 i { color: #f5cbd0; }
.final-cta-actions { display: flex; flex-direction: column; align-items: flex-start; min-width: 310px; }
.final-cta-actions > p { max-width: 280px; margin-bottom: 19px; color: #e0cdd0; font-size: 13px; line-height: 1.5; }
.final-phone { display: inline-flex; align-items: center; gap: 7px; margin-top: 17px; color: #f5cbd0; font-size: 12px; font-weight: 700; }

.site-footer { background: #33131f; color: #d7c4c6; }
.footer-grid { display: grid; grid-template-columns: 1.7fr 1fr 1fr 1fr; gap: 30px; padding: 57px 0 45px; }
.wordmark-footer { color: #fbe8e4; }
.wordmark-footer .wordmark-mark { color: #f5cbd0; border-color: rgba(245,203,208,.35); background: transparent; }
.wordmark-footer em { color: #f5cbd0; }
.footer-grid > div:first-child p { max-width: 220px; margin: 19px 0 0; color: #a88d93; font-size: 12px; line-height: 1.6; }
.footer-label { margin-bottom: 15px; color: #f5cbd0; font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
.footer-grid > div:not(:first-child) a, .footer-grid > div:not(:first-child) p:not(.footer-label) { display: block; margin: 0 0 8px; color: #d7c4c6; font-size: 12px; line-height: 1.55; }
.footer-grid > div:not(:first-child) a:hover, .footer-bottom a:hover { color: #f5cbd0; }
.footer-bottom { display: flex; align-items: center; justify-content: space-between; gap: 15px; padding: 17px 0; border-top: 1px solid rgba(255,255,255,.1); color: #91767d; font-size: 10px; }
.footer-bottom a { display: inline-flex; align-items: center; gap: 4px; color: #cdbbc0; }

.mobile-sticky-cta { display: none; }

@media (max-width: 960px) {
  .hero-grid { grid-template-columns: 1fr; gap: 36px; padding-top: 64px; }
  .hero-copy { max-width: 720px; }
  .hero-visual { min-height: 430px; max-width: 640px; width: 100%; margin: 0 auto; }
  .proof-grid > div { padding-inline: 14px; }
  .order-grid, .occasion-layout, .delivery-grid, .faq-layout { gap: 55px; }
  .benefit-grid { grid-template-columns: repeat(2, 1fr); }
  .product-grid { grid-template-columns: repeat(3, 1fr); }
  .process-grid { grid-template-columns: repeat(2, 1fr); gap: 33px; }
}

@media (max-width: 720px) {
  .lb-container { width: min(100% - 32px, 560px); }
  .section-pad { padding: 78px 0; }
  .announcement-inner { justify-content: flex-start; padding-block: 9px; font-size: 9px; line-height: 1.35; }
  .announcement-divider, .announcement-inner strong { display: none; }
  .header-inner { min-height: 67px; }
  .header-note { display: none; }
  .header-call { font-size: 11px; }
  .hero-section { min-height: 0; }
  .hero-grid { padding: 59px 0 72px; }
  h1 { font-size: clamp(46px, 14vw, 66px); }
  h2 { font-size: clamp(39px, 12vw, 55px); }
  .hero-lede { font-size: 15px; }
  .hero-trust { gap: 10px 14px; margin-top: 25px; }
  .hero-trust span { font-size: 10px; }
  .hero-visual { min-height: 355px; }
  .hero-image-wrap { inset: 0 12px 0 16px; border-radius: 130px 130px 16px 16px; }
  .floating-card-proof { left: -4px; bottom: 35px; }
  .floating-card-price { right: -5px; bottom: 6px; }
  .proof-grid { grid-template-columns: 1fr 1fr; }
  .proof-grid > div { min-height: 83px; padding: 12px 10px; border-bottom: 1px solid var(--line); }
  .proof-grid > div:nth-child(2) { border-right: 0; }
  .proof-grid > div:nth-child(3) { border-left: 1px solid var(--line); border-bottom: 0; }
  .proof-grid > div:nth-child(4) { border-bottom: 0; border-right: 0; }
  .proof-grid b { font-size: 10px; }
  .proof-grid small { font-size: 9px; }
  .order-grid, .occasion-layout, .delivery-grid, .faq-layout { grid-template-columns: 1fr; gap: 45px; }
  .order-grid .section-intro { max-width: 500px; }
  .order-form { padding: 22px 17px; }
  .form-heading { display: block; }
  .form-heading small { display: block; margin-top: 7px; }
  .benefit-grid { grid-template-columns: 1fr; }
  .benefit-card { min-height: 0; }
  .section-heading-row { display: block; }
  .section-heading-row .text-link { margin-top: 23px; }
  .product-grid { grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 36px; }
  .product-image span { top: 8px; left: 8px; padding: 5px 7px; font-size: 8px; }
  .product-body { padding: 12px 10px 12px; }
  .product-card h3 { margin-bottom: 4px; font-size: 17px; }
  .product-card .product-body > p { min-height: 36px; margin-bottom: 8px; font-size: 11px; line-height: 1.45; }
  .product-price { margin-bottom: 10px; font-size: 17px; }
  .product-order { min-height: 40px; padding: 0 6px; font-size: 11px; }
  .product-note { display: block; margin-top: 26px; }
  .product-note .button { width: 100%; margin-top: 16px; }
  .review-grid { grid-template-columns: 1fr; gap: 12px; margin-top: 36px; }
  .review-card { padding: 20px; }
  .occasion-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
  .occasion-card { min-height: 139px; padding: 15px; }
  .occasion-card > span { margin-bottom: 15px; }
  .delivery-art { min-height: 280px; }
  .process-grid { grid-template-columns: 1fr; gap: 33px; margin-top: 45px; }
  .process-grid p { max-width: 340px; }
  .final-cta-inner { display: block; padding: 70px 0 86px; }
  .final-cta-actions { min-width: 0; margin-top: 33px; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 33px 20px; padding-bottom: 36px; }
  .footer-grid > div:first-child { grid-column: span 2; }
  .footer-bottom { align-items: flex-start; flex-direction: column; gap: 8px; padding-bottom: 75px; }
  .mobile-sticky-cta { position: fixed; z-index: 50; right: 0; bottom: 0; left: 0; display: grid; grid-template-columns: 1.3fr 1fr; gap: 1px; padding: 8px 12px; background: rgba(51,19,31,.94); box-shadow: 0 -8px 22px rgba(51,19,31,.18); backdrop-filter: blur(9px); }
  .mobile-sticky-cta a { display: flex; align-items: center; justify-content: center; gap: 7px; min-height: 43px; border-radius: 7px; color: white; font-size: 11px; font-weight: 700; }
  .mobile-sticky-cta a:first-child { background: #1f9e63; }
  .mobile-sticky-cta a:last-child { background: rgba(255,255,255,.1); }
}

@media (max-width: 390px) {
  .header-call { font-size: 10px; }
  .wordmark { font-size: 19px; }
  .wordmark em { font-size: 16px; }
  .hero-actions .button { width: 100%; }
  .hero-visual { min-height: 310px; }
  .floating-card-proof { padding-right: 11px; }
  .floating-card-price { padding-inline: 13px; }
  .occasion-card b { font-size: 16px; }
}
`;
