'use client';
"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var index_1 = require("../consonants/index");
var page_module_css_1 = require("../page.module.css");
var SearchBar = function () {
    var _a = react_1.useState(''), manufacturer = _a[0], setManufacturer = _a[1];
    var _b = react_1.useState(''), model = _b[0], setModel = _b[1];
    var router = navigation_1.useRouter();
    var handleSearch = function (e) {
        e.preventDefault();
        if (manufacturer === '' || model === '') {
            return alert('Please fill the blank');
        }
        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
        setManufacturer('');
        setModel('');
    };
    var updateSearchParams = function (model, manufacturer) {
        // Create a new URLSearchParams object using the current URL search parameters
        var searchParams = new URLSearchParams(window.location.search);
        if (model) {
            searchParams.set('model', model);
        }
        else {
            searchParams["delete"]('model');
        }
        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer);
        }
        else {
            searchParams["delete"]('manufacturer');
        }
        // Generate the new pathname with the updated search parameters
        var newPathname = window.location.pathname + "?" + searchParams.toString();
        router.push(newPathname);
    };
    var handleChangeManufacturer = function (event) {
        setManufacturer(event.target.value);
    };
    var handleChangeModel = function (event) {
        setModel(event.target.value);
    };
    return (react_1["default"].createElement("div", { className: page_module_css_1["default"].search__container },
        react_1["default"].createElement(material_1.Grid, { justifyContent: 'center', container: true, spacing: 1 },
            react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 3 },
                react_1["default"].createElement(material_1.FormControl, { fullWidth: true, required: true },
                    react_1["default"].createElement(material_1.InputLabel, { id: 'demo-controlled-open-select-label' }, "Select a car"),
                    react_1["default"].createElement(material_1.Select, { labelId: 'demo-simple-select-label', id: 'demo-simple-select', value: manufacturer, label: 'Select a car', onChange: handleChangeManufacturer, size: 'small' }, index_1.manufacturers.map(function (manufacurer, index) { return (react_1["default"].createElement(material_1.MenuItem, { key: index, value: manufacurer }, manufacurer)); })))),
            react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 2 },
                react_1["default"].createElement(material_1.FormControl, { fullWidth: true, required: true },
                    react_1["default"].createElement(material_1.TextField, { label: 'Model', value: model, onChange: handleChangeModel, size: 'small' }))),
            react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 1 },
                react_1["default"].createElement(material_1.FormControl, { fullWidth: true, required: true },
                    react_1["default"].createElement(material_1.Button, { variant: 'contained', onClick: handleSearch }, "Search"))))));
};
exports["default"] = SearchBar;
