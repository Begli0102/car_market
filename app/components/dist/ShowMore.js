'use client';
"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var utils_1 = require("../utils");
var page_module_css_1 = require("../page.module.css");
var ShowMore = function (_a) {
    var pageNumber = _a.pageNumber, isNext = _a.isNext;
    var router = navigation_1.useRouter();
    var handleShowMore = function () {
        var newLimit = (pageNumber + 1) * 10;
        var newPathName = utils_1.updateSearchParams('limit', "" + newLimit);
        router.push(newPathName);
    };
    return (react_1["default"].createElement("div", { className: page_module_css_1["default"].show__more__container },
        react_1["default"].createElement(material_1.Box, { textAlign: 'center' },
            react_1["default"].createElement(material_1.Chip, { sx: { minWidth: '280px' }, label: 'Show More', color: 'primary', onClick: handleShowMore, disabled: isNext }))));
};
exports["default"] = ShowMore;
