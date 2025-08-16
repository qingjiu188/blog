class Package {
    weight;
    //构造方法
    constructor(weight) {
        this.weight = weight;
    }
    //具体方法
    printPackage() {
        console.log(`包裹重量: ${this.weight}kg, 运费: $${this.calculate()}`);
    }
}
class StandardPackage extends Package {
    unitPrice;
    //实现抽象方法
    constructor(weight, unitPrice) {
        super(weight);
        this.unitPrice = unitPrice;
    }
    calculate() {
        return this.weight * this.unitPrice; // 假设每公斤5元
    }
}
// const s1 = new StandardPackage(10, 5);
// console.log(s1.printPackage()); // 输出: 包裹重量: 10kg, 运费: $50
class ExpressPackage extends Package {
    unitPrice;
    additional;
    //实现抽象方法
    constructor(weight, unitPrice, additional) {
        super(weight);
        this.unitPrice = unitPrice;
        this.additional = additional;
    }
    calculate() {
        if (this.weight > 10) {
            return 10 * this.unitPrice + (this.weight - 10) * this.additional; // 超过10kg的部分按额外费用计算
        }
        else {
            return this.weight * this.unitPrice; // 假设每公斤10元
        }
    }
}
const e1 = new ExpressPackage(15, 10, 5);
console.log(e1.printPackage()); // 输出: 包裹重量: 15kg,
export {};
//# sourceMappingURL=index.js.map