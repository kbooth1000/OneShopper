var productTitle = document.querySelector(".info-grid .title"),
  pricingLevelArr = document.querySelectorAll(".pricing-level"),
  seerArr = document.querySelectorAll(".seer"),
  productImage = document.querySelector(".product-image img"),
  levelDescriptionArr = document.querySelectorAll(".level-description"),
  levelFeatureListArr = document.querySelectorAll(".level-features"),
  pricePerMonthArr = document.querySelectorAll(".price-month"),
  levelTotFinancingArr = document.querySelectorAll(".level-tot-financing"),
  levelTotPriceArr = document.querySelectorAll(".level-tot-price")

productTitle.innerText = gasSystems[recommendedUnit].productTitle
pricingLevelArr.forEach((lvl, i) => {
  lvl.innerText = gasSystems[recommendedUnit].pricingLevels[i]
})
seerArr.forEach((lvl, i) => {
  lvl.innerText = `${gasSystems[recommendedUnit].seers[i]} SEER`
})
levelDescriptionArr.forEach((lvl, i) => {
  lvl.innerText = gasSystems[recommendedUnit].levelDescriptions[i]
  console.log("grid.js---", `${gasSystems[recommendedUnit].seers[i]} SEER`)
})

levelFeatureListArr.forEach((ul, i) => {
  gasSystems[recommendedUnit].levelFeatureLists[i].forEach((txt, i) => {
    let li = document.createElement("li")
    li.innerText = txt
    ul.appendChild(li)
  })
})

levelTotFinancingArr.forEach((lvl, i) => {
  lvl.innerText = `$${gasSystems[recommendedUnit].levelTotFinancings[i]} / month`
})

levelTotPriceArr.forEach((lvl, i) => {
  let sysPrice = gasSystems[recommendedUnit].levelTotPrices[i]
  lvl.innerText = `$${sysPrice}`
  pricePerMonthArr[i].innerText = `$${Math.floor(sysPrice / 60)}/month`
})
