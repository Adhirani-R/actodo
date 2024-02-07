import { useState } from "react";

const AddTodoForm=(props)=>
{
    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr

    const [newactivity,setnewactivity]=useState("")
        
    const handleadd=(e)=>
    {
        setnewactivity(e.target.value)
    }

    const addact=()=>
    {
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setnewactivity("")
    }
    return(
        <div >
            <h1 className="font-medium text-2xl">Manage Activities</h1>
            <input onChange={handleadd} value={newactivity} type="text" maxLength={110} placeholder="Next activity?" className="p-1 bg-transparent outline-none border border-black rounded my-2"></input>
            <button onClick={addact} className="mx-2 bg-black px-3 py-1 text-white">Add</button>
        </div>
    )
}

export default AddTodoForm;