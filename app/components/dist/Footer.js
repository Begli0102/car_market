"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var page_module_css_1 = require("../page.module.css");
var consonants_1 = require("../consonants");
var link_1 = require("next/link");
var material_1 = require("@mui/material");
var Footer = function () {
    return (react_1["default"].createElement("footer", { className: page_module_css_1["default"].footer__container },
        react_1["default"].createElement(material_1.Grid, { container: true, spacing: 2, className: page_module_css_1["default"].footer__logo__links },
            react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 4, className: page_module_css_1["default"].footer__logo },
                react_1["default"].createElement(image_1["default"], { src: '/4ydEzuq5aFVUjXdvHLripG-7eb7ed609239464291ac4b2f1dac2927-autoscout24redesign23-1100.png', alt: 'logo', width: 118, height: 38, style: { objectFit: 'contain' } }),
                react_1["default"].createElement(material_1.Typography, { gutterBottom: true, variant: 'body2' }, "@2023 CarHub. All rights reserved")),
            react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 8, className: page_module_css_1["default"].footer__links }, consonants_1.footerLinks.map(function (item) { return (react_1["default"].createElement("div", { key: item.title, className: page_module_css_1["default"].footer__link },
                react_1["default"].createElement(material_1.Typography, { gutterBottom: true, variant: 'body1' }, item.title),
                react_1["default"].createElement("div", { className: page_module_css_1["default"].footer__link__items }, item.links.map(function (link) { return (react_1["default"].createElement(link_1["default"], { key: link.title, href: link.url }, link.title)); })))); })))));
};
exports["default"] = Footer;
