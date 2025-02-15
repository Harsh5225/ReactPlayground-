import React, { useEffect, useState } from "react";


const Main = () => {
  const [mealsitem, setMealsitem] = useState([]);

  async function handleApi() {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      const resdata = await response.json();
      setMealsitem(resdata.meals);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleApi();
  }, []);

  return (
    <div className="card-container">
      {mealsitem.map(({ strMeal, strMealThumb, idMeal }) => (
        <div className="card" key={idMeal}>
          <img src={strMealThumb} alt={strMeal} />
          <div className="content">
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
