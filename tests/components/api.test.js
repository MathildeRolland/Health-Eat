import mockAxios from '../../__mocks__/mockAxios.js';
import { fetchMeals } from '../../src/functions/api';

describe('API', () => {
    describe('Execution', () => {
        it('should return the meals', () => {
            // creates fake store
            const store = jest.fn();
            store.dispatch = jest.fn();

            const meals = [
                {
                    id: 1,
                    title: "A title",
                    summary: "A short summary"
                },
                {
                    id: 2,
                    title: "A title",
                    summary: "A short summary"
                },
            ];

            const config = {url: '/recipes'};

            const axiosInstance = mockAxios.create({
                baseUrl: 'https://api.spoonacular.com',
            });

            axiosInstance.interceptors.request.use(config => {
                return config;
            });

            mockAxios
                .get
                .mockImplementationOnce({data: {results: meals}});

            fetchMeals(config, store, {type: 'STORE_LOW_CAL_MEALS', payload: {}})
                .then((res) => {
                    expect(res).toBeDefined();
                    expect(res).toEqual(meals)
                })
                .catch((err) => console.log("erreur depuis le test"));
            

        })
    })
})