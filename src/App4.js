import { useState } from "react"
import Appende4 from "./append4"
import Child4 from "./childappend"

function App4(){
    const [home,setHome]=useState(true)
    let change=()=>{}
    function changeS(callback){
        change=callback
    }
    return (
        <>
            <div className="main_containerrr">
                <button  onClick={()=>{change('blue')}}  >CLICK ME 4</button>
                <Appende4 changeS={changeS} />
            </div>
        </>
    )
}

export default App4;