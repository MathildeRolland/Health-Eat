import { reducer } from '../../src/reducers/user';
import { addToMealQuantity, RetrieveToMealQuantity } from '../../src/actions/user';

describe('User Reducer', () => {
    describe('Structure', () => {
        it('should be a function', () => {
            expect(typeof reducer).toBe('function');
        });

        it('should return an object', () => {
            expect(typeof reducer()).toBe('object');
        });
    });

    describe('Execution', () => {
        it('should return the initial State when it doesn\'t have any parameter passed', () => {
            const initialState = {
                currentUser: {
                    email: "",
                    password: "",
                },
                contact: {
                    name: "",
                    email: "",
                    message: "",
                },
                newUser: {
                    name: "",
                    firstname: "",
                    email: "",
                    password: "",
                    passwordVerif: "",
                },
                basket: [],
            }
            expect(reducer()).toEqual(initialState);
        });

        it('should return new state if parameters are passed', () => {
            const stateBefore = {
                currentUser: {
                    email: "",
                    password: "",
                },
            };

            const stateAfter = reducer(stateBefore, {type: 'SAVE_INPUT', value:"passpass", name: "password", storageObjectName: "currentUser"});

            const stateExpected = {
                currentUser: {
                    email: "",
                    password: "passpass"
                }
            }

            expect(stateAfter).toEqual(stateExpected);
        });
    });

    describe('Actions', () => {
        let stateBefore = {};
        beforeEach(() => {
            stateBefore = {
                basket: [
                    {
                        id: 1,
                        name: 'Plat',
                        price: 3.50,
                        quantity: 1,
                        totalPrice: 3.50
                    }
                ]
            };
        })

        describe('addToMealQuantity', () => {
            it('should add 1 to selected meal quantity', () => {
                const stateAfter = reducer(stateBefore, addToMealQuantity({mealId: 1, mealTitle: "Plat", mealPrice: 3.50}));
        
                const stateExpected = {
                    basket: [
                        {
                            id: 1,
                            name: 'Plat',
                            price: 3.50,
                            quantity: 2,
                            totalPrice: 7
                        }
                    ]
                }
        
                expect(stateAfter).toEqual(stateExpected);
            });
        });

        describe('RetrieveToMealQuantity', () => {
            it('should retrieve 1 to selected meal quantity', () => {
                const stateAfter = reducer(stateBefore, RetrieveToMealQuantity({mealId: 1, mealTitle: "Plat", mealPrice: 3.50}));

                const stateExpected = {
                    basket: [
                        {
                            id: 1,
                            name: 'Plat',
                            price: 3.50,
                            quantity: 0,
                            totalPrice: 0
                        }
                    ]
                }
        
                expect(stateAfter).toEqual(stateExpected);
            })
        })
    });
});