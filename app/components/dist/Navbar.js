'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
var page_module_css_1 = require("../page.module.css");
var material_1 = require("@mui/material");
var Navbar = function () { return (React.createElement("header", { className: page_module_css_1["default"].navbar__container },
    React.createElement("nav", { className: page_module_css_1["default"].navbar },
        React.createElement(link_1["default"], { href: '/', className: page_module_css_1["default"].navbar_link },
            React.createElement(image_1["default"], { src: '/4ydEzuq5aFVUjXdvHLripG-7eb7ed609239464291ac4b2f1dac2927-autoscout24redesign23-1100.png', alt: 'logo', width: 118, height: 40, className: page_module_css_1["default"].logo_for_navbar, style: { objectFit: 'contain' }, priority: true })),
        React.createElement("div", { className: page_module_css_1["default"].navbar__chip },
            React.createElement(material_1.Chip, { label: 'Sign up', variant: 'outlined', sx: { color: '#ffff' } }))))); };
exports["default"] = Navbar;
