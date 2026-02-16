import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import MyList from './MyList'
import MyMealsAndIngredients from './MyMealsAndIngredients'

function App() {

  const [mealPlans, setMealPlans] = useState([]);
  const [selectedDay, setSelectedDay] = useState(false);
  
  const addMeal = () => {
    const newMeal = {
      id: uuid(),
      title: "Today is ...",
      mealForADay: "MealForADay",      
    }
    setMealPlans([newMeal, ...mealPlans])    
  }

  const deleteDay = (id) => {
        let filtering = mealPlans.filter(meal => meal.id !== id);
        setMealPlans(filtering)        
    }

  return (
    <div className='App'>
      <MyList addMeal={addMeal} mealPlans={mealPlans} deleteDay={deleteDay} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <MyMealsAndIngredients />
    </div>
  )
}

export default App
