import Append1 from "./append1"
import App2 from './App2'
import './App.css'
import App3 from "./App3"
import App4 from "./App4"

function App(){
  let change=()=>{}
  function changeS(callback){
    change=callback
  }
  return(
    <>
    <div className="main_container">
      <div className="first_container">
        <button className="btn1" onClick={()=>{change('red')}}>CLICK ME</button>
        <Append1 changeS={changeS} />
      </div>
      <App2 />
    </div>
    <div className="mmain_continer">
      <App3 />
      <App4 />
    </div>
    </>
  )
}

export default App