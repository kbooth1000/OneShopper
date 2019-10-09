let currentSystem = "2.0"

var productTitle = document.querySelector(".info-grid .title"),
  pricingLevelArr = document.querySelectorAll(".pricing-level"),
  seerArr = document.querySelectorAll(".seer"),
  productImage = document.querySelector(".product-image img"),
  levelDescriptionArr = document.querySelectorAll(".level-description"),
  levelFeatureListArr = document.querySelectorAll(".level-features"),
  pricePerMonthArr = document.querySelectorAll(".price-month"),
  levelTotFinancingArr = document.querySelectorAll(".level-tot-financing"),
  levelTotPriceArr = document.querySelectorAll(".level-tot-price")
const totFinancingDefault = "0%, 60 months (OAC)"
const gasSystems = {
  "1.5": {},
  "2.0": {
    productTitle: "1.5 Ton Split System AC w/ Gas Furnace (80%)",
    pricingLevels: ["Platinum", "Gold", "Silver"],
    seers: ["18", "16", "14"],
    levelDescriptions: [
      "Highest Efficiency, Total Comfort",
      "Higher Energy Efficient Choice",
      "Increased Efficiency, Competitive Price",
    ],
    levelFeatureLists: [
      [
        "Entire Duct Cleaning & Sanitization($1K)",
        "18 SEER Inverter Variable",
        "Variable speed Indoor Fan",
        "10 Year Parts & 10 Year Labor Warranty",
      ],
      [
        "Entire Duct Cleaning & Sanitization($1K)",
        "Two Stage Compressor",
        "Up to 92% AFUE Two Stage Furnace",
        "10 Year Parts / 1 Year Labor Warranty",
      ],
      [
        "Entire Duct Cleaning & Sanitization($1K)",
        "Single Stage Compressor",
        "80% AFUE",
        "10 Year Parts / 1 Year Labor Warranty",
      ],
    ],
    perMonthPrices: [108, 86, 66],
    levelTotFinancings: [
      totFinancingDefault,
      totFinancingDefault,
      totFinancingDefault,
    ],
    levelTotPrices: [6485, 5185, 3985],
  },
  "3.0": {},
}

productTitle.innerText = gasSystems[currentSystem].productTitle
pricingLevelArr.forEach((lvl, i) => {
  lvl.innerText = gasSystems[currentSystem].pricingLevels[i]
})
seerArr.forEach((lvl, i) => {
  lvl.innerText = `${gasSystems[currentSystem].seers[i]} SEER`
})
levelDescriptionArr.forEach((lvl, i) => {
  lvl.innerText = gasSystems[currentSystem].levelDescriptions[i]
})

levelFeatureListArr.forEach((ul, i) => {
  gasSystems[currentSystem].levelFeatureLists[i].forEach((txt, i) => {
    let li = document.createElement("li")
    li.innerText = txt
    ul.appendChild(li)
  })
})

pricePerMonthArr.forEach((lvl, i) => {
  lvl.innerText = `$${gasSystems[currentSystem].perMonthPrices[i]} / month`
})

levelTotFinancingArr.forEach((lvl, i) => {
  lvl.innerText = `$${gasSystems[currentSystem].levelTotFinancings[i]} / month`
})

levelTotPriceArr.forEach((lvl, i) => {
  lvl.innerText = `$${gasSystems[currentSystem].levelTotPrices[i]}`
})
