function gridHTML(sysType, sysTonnage) {
  console.log("gridHTML: ", sysType);

  return `
<div class="info-grid">
  <div class="cell title">title</div>
  <div class="cell product-image">
    <img src="images/ach_goodman.png" alt="Goodman AC and Heating Unit">
  </div>
  <div class="cell pricing-info">


<div class="pricing-info-box">
  <section class="pricing-info-row platinum">
  <div class="cell level-name">
    <h3 class="pricing-level">Platinum</h3>
    <p class="seer">xx SEER</p>
  </div>
  <div class="cell level-info">
    <div class="level-description">one-line level description</div>
    <ul class="level-features">
      <!-- level feature list -->
    </ul>
  </div>
  <div class="cell level-price">
    <div class="price-month">$xx/month</div>
    <div class="level-financing">0%, 60 months (OAC)</div>
    <div class='level-tot-price'>$xxxx</div>
  </div>
</section>

<section class="pricing-info-row gold">
  <div class="cell level-name">
    <h3 class="pricing-level">Gold</h3>
    <p class="seer">xx SEER</p>
  </div>
  <div class="cell level-info">
    <div class="level-description">one-line level description</div>
    <ul class="level-features">
      <!-- level feature list -->
    </ul>
  </div>
  <div class="cell level-price">
    <div class="price-month">$xx/month</div>
    <div class="level-financing">0%, 60 months (OAC)</div>
    <div class='level-tot-price'>$xx</div>
  </div>
</section>

<section class="pricing-info-row silver">
  <div class="cell level-name">
    <h3 class="pricing-level">Silver</h3>
    <p class="seer">xx SEER</p>
  </div>
  <div class="cell level-info">
    <div class="level-description">one-line level description</div>
    <ul class="level-features">
      <!-- level feature list -->
    </ul>
  </div>
  <div class="cell cell level-price">
    <div class="price-month">$xx/mo</div>
    <div class="level-financing">0%, 60 months (OAC)</div>
    <div class='level-tot-price'>$xxxx</div>
  </div>
</section>

</div>


  </div>
  <div class="cell finance-btn1">
    <div class="12-month-button">
        <a target="_blank" href="https://application.enerbank.com/#/link?spnum=8665104594&cid=10021&promo=RE468&loamt=" class="apply-button">12 Month <span>Same-As-Cash*</span></a>
        <aside class="hover-show">*Loans provided by EnerBank USA, Member FDIC, (1245 Brickyard Rd., Suite 600, Salt Lake City, UT 84106) on approved credit, for a limited time. Repayment terms vary from 24 to 132 months. Interest waived if repaid in 365 days. 18.58% fixed APR, effective as of August 1, 2019, subject to change. Interest starts accruing when the loan closes.</aside>
    </div>  
  </div>
  <div class="cell brand-logos">
      <img src="images/brand-logos.png" alt="brand logos">
  </div>
  <div class="cell finance-btn2">
  <div class="60-month-button">
      <a target="_blank" href="https://application.enerbank.com/#/link?spnum=8665104594&cid=10021&promo=ZRE78&loamt="" class="apply-button">0.00%<span>60-Month Loan*</span></a>
      <aside class="hover-show">*Loans provided by EnerBank USA, Member FDIC, (1245 Brickyard Rd., Suite 600, Salt Lake City, UT 84106) on approved credit, for a limited time. Repayment terms vary from 24 to 132 months. Interest waived if repaid in 365 days. 18.58% fixed APR, effective as of August 1, 2019, subject to change. Interest starts accruing when the loan closes.</aside>
  </div> 
</div>
  <footer class="cell footer">
      <img src="https://seal-utah.bbb.org/seals/darkgray-seal-200-65-bbb-22001531.png" /><img style="-webkit-user-select: none;margin: auto;" src="https://application.enerbank.com/content/images/MemberFDIC.png">
    <img src="https://application.enerbank.com/content/images/e-b-logo.png">
  </footer>

`
}
