import React from "react";

// COMPONENTS
import HomeTitle from "src/components/HomeTitle";
import Category from "src/components/Category";
import Loader from "src/components/Loader";

const Homepage = ({
  lowCaloriesMeals,
  mediumCaloriesMeals,
  highCaloriesMeals,
}) => {
  return (
    <>
      <HomeTitle />
      {(!lowCaloriesMeals || !mediumCaloriesMeals || !highCaloriesMeals) && (
        <Loader />
      )}
      <Category categoryTitle="Manger léger" meals={lowCaloriesMeals} />
      <Category
        categoryTitle="Garder l'équilibre"
        meals={mediumCaloriesMeals}
      />
      <Category categoryTitle="Se faire plaisir" meals={highCaloriesMeals} />
    </>
  );
};

export default Homepage;
