const MyList = ({addMeal, mealPlans, deleteDay, selectedDay, setSelectedDay}) => {

    

    return (
        <div>
            <div>
                <h1>Weekly Meal Plan Ideas</h1>                
                <button className="button-add" onClick={addMeal}>Add</button>
                
            </div>

            <div>
                {mealPlans.map(({id, title, mealForADay}) => (
                    <div key={id} className={selectedDay ? {backgroundColor: "white"} : {backgroundColor: "yellow"}}>
                        <p>{title}</p>
                        <p>{mealForADay}</p>
                        <button className="button-delete" onClick={() => deleteDay(id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyList