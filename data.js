/* Gus N Bruno demo data, 2026-11-07.
 REAL: products, names, images, copy and prices from https://gusnbruno.letterkenny.tv (Shopify /products.json; the store runs on Flaviar Checkout).
 Network retailers: active, in-stock (0 < stock < 9000) LiquidCommerce retailer variants matched on product name, 2026-11-07.
 Gopuff ZIPs: delivery ZIPs of Gopuff locations carrying the product in the gopuff_feed availability snapshot, 2026-11-07.
 NOT REAL: no order is placed; shipping ($14.99), Gopuff fee ($4.99) and 8% tax are illustrative. */
window.DEMO = {
 "key": "gusnbruno",
 "brand": "Gus N Bruno",
 "storeName": "Gus N Bruno",
 "orderPrefix": "GUS",
 "catalog": {
  "old-style-canadian-whisky": {
   "name": "Old Style Canadian Whisky",
   "short": "Old Style Canadian Whisky",
   "size": "750ML",
   "tag": "Whisky",
   "price": 13500,
   "image": "assets/p-old-style-canadian-whisky.jpg",
   "gallery": [
    "assets/p-old-style-canadian-whisky.jpg"
   ],
   "lead": "",
   "specs": "WHISKY",
   "desc": [
    "This ain't your regular tame, tired, ten-ply whisky . GUS N' BRUNO is harvested through hours of chorin' to make for a valiant, vibrant, velvety finish. For no-necks, nut tuggers and ne'er do wells alike, this fine whisky is sure to thrill, thump and throttle. Thoroughly.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "gus-n-bruno": {
   "name": "Old Style Canadian Whisky",
   "short": "Old Style Canadian Whisky",
   "size": "750ML",
   "tag": "Whisky",
   "price": 4800,
   "image": "assets/p-gus-n-bruno.png",
   "gallery": [
    "assets/p-gus-n-bruno.png"
   ],
   "lead": "",
   "specs": "WHISKY",
   "desc": [
    "This ain't your regular tame, tired, ten-ply whisky . GUS N' BRUNO is harvested through hours of chorin' to make for a valiant, vibrant, velvety finish. For no-necks, nut tuggers and ne'er do wells alike, this fine whisky is sure to thrill, thump and throttle. Thoroughly.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  }
 },
 "order": [
  "old-style-canadian-whisky",
  "gus-n-bruno"
 ],
 "defaultHandle": "old-style-canadian-whisky",
 "retailers": [],
 "realHandles": [],
 "gopuff": null,
 "noShip": [
  "AK",
  "HI"
 ],
 "rates": {
  "shipping": 1499,
  "freeOver": 0,
  "gopuff": 499
 },
 "taxRate": 0.08,
 "expressAddress": [
  "233 S Wacker Dr",
  "Chicago",
  "60606"
 ],
 "fulfilIcon": "assets/logo.png",
 "rbNote": "",
 "text": {
  "fulfilReal": "In stock at licensed retailers in our network today. Enter your ZIP at checkout for delivery or shipping.",
  "fulfilLaunch": "Ships from a licensed retailer in your state. Rates show at checkout once you enter your address.",
  "cardReal": "In stock at network retailers",
  "cardLaunch": "Ships from licensed retailers",
  "soldOut": "Sold out.",
  "noShip": "We are not shipping to {state} yet.",
  "launchNote": "In the demo, no network retailer stocks this bottle yet. Licensed retailers are connected during onboarding, which takes about one week."
 }
};
