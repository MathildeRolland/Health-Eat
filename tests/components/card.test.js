import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Card from 'src/components/Cards/Card';
import { retrieveFirstSentence } from 'src/functions';

describe("Card - Functions", () => {
    describe("retrieveFirstSentence", () => {
        describe('Structure', () => {
            const string = "Un premier coucou. Un deuxième coucou. Un troisième coucou. Et puis un quatrième.";

            it("should be a function", () => {
                expect(typeof retrieveFirstSentence).toBe("function");
            });

            it("should return a string", () => {
                expect(typeof retrieveFirstSentence(string)).toBe('string');
            });

            it("should return a string with the 2 first sentences of the initial given paragraph", () => {
                expect(retrieveFirstSentence(string)).toEqual("Un premier coucou. Un deuxième coucou.");
            })
        })
    })
})

describe("Card - Component", () => {
    it("should render a card", () => {
        const { container } = render(
            <Card
                meal={{id: 1, title:"blabla", summary: "blablabla", diets: ["gluten free", "vegan"]}} 
            />
        );
        expect(container).toBeInTheDocument();
    });

    it('should render a "-" buttons to add a meal', () => {
        render(
            <Card
                meal={{id: 1, title:"blabla", summary: "blablabla", diets: ["gluten free", "vegan"]}} 
            />
        )    
        expect(screen.findByText("-")).toBeDefined();
    })

    it('should render a "+" buttons to add a meal', () => {
        render(
            <Card
                meal={{id: 1, title:"blabla", summary: "blablabla", diets: ["gluten free", "vegan"]}} 
            />
        )    
        expect(screen.findByText("+")).toBeDefined();
    })

    it('should disable "-" button when quantity is less or equal to 0', () => {
        render(
            <Card
                meal={{id: 1, title:"blabla", summary: "blablabla", diets: ["gluten free", "vegan"]}}
                quantity={0}
            />
        );

        expect(screen.getByText("-")).toBeDisabled();
    })
})