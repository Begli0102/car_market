'use client';
"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
var utils_1 = require("../utils");
var page_module_css_1 = require("../page.module.css");
var image_1 = require("next/image");
var CardDetails_1 = require("./CardDetails");
var CarCard = function (_a) {
    var car = _a.car;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var handleOpenDialog = function () {
        setIsOpen(true);
    };
    var city_mpg = car.city_mpg, drive = car.drive, make = car.make, model = car.model, transmission = car.transmission, year = car.year;
    var totalCost = utils_1.calculateCarRentalCost(city_mpg, year);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(material_1.Card, { sx: { minWidth: 305 } },
            react_1["default"].createElement("div", { className: page_module_css_1["default"].details__title },
                react_1["default"].createElement(material_1.Typography, { variant: 'body1', color: 'text.primary' },
                    make.toUpperCase(),
                    " ",
                    model),
                react_1["default"].createElement(material_1.Typography, { variant: 'body2', color: 'text.secondary' },
                    "$ ",
                    totalCost,
                    "/day")),
            react_1["default"].createElement(image_1["default"], { height: '150', width: '250', src: utils_1.generateImageUrl(car), alt: 'car model', style: { objectFit: 'contain' } }),
            react_1["default"].createElement(material_1.CardContent, { sx: { backgroundColor: '#eaeaea' } },
                react_1["default"].createElement("div", { className: page_module_css_1["default"].details__container },
                    react_1["default"].createElement("div", { className: page_module_css_1["default"].card__details },
                        react_1["default"].createElement(image_1["default"], { src: '/steering-wheel.svg', width: 15, height: 15, alt: 'steering wheel', style: { objectFit: 'contain' } }),
                        react_1["default"].createElement(material_1.Typography, { variant: 'body2' }, transmission === 'a' ? 'Automatic' : 'Manual')),
                    react_1["default"].createElement("div", { className: page_module_css_1["default"].card__details },
                        react_1["default"].createElement(image_1["default"], { src: '/tire.svg', width: 15, height: 15, alt: 'seat', style: { objectFit: 'contain' } }),
                        react_1["default"].createElement(material_1.Typography, { variant: 'body2' }, drive.toUpperCase())),
                    react_1["default"].createElement("div", { className: page_module_css_1["default"].card__details },
                        react_1["default"].createElement(image_1["default"], { src: '/gas.svg', width: 15, height: 15, alt: 'seat', style: { objectFit: 'contain' } }),
                        react_1["default"].createElement(material_1.Typography, { variant: 'body2', gutterBottom: true },
                            city_mpg,
                            "MPG")))),
            react_1["default"].createElement(material_1.CardActions, { sx: { backgroundColor: '#eaeaea' } },
                react_1["default"].createElement(material_1.Button, { variant: 'contained', size: 'medium', onClick: handleOpenDialog }, "View More"))),
        react_1["default"].createElement(CardDetails_1["default"], { isOpen: isOpen, setIsOpen: setIsOpen, car: car })));
};
exports["default"] = CarCard;
