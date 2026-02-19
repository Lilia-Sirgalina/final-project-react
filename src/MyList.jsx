const MyList = ({addMeal, mealPlans, deleteDay, selectedDay, setSelectedDay}) => {    

    return (
        <div>
            <div>
                <h1>Weekly Meal Plan Ideas</h1>                
                <button className="button-add" onClick={addMeal}>Add</button>                
            </div>

            <div>
                {mealPlans.map(({id, title, mealForADay, ingredients}) => (
                    <div key={id} 
                        onClick={() => setSelectedDay(id)} 
                        className={`${selectedDay === id ? "selected" : "default"}`}
                        >
                            
                        <p className="title">{title}</p>
                        <p className="field">{mealForADay.substring(0, 60)}</p>
                        <p className="field">{ingredients}</p>
                        <button className="button-delete" onClick={() => deleteDay(id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyList