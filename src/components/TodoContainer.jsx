import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react"

const TodoContainer = () => 
{
   const [activityArr, setactivityArr] = useState([
      { id: 1, activity: "go for activity" },
      { id: 2, activity: "go for breakfast" }
  ])

   return (
      <div className="flex justify-between gap-3 flex-wrap">
          <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}/>              
          <TodoList activityArr={activityArr} setactivityArr={setactivityArr}/>
      </div>
   )
}

export default TodoContainer