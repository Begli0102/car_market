'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var page_module_css_1 = require("../page.module.css");
var material_1 = require("@mui/material");
var hero_png_1 = require("../../public/hero.png");
var Header = function () {
    var handleScroll = function () { };
    return (React.createElement("div", { className: page_module_css_1["default"].header },
        React.createElement(material_1.Grid, { className: page_module_css_1["default"].header__item, container: true, spacing: 2 },
            React.createElement(material_1.Grid, { item: true, xs: 12, md: 6 },
                React.createElement("div", { className: page_module_css_1["default"].header__left },
                    React.createElement(material_1.Typography, { variant: 'h4', gutterBottom: true, className: page_module_css_1["default"].header__title }, "Find, book, rent a car\u2014quick and super easy!"),
                    React.createElement(material_1.Typography, { variant: 'h5', gutterBottom: true, className: page_module_css_1["default"].header__subtitle }, "Streamline your car rental experience with our effortless booking process."),
                    React.createElement(material_1.Chip, { label: 'Explore Cars', variant: 'filled', color: 'primary', onClick: handleScroll }))),
            React.createElement(material_1.Grid, { item: true, xs: 10, md: 4 },
                React.createElement("div", { className: page_module_css_1["default"].image__container },
                    React.createElement(image_1["default"], { src: hero_png_1["default"], alt: 'image', className: page_module_css_1["default"].image, style: { objectFit: 'contain' }, priority: true }))))));
};
exports["default"] = Header;
