import React from 'react';
import HomeTitle from 'src/components/HomeTitle';
import Category from 'src/components/Category';

const Homepage = ({ lowCaloriesMeals, mediumCaloriesMeals, highCaloriesMeals }) => {
    return (
        <>
            <HomeTitle />
            <Category categoryTitle="Manger léger" meals={lowCaloriesMeals} />
            {/* <Category categoryTitle="Garder l'équilibre" meals={mediumCaloriesMeals} />
            <Category categoryTitle="Se faire plaisir" meals={highCaloriesMeals} /> */}
        </>
    )
}

export default Homepage;