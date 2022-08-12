import Append2 from "./append2"
import './append2.css'


function App2(){
    let change=()=>{}
    function changeS(callback){
       change=callback
}
    return(
        <>
            <div className="append1_container">
                <button className="btn2" onClick={()=>{change('gray')}}>CLICK ME 2 </button>
                <Append2 changeS={changeS} />
            </div>
        </>
    )
}

export default App2