import { useEffect, useState } from 'react'
import './append4.css'

function Appende4(props){
    const [color,setcolor]=useState('orange')
    useEffect(()=>{
        props.changeS(setcolor)
    })
    return (
        <>
            <div className='back_color' style={{backgroundColor:color}}>
                
            </div>
        </>
    )
}

export default Appende4