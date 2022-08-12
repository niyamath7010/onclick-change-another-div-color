import Append3 from "./append3"


function App3(){
    let change=()=>{}
    function changeS(callback){
        change=callback
    }
    return(
        <>
            <div className="main_continer">
                <button className="btn3" onClick={()=>{change('gold')}} >CLICK ME 3</button>
                <Append3 changeS={changeS} />
            </div>
        </>
    )
}

export default App3