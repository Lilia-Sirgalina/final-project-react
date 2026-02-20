import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import MyList from './MyList'
import MyMealsAndIngredients from './MyMealsAndIngredients'

function App() {

  const [mealPlans, setMealPlans] = useState(localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [selectedDay, setSelectedDay] = useState(false);

  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])
  
  const addMeal = () => {
    const newMeal = {
      id: uuid(),
      title: "Today is ...",
      mealForADay: "", 
      ingredients: "",     
    }
    setMealPlans([newMeal, ...mealPlans])    
  }

  const deleteDay = (id) => {
        let filtering = mealPlans.filter(meal => meal.id !== id);
        setMealPlans(filtering)        
    }

  const updateDay = (myUpdatedMeal) => {
    const updatedMeals = mealPlans.map(mealPlan => {
      if (mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return mealPlan;
    })
    setMealPlans(updatedMeals)
  }

  const getActiveMeal = () => {
    return mealPlans.find(({id}) => id === selectedDay)
  }

  return (
    <div className='App'>
      <MyList addMeal={addMeal} mealPlans={mealPlans} deleteDay={deleteDay} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <MyMealsAndIngredients selectedDay={getActiveMeal()} updateDay={updateDay} />
    </div>
  )
}

export default App
