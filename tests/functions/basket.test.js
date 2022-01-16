import { getRandomPrice, calcTotalPriceHT } from '../../src/functions/index';

describe('Basket - Functions', () => {
    describe('getRandomPrice', () => {
        describe('Structure', () => {
            it("should be a function", () => {
                expect(typeof getRandomPrice).toBe('function');
            });
    
            it("should return a number", () => {
                const min = 1;
                const max = 30;
                expect (typeof getRandomPrice(min, max)).toBe('number');
            });
        });

    })

    describe('calcTotalPriceHT', () => {
        describe('Structure', () => {
            it("should be a function", () => {
                expect(typeof calcTotalPriceHT).toBe('function');
            });

            it('should return a number', () => {
                const basket = [{totalPrice: 2}, {totalPrice: 3}, {totalPrice: 10}];
                expect(typeof calcTotalPriceHT(basket)).toBe('number');
            })
        })

        describe('Execution', () => {
            it('should return total of every prices', () => {
                const basket = [{totalPrice: 2}, {totalPrice: 3}, {totalPrice: 10}];
                expect(calcTotalPriceHT(basket)).toEqual(15);
            })
        })
    })  
})