/* Strategy Exercises
 * 6. Tax Calculator
 *
 * Task: Create multiple tax strategies:
 * - NoTax
 * - FlatTax
 * - ProgressiveTax
 * 
 * Pass different strategies to a TaxCalculator class and calculate total tax for a given income.
 */

interface TaxStrategy {
    calculate(price: number): number;
}

class NoTax implements TaxStrategy {
    calculate(price: number): number {
        return 0;
    }
}

class FlatTax implements TaxStrategy {
    calculate(price: number): number {
        return price/10;
    }
}

class ProgressiveTax implements TaxStrategy {
    calculate(price: number): number {
        return price/100 * price/100;
    }
}

class TaxCalculator {
    constructor (private tax: TaxStrategy) {}

    calculate(price: number) {
        return this.tax.calculate(price);
    }
}

//
const calculator1 = new TaxCalculator(new NoTax());
console.log(calculator1.calculate(1000)); // $0 no tax

const calculator2 = new TaxCalculator(new FlatTax());
console.log(calculator2.calculate(1000)); // $100 flat tax

const calculator3 = new TaxCalculator(new ProgressiveTax());
console.log(calculator3.calculate(1000)); // $100 progressive tax

const calculator4 = new TaxCalculator(new ProgressiveTax());
console.log(calculator4.calculate(10000)); // $100 progressive tax