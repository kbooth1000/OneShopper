var productTitle = document.querySelector(".info-grid .title"),
  pricingLevelArr = document.querySelectorAll(".pricing-level"),
  seerArr = document.querySelectorAll(".seer"),
  productImage = document.querySelector(".product-image img"),
  levelDescriptionArr = document.querySelectorAll(".level-description"),
  levelFeatureListArr = document.querySelectorAll(".level-features"),
  pricePerMonthArr = document.querySelectorAll(".price-month"),
  levelTotFinancingArr = document.querySelectorAll(".level-tot-financing"),
  levelTotPriceArr = document.querySelectorAll(".level-tot-price")

productTitle.innerText = gasSystems[currentSystem].productTitle
pricingLevelArr.forEach((lvl, i) => {
  lvl.innerText = gasSystems[currentSystem].pricingLevels[i]
})
seerArr.forEach((lvl, i) => {
  lvl.innerText = `${gasSystems[currentSystem].seers[i]} SEER`
})
levelDescriptionArr.forEach((lvl, i) => {
  lvl.innerText = gasSystems[currentSystem].levelDescriptions[i]
  console.log("grid.js---", `${gasSystems[currentSystem].seers[i]} SEER`)
})

levelFeatureListArr.forEach((ul, i) => {
  gasSystems[currentSystem].levelFeatureLists[i].forEach((txt, i) => {
    let li = document.createElement("li")
    li.innerText = txt
    ul.appendChild(li)
  })
})

levelTotFinancingArr.forEach((lvl, i) => {
  lvl.innerText = `$${gasSystems[currentSystem].levelTotFinancings[i]} / month`
})

levelTotPriceArr.forEach((lvl, i) => {
  let sysPrice = gasSystems[currentSystem].levelTotPrices[i]
  lvl.innerText = `$${sysPrice}`
  pricePerMonthArr[i].innerText = `$${Math.floor(sysPrice / 60)}/month`
})
