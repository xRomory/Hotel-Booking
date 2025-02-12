import React from 'react';
import '../../App.css';
import FoodHeader from '../../components/foodHeader/foodHeader';
import FoodContent from '../../components/FoodContent/FoodContent';
// import FoodItems from '../../components/FoodItems/FoodItems';

const Foods = () => {
  return (
    <>
      <FoodHeader/>
      <FoodContent/>
      {/* <FoodItems/> */}
    </>
  )
}

export default Foods