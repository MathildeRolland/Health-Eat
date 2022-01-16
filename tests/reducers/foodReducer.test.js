import { reducer, initialState } from '../../src/reducers/food';
import { storeLowCalMeals, storeMediumCalMeals, storeHighCalMeals } from '../../src/actions/meals';
import mealsDatas from '../../src/datas';

describe('Food Reducer', () => {
    describe('Structure', () => {
        it('should be a function', () => {
            expect(typeof reducer).toBe('function');
        });

        it('should return an object', () => {
            expect(typeof reducer()).toBe('object');
        });
    });

    describe('Execution', () => {
        it('should return the initial state when called without any parameters', () => {
            expect(reducer()).toEqual(initialState);
        });

        // Test of the expected structure
        it('should return the right initialState when calling without any parameters', () => {
            const expectedInitialState = {
                lowCaloriesMeals: [],
                mediumCaloriesMeals: [],
                highCaloriesMeals: []
            };

            expect(reducer()).toEqual(expectedInitialState);
        });
    });

    describe('Actions', () => {
        describe('storeLowCalMeals', () => {
            const stateBefore = {
                lowCaloriesMeals: [],
            };

            const stateAfter = reducer(stateBefore, storeLowCalMeals(mealsDatas));

            const expectedState = {
                lowCaloriesMeals: mealsDatas
            };

            expect(stateAfter).toEqual(expectedState);
        });

        describe('storeMediumCalMeals', () => {
            const stateBefore = {
                mediumCaloriesMeals: [],
            };

            const stateAfter = reducer(stateBefore, storeMediumCalMeals(mealsDatas));

            const expectedState = {
                mediumCaloriesMeals: mealsDatas
            };

            expect(stateAfter).toEqual(expectedState);
        });

        describe('storeHighCalMeals', () => {
            const stateBefore = {
                highCaloriesMeals: [],
            };

            const stateAfter = reducer(stateBefore, storeHighCalMeals(mealsDatas));

            const expectedState = {
                highCaloriesMeals: mealsDatas
            };

            expect(stateAfter).toEqual(expectedState);
        });
    });
});