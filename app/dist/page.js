"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
var CarCard_1 = require("./components/CarCard");
var ShowMore_1 = require("./components/ShowMore");
var loading_1 = require("./loading");
var page_module_css_1 = require("./page.module.css");
var utils_1 = require("./utils");
function Home(_a) {
    var searchParams = _a.searchParams;
    return __awaiter(this, void 0, void 0, function () {
        var allCars, isDataEmpty;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, utils_1.fetchCars({
                        manufacturer: searchParams.manufacturer || '',
                        model: searchParams.model || '',
                        year: searchParams.year || 2022,
                        fuel: searchParams.fuel || '',
                        limit: searchParams.limit || 10
                    })];
                case 1:
                    allCars = _b.sent();
                    isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
                    return [2 /*return*/, (React.createElement("main", { className: page_module_css_1["default"].main },
                            !isDataEmpty ? (React.createElement("div", { className: page_module_css_1["default"].result__container }, allCars.map(function (car, index) { return (React.createElement(react_1.Suspense, { fallback: React.createElement(loading_1["default"], null) },
                                React.createElement(CarCard_1["default"], { key: index, car: car }))); }))) : (React.createElement("div", { className: page_module_css_1["default"].error__container },
                                React.createElement(material_1.Stack, { sx: { minWidth: '300px' } },
                                    React.createElement(material_1.Alert, { variant: 'filled', severity: 'warning', sx: { alignItems: 'center' } },
                                        React.createElement(material_1.Typography, { variant: 'body2', gutterBottom: true }, "Oops, no results"))))),
                            React.createElement(ShowMore_1["default"], { pageNumber: (searchParams.limit || 10) / 10, isNext: (searchParams.limit || 10) > allCars.length })))];
            }
        });
    });
}
exports["default"] = Home;
