"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var Close_1 = require("@mui/icons-material/Close");
var image_1 = require("next/image");
var page_module_css_1 = require("../page.module.css");
var utils_1 = require("../utils");
var CardDetails = function (_a) {
    var isOpen = _a.isOpen, setIsOpen = _a.setIsOpen, car = _a.car;
    var handleCloseDialog = function () {
        setIsOpen(false);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(material_1.Dialog, { open: isOpen, onClose: handleCloseDialog, "aria-labelledby": 'responsive-dialog-title' },
            react_1["default"].createElement(material_1.DialogTitle, { id: 'customized-dialog-title' },
                react_1["default"].createElement(material_1.Grid, { container: true, spacing: 3, justifyContent: 'center', alignItems: 'center' },
                    react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 3 },
                        react_1["default"].createElement(image_1["default"], { height: '90', width: '140', src: utils_1.generateImageUrl(car), alt: 'car model', style: { objectFit: 'contain' } })),
                    react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 9 },
                        react_1["default"].createElement(material_1.Typography, { mt: 1, variant: 'body2' },
                            car.make.toUpperCase(),
                            " ",
                            car.model)))),
            react_1["default"].createElement(material_1.IconButton, { "aria-label": 'close', onClick: handleCloseDialog, sx: {
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: function (theme) { return theme.palette.grey[500]; }
                } },
                react_1["default"].createElement(Close_1["default"], null)),
            react_1["default"].createElement(material_1.DialogContent, { dividers: true },
                react_1["default"].createElement("div", { className: page_module_css_1["default"].image__container },
                    react_1["default"].createElement("div", { className: page_module_css_1["default"].image__container__item },
                        react_1["default"].createElement(image_1["default"], { src: utils_1.generateImageUrl(car, '29'), alt: 'car model', width: '140', height: '100', priority: true, className: page_module_css_1["default"].image })),
                    react_1["default"].createElement(material_1.Divider, { orientation: 'vertical', flexItem: true }),
                    react_1["default"].createElement("div", { className: page_module_css_1["default"].image__container__item },
                        react_1["default"].createElement(image_1["default"], { src: utils_1.generateImageUrl(car, '23'), alt: 'car model', width: '140', height: '100', priority: true, className: page_module_css_1["default"].image })),
                    react_1["default"].createElement(material_1.Divider, { orientation: 'vertical', flexItem: true }),
                    react_1["default"].createElement("div", { className: page_module_css_1["default"].image__container__item },
                        react_1["default"].createElement(image_1["default"], { src: utils_1.generateImageUrl(car, '13'), alt: 'car model', width: '140', height: '100', priority: true, className: page_module_css_1["default"].image })))),
            react_1["default"].createElement(material_1.DialogContent, { dividers: true }, Object.entries(car).map(function (_a) {
                var key = _a[0], value = _a[1];
                return (react_1["default"].createElement("div", { className: page_module_css_1["default"].card__entries, key: key },
                    react_1["default"].createElement(material_1.Typography, { gutterBottom: true }, key.split('_').join(' ')),
                    react_1["default"].createElement(material_1.Typography, { gutterBottom: true }, value)));
            })))));
};
exports["default"] = CardDetails;
