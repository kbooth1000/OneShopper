'use strict';
var zipcodes = ['30301', '30302', '30303', '30304', '30305', '30306', '30307', '30308', '30309', '30310', '30311', '30312', '30313', '30314', '30315', '30316', '30317', '30318', '30319', '30320', '30321', '30322', '30324', '30325', '30326', '30327', '30328', '30329', '30331', '30332', '30333', '30334', '30336', '30337', '30338', '30339', '30340', '30341', '30342', '30343', '30344', '30345', '30346', '30348', '30349', '30350', '30353', '30354', '30355', '30356', '30357', '30358', '30359', '30360', '30361', '30362', '30363', '30364', '30366', '30368', '30369', '30370', '30371', '30374', '30375', '30377', '30378', '30380', '30384', '30385', '30388', '30392', '30394', '30396', '30398', '31106', '31107', '31119', '31126', '31131', '31136', '31139', '31141', '31145', '31146', '31150', '31156', '31192', '31193', '31195', '31196', '39901', '30002', '30021', '30030', '30031', '30032', '30033', '30034', '30035', '30036', '30037', '30038', '30058', '30072', '30074', '30079', '30083', '30084', '30085', '30086', '30087', '30088', '30294', '30003', '30010', '30017', '30019', '30024', '30026', '30029', '30039', '30042', '30043', '30044', '30045', '30046', '30047', '30048', '30049', '30071', '30078', '30091', '30092', '30093', '30095', '30096', '30099', '30515', '30518', '30519', '30006', '30007', '30008', '30060', '30061', '30062', '30063', '30064', '30065', '30066', '30067', '30068', '30069', '30080', '30081', '30082', '30090', '30101', '30106', '30111', '30126', '30127', '30144', '30152', '30156', '30160', '30168', '31144', '30101', '30102', '30103', '30320', '30004', '30005', '30009', '30022', '30023', '30301', '30302', '30303', '30304', '30305', '30306', '30307', '30308', '30309', '30310', '30311', '30312', '30313', '30314', '30315', '30316', '30317', '30318', '30319', '30320', '30321', '30322', '30324', '30325', '30326', '30327', '30328', '30329', '30330', '30331', '30332', '30333', '30334', '30336', '30337', '30338', '30339', '30340', '30341', '30342', '30343', '30344', '30345', '30346', '30347', '30348', '30349', '30350', '30353', '30354', '30355', '30356', '30357', '30358', '30359', '30360', '30361', '30362', '30364', '30366', '30368', '30369', '30370', '30371', '30374', '30375', '30376', '30377', '30378', '30379', '30380', '30384', '30385', '30388', '30390', '30392', '30394', '30396', '30398', '31106', '31107', '31119', '31126', '31131', '31139', '31141', '31145', '31146', '31150', '31156', '31192', '31193', '31195', '31196', '30301', '30302', '30303', '30304', '30305', '30306', '30307', '30308', '30309', '30310', '30311', '30312', '30313', '30314', '30315', '30316', '30317', '30318', '30319', '30320', '30321', '30322', '30324', '30325', '30326', '30327', '30328', '30329', '30330', '30331', '30332', '30333', '30334', '30336', '30337', '30338', '30339', '30340', '30341', '30342', '30343', '30344', '30345', '30346', '30347', '30348', '30349', '30350', '30353', '30354', '30355', '30356', '30357', '30358', '30359', '30360', '30361', '30362', '30363', '30364', '30366', '30368', '30369', '30370', '30371', '30374', '30375', '30376', '30377', '30378', '30379', '30380', '30384', '30385', '30388', '30390', '30392', '30394', '30396', '30398', '31106', '31107', '31119', '31126', '31131', '31136', '31139', '31141', '31145', '31146', '31150', '31156', '31192', '31193', '31195', '31196', '39901', '31195', '31196', '30060', '30380', '30375', '30385', '30011', '30106', '30168', '30388', '30002', '30002', '30107', '30398', '30384', '30144', '30032', '30092', '30096', '30620', '30143', '30108', '30109', '30109', '30329', '30205', '30515', '30518', '30519', '30114', '30115', '30169', '30112', '30116', '30117', '30118', '30119', '30120', '30121', '30123', '30039', '30341', '30366', '39901', '30268', '30111', '30021', '30337', '30349', '30288', '30012', '30013', '30094', '30014', '30015', '30016', '30339', '30028', '30040', '30041', '30019', '30132', '30157', '30030', '30031', '30032', '30033', '30034', '30035', '30036', '30037', '30060', '30069', '30060', '30069', '30340', '30360', '30362', '30133', '30134', '30135', '30154', '30333', '30026', '30029', '30095', '30096', '30097', '30098', '30099', '30032', '30338', '30346', '30356', '30360', '30344', '30364', '30294', '31141', '30137', '30322', '30170', '30120', '30145', '30212', '30213', '30214', '30215', '30270', '30298', '30297', '30298', '30297', '30310', '30330', '30396', '30303', '30641', '30220', '30017', '30223', '30224', '30228', '30354', '30229', '30141', '30114', '30115', '30142', '30188', '30336', '39901', '30143', '30018', '30005', '30022', '30024', '30097', '30236', '30237', '30238', '30144', '30152', '30156', '30160', '30145', '30183', '30260', '30236', '30042', '30043', '30044', '30045', '30046', '30049', '30146', '31126', '31126', '30047', '30048', '30122', '30038', '30058', '30307', '30063', '30248', '30052', '30250', '30126', '30065', '30148', '30148', '30006', '30007', '30008', '30060', '30061', '30062', '30063', '30064', '30065', '30066', '30067', '30068', '30069', '30090', '30253', '30252', '30253', '31192', '30083', '30004', '30009', '30655', '30656', '30259', '30260', '30287', '30150', '30065', '30151', '30056', '31136', '30263', '30264', '30265', '30271', '30003', '30010', '30071', '30091', '30092', '30093', '30319', '30120', '30033', '30306', '30026', '30029', '30338', '31145', '30101', '30266', '30339', '30054', '30268', '30092', '30269', '30270', '30270', '30092', '31146', '30072', '30014', '30016', '30070', '30127', '30099', '30263', '30272', '30074', '30273', '30274', '30296', '30093', '30170', '30075', '30076', '30077', '30171', '30083', '30086', '30075', '30328', '30342', '30350', '30358', '30275', '30079', '30276', '30277', '30265', '30087', '30080', '30081', '30082', '30339', '30035', '30039', '30078', '30025', '30119', '30098', '30666', '30281', '30083', '30086', '30087', '30088', '30518'];
var heatPumpImgUrl =
    'https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/heatPumpSystem1.png/:/';
var electricUnits = {
    sf800: {
        ton: 1.5,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 5,
        imgUrl: heatPumpImgUrl,
        priceSplit: 3895,
        pricePackage: 3799
    },
    sf1000: {
        ton: 2,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 5,
        imgUrl: heatPumpImgUrl,
        priceSplit: 3985,
        pricePackage: 3799
    },
    sf1200: {
        ton: 2.5,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 5,
        imgUrl: heatPumpImgUrl,
        priceSplit: 4105,
        pricePackage: 4200
    },
    sf1400: {
        ton: 3,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 8,
        imgUrl: heatPumpImgUrl,
        priceSplit: 4299,
        pricePackage: 4399
    },
    sf1700: {
        ton: 3.5,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 10,
        imgUrl: heatPumpImgUrl,
        priceSplit: 4379,
        pricePackage: 4499
    },
    sf2000: {
        ton: 4,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 10,
        imgUrl: heatPumpImgUrl,
        priceSplit: 4799,
        pricePackage: 4850
    },
    sf2500: {
        ton: 5,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 10,
        imgUrl: heatPumpImgUrl,
        priceSplit: 4899,
        pricePackage: 4999
    }
};
var gasImgUrl =
    'https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/gasSplitSystem2.png/:/';
var gasUnits = {
    sf800: {
        name: '1.5 Ton 14 SEER 80% AFUE 60K BTU System',
        ton: 1.5,
        seer: 14,
        btu: 60,
        imgUrl: gasImgUrl,
        priceSplit: 3895,
        pricePackage: 4299
    },
    sf1000: {
        name: '2 Ton 14 SEER 80% AFUE 60K BTU System',
        ton: 2,
        seer: 14,
        btu: 60,
        imgUrl: gasImgUrl,
        priceSplit: 3985,
        pricePackage: 4299
    },
    sf1200: {
        name: '2.5 Ton 14 SEER 80% AFUE 60K BTU System',
        ton: 2.5,
        seer: 14,
        btu: 60,
        imgUrl: gasImgUrl,
        priceSplit: 4105,
        pricePackage: 4375
    },
    sf1400: {
        name: '3 Ton 14 SEER 80% AFUE 60K BTU System',
        ton: 3,
        seer: 14,
        btu: 60,
        imgUrl: gasImgUrl,
        priceSplit: 4299,
        pricePackage: 4479
    },
    sf1700: {
        name: '3.5 Ton 14 SEER 80% AFUE 80K BTU System',
        ton: 3.5,
        seer: 14,
        btu: 80,
        imgUrl: gasImgUrl,
        priceSplit: 4379,
        pricePackage: 4850
    },
    sf2000: {
        name: '4 Ton 14 SEER 80% AFUE 80K BTU System',
        ton: 4,
        seer: 14,
        btu: 80,
        imgUrl: gasImgUrl,
        priceSplit: 4799,
        pricePackage: 4950
    },
    sf2500: {
        name: '5 Ton 14 SEER 80% AFUE 80K BTU System',
        ton: 5,
        seer: 14,
        btu: 80,
        imgUrl: gasImgUrl,
        priceSplit: 4899,
        pricePackage: 4999
    }
};
var imgUrlACondenserEvapCoil =
    'https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/Air%20conditioner%20and%20heat%20pump%20with%20coil.jpg/:/',
    imgUrlFurnaceEvapCoil =
        'https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/furnaceevaporatorcoilreplacement.png/:/',
    imgUrlACCondenserUnitOnly =
        'https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/airConditioner%201%20resized.png/:/',
    imgUrlHeatPumpUnitOnly =
        'https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/heatPump%202%20resized.png/:/',
    imgUrlEvapCoil =
        'https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/uncased%20coil%201%20resized.png/:/',
    imgUrlAirHandler =
        'https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/airHandler%201%20resized.png/:/',
    imgUrlFurnace =
        'https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/gasFurnace%201%20resized%203.png/:/';
var replacementParts = [{
    category: 'A/C Condenser &amp; Evaporator Coil Replacement',
    systemHeatingType: 'pump',
    sf800: {
        name: '1.5 Ton',
        ton: 1.5,
        seer: 14,
        btu: 60,
        imgUrl: imgUrlACondenserEvapCoil,
        price: 2999,
        desc: 'Description.',
        details: {
            model: 'XXXX',
            longDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et' +
                'dolore\n magna aliqua. </p> \n <p>Ut enim ad minim veniam, quis nostrud' +
                'exercitation ullamco laboris nisi ut' +
                'aliquip ex ea\n commodo consequat.</p>'
        }
    },
    sf1000: {
        name: '2.0 Ton',
        ton: 2.0,
        price: 3525,
        imgUrl: imgUrlACondenserEvapCoil,
        desc: 'Description.',
        seer: 14,
        btu: 60,
        details: {}
    },
    sf1200: {
        name: '2.5 Ton',
        ton: 2.5,
        price: 3715,
        imgUrl: imgUrlACondenserEvapCoil,
        desc: 'Description.',
        seer: 14,
        btu: 60,
        details: {}
    },
    sf1400: {
        name: '3.0 Ton',
        ton: 3.0,
        price: 3825,
        imgUrl: imgUrlACondenserEvapCoil,
        desc: 'Description.',
        seer: 14,
        btu: 60,
        details: {}
    },
    sf1700: {
        name: '3.5 Ton',
        ton: 3.5,
        price: 3999,
        imgUrl: imgUrlACondenserEvapCoil,
        desc: 'Description.',
        seer: 14,
        btu: 80,
        details: {}
    },
    sf2000: {
        name: '4.0 Ton',
        ton: 4.0,
        price: 4050,
        imgUrl: imgUrlACondenserEvapCoil,
        desc: 'Description.',
        seer: 14,
        btu: 80,
        details: {}
    },
    sf2500: {
        name: '5.0 Ton',
        ton: 5.0,
        price: 4279,
        imgUrl: imgUrlACondenserEvapCoil,
        desc: 'Description.',
        seer: 14,
        btu: 100,
        details: {}
    }
},
{
    category: 'Furnace &amp; Evaporator Coil Replacement',
    systemHeatingType: 'furnace',
    sf800: {
        name: '1.5 Ton',
        ton: 1.5,
        seer: 14,
        btu: 60,
        imgUrl: imgUrlFurnaceEvapCoil,
        price: 2825,
        desc: 'Description.',
        details: {
            model: 'XXXX',
            longDesc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                'incididunt ut labore et' +
                'dolore\n magna aliqua. </p> \n <p>Ut enim ad minim veniam, quis nostrud' +
                'exercitation ullamco laboris nisi ut' +
                'aliquip ex ea\n commodo consequat.</p>'
        }
    },
    sf1000: {
        name: '2.0 Ton',
        ton: 2.0,
        price: 2900,
        imgUrl: imgUrlFurnaceEvapCoil,
        desc: 'Description.',
        seer: 14,
        btu: 60,
        details: {}
    },
    sf1200: {
        name: '2.5 Ton',
        ton: 2.5,
        price: 2999,
        imgUrl: imgUrlFurnaceEvapCoil,
        desc: 'Description.',
        seer: 14,
        btu: 60,
        details: {}
    },
    sf1400: {
        name: '3.0 Ton',
        ton: 3.0,
        price: 3175,
        imgUrl: imgUrlFurnaceEvapCoil,
        desc: 'Description.',
        seer: 14,
        btu: 60,
        details: {}
    },
    sf1700: {
        name: '3.5 Ton',
        ton: 3.5,
        price: 3299,
        imgUrl: imgUrlFurnaceEvapCoil,
        desc: 'Description.',
        seer: 14,
        btu: 80,
        details: {}
    },
    sf2000: {
        name: '4.0 Ton',
        ton: 4.0,
        price: 3375,
        imgUrl: imgUrlFurnaceEvapCoil,
        desc: 'Description.',
        seer: 14,
        btu: 80,
        details: {}
    },
    sf2500: {
        name: '5.0 Ton',
        ton: 5.0,
        price: 3425,
        imgUrl: imgUrlFurnaceEvapCoil,
        desc: 'Description.',
        seer: 14,
        btu: 100,
        details: {}
    }
},
{
    category: 'A/C Condenser Unit Only Replacement',
    systemHeatingType: 'furnace',
    sf800: {
        name: '1.5 Ton',
        ton: '1.5',
        price: 1999,
        imgUrl: imgUrlACCondenserUnitOnly,
        desc: 'Description.',
        seer: 14,
        // btu: 60,
        details: {}
    },
    sf1000: {
        name: '2.0 Ton',
        ton: '2.0',
        price: 2025,
        imgUrl: imgUrlACCondenserUnitOnly,
        desc: 'Description.',
        seer: 14,
        // btu: 60,
        details: {}
    },
    sf1200: {
        name: '2.5 Ton',
        ton: '2.5',
        price: 2175,
        imgUrl: imgUrlACCondenserUnitOnly,
        desc: 'Description.',
        seer: 14,
        // btu: 60,
        details: {}
    },
    sf1400: {
        name: '3.0 Ton',
        ton: '3.0',
        price: 2299,
        imgUrl: imgUrlACCondenserUnitOnly,
        desc: 'Description.',
        seer: 14,
        // btu: 60,
        details: {}
    },
    sf1700: {
        name: '3.5 Ton',
        ton: '3.5',
        price: 2399,
        imgUrl: imgUrlACCondenserUnitOnly,
        desc: 'Description.',
        seer: 14,
        // btu: 80,
        details: {}
    },
    sf2000: {
        name: '4.0 Ton',
        ton: '4.0',
        price: 2499,
        imgUrl: imgUrlACCondenserUnitOnly,
        desc: 'Description.',
        seer: 14,
        // btu: 80,
        details: {}
    },
    sf2500: {
        name: '5.0 Ton',
        ton: '5.0',
        price: 2699,
        imgUrl: imgUrlACCondenserUnitOnly,
        desc: 'Description.',
        seer: 14,
        // btu: 100,
        details: {}
    }
},
{
    category: 'Heat Pump Unit Only Replacement',
    systemHeatingType: 'pump',
    sf800: {
        name: '1.5 Ton',
        ton: 1.5,
        imgUrl: imgUrlHeatPumpUnitOnly,
        price: 2399
    },
    sf1000: {
        name: '2.0 Ton',
        ton: 2.0,
        imgUrl: imgUrlHeatPumpUnitOnly,
        price: 2499
    },
    sf1200: {
        name: '2.5 Ton',
        ton: 2.5,
        imgUrl: imgUrlHeatPumpUnitOnly,
        price: 2599
    },
    sf1400: {
        name: '3.0 Ton',
        ton: 3.0,
        imgUrl: imgUrlHeatPumpUnitOnly,
        price: 2699
    },
    sf1700: {
        name: '3.5 Ton',
        ton: 3.5,
        imgUrl: imgUrlHeatPumpUnitOnly,
        price: 2725
    },
    sf2000: {
        name: '4.0 Ton',
        ton: 4.0,
        imgUrl: imgUrlHeatPumpUnitOnly,
        price: 2799
    },
    sf2500: {
        name: '5.0 Ton',
        ton: 5.0,
        imgUrl: imgUrlHeatPumpUnitOnly,
        price: 3199
    }
},
{
    category: 'Evaporator Coil Replacement',
    systemHeatingType: 'furnace',
    sf800: {
        name: '1.5 Ton',
        ton: 1.5,
        imgUrl: imgUrlEvapCoil,
        price: 1499
    },
    sf1000: {
        name: '2.0 Ton',
        ton: 2.0,
        imgUrl: imgUrlEvapCoil,
        price: 1599
    },
    sf1200: {
        name: '2.5 Ton',
        ton: 2.5,
        imgUrl: imgUrlEvapCoil,
        price: 1699
    },
    sf1400: {
        name: '3.0 Ton',
        ton: 3.0,
        imgUrl: imgUrlEvapCoil,
        price: 1725
    },
    sf1700: {
        name: '3.5 Ton',
        ton: 3.5,
        imgUrl: imgUrlEvapCoil,
        price: 1825
    },
    sf2000: {
        name: '4.0 Ton',
        ton: 4.0,
        imgUrl: imgUrlEvapCoil,
        price: 1925
    },
    sf2500: {
        name: '5.0 Ton',
        ton: 5.0,
        imgUrl: imgUrlEvapCoil,
        price: 1999
    }
},
{
    category: 'Air Handler Replacement',
    systemHeatingType: 'pump',
    sf800: {
        name: '1.5 Ton',
        ton: 1.5,
        imgUrl: imgUrlAirHandler,
        price: 2100
    },
    sf1000: {
        name: '2.0 Ton',
        ton: 2.0,
        imgUrl: imgUrlAirHandler,
        price: 2199
    },
    sf1200: {
        name: '2.5 Ton',
        ton: 2.5,
        imgUrl: imgUrlAirHandler,
        price: 2325
    },
    sf1400: {
        name: '3.0 Ton',
        ton: 3.0,
        imgUrl: imgUrlAirHandler,
        price: 2550
    },
    sf1700: {
        name: '3.5 Ton',
        ton: 3.5,
        imgUrl: imgUrlAirHandler,
        price: 2625
    },
    sf2000: {
        name: '4.0 Ton',
        ton: 4.0,
        imgUrl: imgUrlAirHandler,
        price: 2799
    },
    sf2500: {
        name: '5.0 Ton',
        ton: 5.0,
        imgUrl: imgUrlAirHandler,
        price: 2999
    }
},
{
    category: 'Furnace Replacement',
    systemHeatingType: 'furnace',
    sf800: {
        name: '1.5 Ton',
        ton: 1.5,
        imgUrl: imgUrlFurnace,
        price: 2125,
        btu: 40
    },
    sf1000: {
        name: '2.0 Ton',
        ton: 2.0,
        imgUrl: imgUrlFurnace,
        price: 2299,
        btu: 40
    },
    sf1200: {
        name: '2.5 Ton',
        ton: 2.5,
        imgUrl: imgUrlFurnace,
        price: 2325,
        btu: 60
    },
    sf1400: {
        name: '3.0 Ton',
        ton: 3.0,
        imgUrl: imgUrlFurnace,
        price: 2399,
        btu: 60
    },
    sf1700: {
        name: '3.5 Ton',
        ton: 3.5,
        imgUrl: imgUrlFurnace,
        price: 2499,
        btu: 80
    },
    sf2000: {
        name: '4.0 Ton',
        ton: 4.0,
        imgUrl: imgUrlFurnace,
        price: 2599,
        btu: 80
    },
    sf2500: {
        name: '5.0 Ton',
        ton: 5.0,
        imgUrl: imgUrlFurnace,
        price: 2625,
        btu: 100
    }
}
];
var asides = document.querySelectorAll('aside');
var recommendedUnit = null;
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