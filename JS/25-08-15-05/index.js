var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Package = /** @class */ (function () {
    //构造方法
    function Package(weight) {
        this.weight = weight;
    }
    //具体方法
    Package.prototype.printPackage = function () {
        console.log("\u5305\u88F9\u91CD\u91CF: ".concat(this.weight, "kg, \u8FD0\u8D39: $").concat(this.calculate()));
    };
    return Package;
}());
var StandardPackage = /** @class */ (function (_super) {
    __extends(StandardPackage, _super);
    //实现抽象方法
    function StandardPackage(weight, unitPrice) {
        var _this = _super.call(this, weight) || this;
        _this.unitPrice = unitPrice;
        return _this;
    }
    StandardPackage.prototype.calculate = function () {
        return this.weight * this.unitPrice; // 假设每公斤5元
    };
    return StandardPackage;
}(Package));
// const s1 = new StandardPackage(10, 5);
// console.log(s1.printPackage()); // 输出: 包裹重量: 10kg, 运费: $50
var ExpressPackage = /** @class */ (function (_super) {
    __extends(ExpressPackage, _super);
    //实现抽象方法
    function ExpressPackage(weight, unitPrice, additional) {
        var _this = _super.call(this, weight) || this;
        _this.unitPrice = unitPrice;
        _this.additional = additional;
        return _this;
    }
    ExpressPackage.prototype.calculate = function () {
        if (this.weight > 10) {
            return 10 * this.unitPrice + (this.weight - 10) * this.additional; // 超过10kg的部分按额外费用计算
        }
        else {
            return this.weight * this.unitPrice; // 假设每公斤10元
        }
    };
    return ExpressPackage;
}(Package));
var e1 = new ExpressPackage(15, 10, 5);
console.log(e1.printPackage()); // 输出: 包裹重量: 15kg,
