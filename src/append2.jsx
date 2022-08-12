import { useEffect, useState } from 'react'
import './append2.css'

function Append2(props){
    const [color,setColor]=useState('lightblue')
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

export default Append2