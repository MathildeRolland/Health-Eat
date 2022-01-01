import { getRandomPrice } from '../../src/functions/index';

describe('Functions - basket', () => {
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