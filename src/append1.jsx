import { useEffect, useState } from "react"
import './append1.css'

function Append1(props){
    const [color,setColor]=useState('green')
    useEffect(()=>{
        props.changeS(setColor)
    },[])
    return(
        <>
            <div className="container_color" style={{backgroundColor:color}}>

            </div>
        </>
    )
}

export default Append1