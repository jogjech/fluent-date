"use strict";
exports.__esModule = true;
exports.Language = exports.FluentDate = void 0;
var Language;
(function (Language) {
    Language[Language["ZH"] = 0] = "ZH";
    Language[Language["EN"] = 1] = "EN";
    Language[Language["JP"] = 2] = "JP";
})(Language || (Language = {}));
exports.Language = Language;
var FluentDate = /** @class */ (function () {
    function FluentDate(language) {
        this.language = language;
    }
    FluentDate.prototype.relative = function (dateString) {
        var date = new Date(dateString);
        var now = new Date();
        return "3 days ago";
    };
    return FluentDate;
}());
exports.FluentDate = FluentDate;
