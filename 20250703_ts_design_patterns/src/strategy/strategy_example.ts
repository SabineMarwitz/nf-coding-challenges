/* Strategy 
 * Enables selecting an algorithm at runtime.
 * Use Case:
 *   - Sorting/searching using different strategies
 *   - Pricing rules (e.g., promotions, discounts)
 *   - Input validation strategies for forms
 */
interface DiscountStrategy {
  getDiscount(price: number): number;
}

class NoDiscount implements DiscountStrategy {
  getDiscount(price: number): number {
    return price;
  }
}

class TenPercentDiscount implements DiscountStrategy {
  getDiscount(price: number): number {
    return price * 0.9;
  }
}

class Cart {
  constructor(private strategy: DiscountStrategy) {}

  checkout(price: number) {
    return this.strategy.getDiscount(price);
  }
}

