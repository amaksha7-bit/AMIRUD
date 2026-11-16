# AMIRUD Store — starter website

A responsive, static e-commerce storefront starter for AMIRUD.

## Included
- Responsive landing page and product catalogue
- Category filters and price sorting
- Shopping bag with quantity controls and subtotal
- Contact form that opens the visitor's email app
- Pinterest domain-verification meta tag in `index.html`

## Important before launch
This is a front-end starter, not a production checkout system.
- Replace the four sample products in `products.js` with your real products, prices, descriptions and categories.
- Replace the CSS-generated product artwork with real product photographs when available.
- Change `hello@amirud.in` in `script.js` to the business email you actually use.
- Connect a real payment/order backend (for example Shopify, WooCommerce, Razorpay or another suitable provider) before accepting payments. The checkout button is intentionally demo-only.
- Add accurate shipping, return, privacy and terms policies before selling.

## Pinterest verification
The screenshot supplied for this project showed this Pinterest verification tag, which is already included in the `<head>` of `index.html`:

`<meta name="p:domain_verify" content="fc87c78c1d9aaf9b0195624904fc8100"/>`

After the site is deployed:
1. In Pinterest Business Hub, open Settings → Link to Pinterest / Claimed accounts → Claim website.
2. Choose Add HTML tag and make sure the tag shown there matches the tag in `index.html`.
3. Enter your live website URL and click Verify.
4. If Pinterest provides a different tag, replace the meta tag in `index.html` with the exact new tag, redeploy, then verify again.

## Deploy option A — easiest: Vercel Drop
1. Extract this ZIP on your computer.
2. Open https://vercel.com/drop and sign in.
3. Drag the extracted `amirud-store` folder (the folder containing `index.html`) into the page.
4. Follow the prompts and deploy.
5. Vercel will provide a live `*.vercel.app` URL.

## Deploy option B — GitHub + Vercel
1. Create a new repository on https://github.com/new.
2. Upload the contents of this folder to the repository root (make sure `index.html` is at the root).
3. Open https://vercel.com/new and import the GitHub repository.
4. For this plain HTML/CSS/JS site, no build command is needed. Deploy the project.
5. Every later push to the connected production branch can trigger a new deployment.

## Local preview
Double-click `index.html` to preview in a browser. For best results, use a simple local server or Vercel preview.

## Custom domain
After deployment, open the Vercel project → Settings → Domains, add a domain you own, and follow Vercel's DNS instructions. Do not assume `amirud.in` or `amirud.com` is available until you check and register it.
