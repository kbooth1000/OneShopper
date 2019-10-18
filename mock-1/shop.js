'use strict';



var asides = document.querySelectorAll('aside');
var recommendedUnit = '1.5';
var recommendedReplacements = [];
var heatingType = '',
    fullSysOrReplace = '';
var d = document,
    unitName = d.querySelector('.unit-name'),
    unitTonnage = d.querySelector('.unit-tonnage'),
    unitSeer = d.querySelector('.unit-seer'),
    unitImage = d.querySelector('.unit-image'),
    unitBtu = d.querySelector('.unit-btu'),
    unitPrice = d.querySelector('.unit-price'),
    unitPricePackage = d.querySelector('.unit-price-package'),
    unitFinancingBox = d.querySelector('.financing-box'),
    replacementProducts = d.querySelector('.replacement-products'),
    step1 = d.querySelector('.step1'),
    step2 = d.querySelector('.step2'),
    step3 = d.querySelector('.step3'),
    step4 = d.querySelector('.step4'),
    closeModalButton = d.querySelector('.close-modal'),
    recommendation = d.querySelector('.recommendation');

var checkZip = function checkZip(e) {
    e.preventDefault();
    var formVal = e.target.querySelector('input').value; // From
    //github.com/latusinski/polyfill-array-includes/blob/master/array-includes.js
    https: if (!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', {
            value: function value(searchElement, fromIndex) {
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }

                var o = Object(this);
                var len = o.length >>> 0;

                if (len === 0) {
                    return false;
                }

                var n = fromIndex | 0;
                var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                function sameValueZero(x, y) {
                    return (
                        x === y ||
                        (typeof x === 'number' &&
                            typeof y === 'number' &&
                            isNaN(x) &&
                            isNaN(y))
                    );
                }

                while (k < len) {
                    if (sameValueZero(o[k], searchElement)) {
                        return true;
                    }
                    k++;
                }
                return false;
            }
        });
    }
    if (zipcodes.includes(formVal)) {
        step2.classList.add('show');
        step2.classList.add('active');
        e.target.classList.remove('active');
        asides[0].textContent = 'Great, we serve your area!';
        var wait = setTimeout(function () {
            step1.classList.add('hide');
        }, 500);
    } else {
        asides[0].textContent = 'Sorry, we do not yet serve your area!';
    }
};
var getHeatingType = function getHeatingType(e) {
    step3.classList.add('show');
    step3.classList.add('active');
    heatingType = e.target.value;
    step2.classList.remove('active');
};
var getFullSysOrReplace = function getFullSysOrReplace(e) {
    step4.classList.add('show');
    step4.classList.add('active');
    fullSysOrReplace = e.target.value;
    step3.classList.remove('active');
};
var getRecUnit = function getRecUnit(val) {
    if (heatingType === 'pump') {
        return electricUnits['sf'.concat(val)];
    } else if (heatingType === 'furnace') {
        return gasUnits['sf'.concat(val)];
    }
};
var getRecReplacements = function getRecReplacements(val) {
    return replacementParts
        .filter(function (part) {
            return heatingType === part.systemHeatingType;
        })
        .map(function (part) {
            if (heatingType === part.systemHeatingType) {
                return {
                    name: part.category,
                    info: part['sf'.concat(val)]
                };
            }
        });
};
var getRecommendation = function getRecommendation() {
    if (recommendedUnit && recommendedUnit.name) {
        unitName.innerHTML = 'We recommend this high-efficiency system package:<br /> <b>'.concat(
            recommendedUnit.name,
            '</b>'
        );
    } else {
        unitName.textContent = '';
    }
    if (recommendedUnit && recommendedUnit.ton) {
        unitTonnage.textContent = 'Tonnage: '.concat(recommendedUnit.ton);
    } else {
        unitTonnage.textContent = '';
    }
    if (recommendedUnit && recommendedUnit.seer) {
        unitSeer.textContent = 'SEER: '.concat(recommendedUnit.seer);
    } else {
        unitSeer.textContent = '';
    }
    if (recommendedUnit && (recommendedUnit.btu || recommendedUnit.kw)) {
        unitBtu.textContent = ''.concat(
            recommendedUnit.btu ?
                'BTU: ' + recommendedUnit.btu + 'K' :
                'kW: ' + recommendedUnit.kw
        );
    } else {
        unitBtu.textContent = '';
    }
    if (recommendedUnit && recommendedUnit.priceSplit) {
        unitPrice.innerHTML = 'Price:  $'
            .concat(recommendedUnit.priceSplit, '\n             <em>(')
            .concat(
                heatingType === 'furnace' ?
                    'Complete furnace, condenser & coil system -- gas split system' :
                    'Complete heat pump system',
                ')</em>'
            );
    } else {
        unitPrice.textContent = '';
    }
    if (recommendedUnit && recommendedUnit.pricePackage) {
        unitPricePackage.innerHTML = ''
            .concat(!recommendedUnit.priceSplit ? 'Price:' : ' ', '  $')
            .concat(recommendedUnit.pricePackage, '\n             <em>(')
            .concat(
                heatingType === 'furnace' ?
                    'Package gas system -- replace existing system' :
                    'Package electric heat pump system',
                ')</em>'
            );
    } else {
        unitPrice.textContent = '';
    }
    if (recommendedUnit && recommendedUnit.imgUrl) {
        unitImage.innerHTML = '<img src="'.concat(
            recommendedUnit.imgUrl ?
                recommendedUnit.imgUrl :
                'images/no-image.png',
            '" alt="Image of the unit." />'
        );
    } else {
        unitImage.innerHTML = '';
    }
    if (
        recommendedUnit &&
        (recommendedUnit.priceSplit || recommendedUnit.pricePackage)
    ) {
        unitFinancingBox.innerHTML = '<div class="image-div"><img src="https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/2019-07-15%2012_58_29-60%20months%20financing%20images.png/:/rs=w:1440,h:1440" alt=""></div>\n            <p style="align-self: center; margin: auto; text-align: center; ">With 0% financing, pay as low as <span class="financing-monthly-amount">'.concat(
            recommendedUnit.priceSplit ?
                '$' + Math.ceil(recommendedUnit.priceSplit / 60) :
                '$' + Math.ceil(recommendedUnit.pricePackage / 60),
            '</span> per month!</p>'
        );
    }
    if (recommendedReplacements.length > 0) {
        replacementProducts.innerHTML = recommendedReplacements.reduce(function (
            parts,
            part
        ) {
            var thisPart;

            if (part.name) {
                thisPart =
                    '<div class="row">' +
                    '<div class="image-cell">' +
                    '<img class="product-image" src="' +
                    part.info.imgUrl +
                    '">' +
                    '</div>' +
                    '<section class="product-info">' +
                    '<h3 class="product-name">' +
                    part.name +
                    '</h3>' +
                    '<div class="product-description"></div>' +
                    '</section>' +
                    '<section class="product-specs">' +
                    '<div class="replacement-product-price"> $' +
                    part.info.price +
                    '</div>' +
                    (part.info.ton ?
                        ' <div class="product-seer">Tonnage: ' +
                        part.info.ton +
                        '</div>' : '') +
                    (part.info.seer ?
                        ' <div class="product-seer">SEER: ' +
                        part.info.seer +
                        '</div>' :
                        '') +
                    (part.info.btu ?
                        ' <div class="product-btu">BTU: ' + part.info.btu + 'K' + '</div>' :
                        '') +
                    '</section>' +
                    '</div>';
            }
            return parts + thisPart;
        },
            '');
    }
    recommendation.classList.add('show');
};
var getTonnage = function getTonnage(e) {
    d.querySelector(
        '.footage-dropdown option[value="' + e.target.value + '"]'
    ).selected = 'selected';
    recommendedUnit = getRecUnit(e.target.value);
    recommendedReplacements = getRecReplacements(e.target.value); // getRecommendation();
};

var getFootage = function getFootage(e) {
    d.querySelector(
        '.tonnage-dropdown option[value="' + e.target.value + '"]'
    ).selected = 'selected';
    recommendedUnit = getRecUnit(e.target.value);
    recommendedReplacements = getRecReplacements(e.target.value); // getRecommendation();
};
var openModal = function openModal(e) {
    fullSysOrReplace = e.target.value;
    var fullSysDetails = document.querySelector('.full-system-details'),
        replacePartsBox = document.querySelector('.replacement-parts-box');
    if (fullSysOrReplace === 'needsFullSystem') {
        fullSysDetails.classList.add('display');
        replacePartsBox.classList.remove('display');

        // fullSysDetails.innerHTML = gridHTML(heatingType, '2.0');
    }
    if (fullSysOrReplace === 'needsReplacementParts') {
        replacePartsBox.classList.add('display');
        fullSysDetails.classList.remove('display');
    }
    getRecommendation();
};
var closeModal = function closeModal(e) {
    recommendation.classList.remove('show');
    d.querySelector('.footage-dropdown option[value="0"]').selected =
        'selected';
    d.querySelector('.tonnage-dropdown option[value="0"]').selected =
        'selected';
    recommendation.scrollTo(0, 0);
    d.querySelector('#full-sys').checked = false;
    d.querySelector('#replace').checked = false;
};
step1.addEventListener('submit', checkZip);
step2.addEventListener('change', getHeatingType);
step3.addEventListener('change', getFullSysOrReplace);
d.querySelector('.tonnage').addEventListener('change', getTonnage);
d.querySelector('.footage').addEventListener('change', getFootage);
step4.addEventListener('change', openModal); // d.querySelector('.submit-full').addEventListener('click',
// getRecommendation);
closeModalButton.addEventListener('click', closeModal);