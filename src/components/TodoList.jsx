import Todoitem from "./Todoitem"

const TodoList = (props) => {
    
    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr

    return (
        <div className='bg-orange-300 p-3 flex-grow flex-wrap border rounded-md'>
            <h1 className="text-2xl font-bold">Today's Activity</h1>            
            {
                activityArr.length===0?<p>You havn't added anything yet</p>:""

            }
            {
                activityArr.map((list, index) => {
                    return <Todoitem
                    id={list.id} activity={list.activity} index={index}
                    activityArr={activityArr} setactivityArr={setactivityArr}/>
                })
            }
        </div>
    )

}

export default TodoList