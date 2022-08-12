import { useEffect, useState } from 'react'
import './append3.css'

function Append3(props){
    const [color,setcolor]=useState('pink')
    useEffect(()=>{
        props.changeS(setcolor)
    })
    return(
        <>
            <div className="container_color" style={{backgroundColor:color}}>
                </div>
        </>
    )
}

export default Append3