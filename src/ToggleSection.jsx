import peter from './assets/peter.png'
import luffy from './assets/luffy.jpg'
import doraemon from './assets/doraemon.png'
import naruto from './assets/naruto.jpg'
import { useState } from "react"
import './toggle.css'

function ToggleSection({setnar,setluff,setdor,setdef}){

    const [image, setImage]=useState(peter);
    const [clr, setClr]=useState({backgroundColor:'#2f972d'});

   let toNaruto=()=>{
        setImage(naruto);
    }
    let narutocolor=()=>{
        setClr({backgroundColor:'#ff5d00'})
    }
    let toLuffy=()=>{
        setImage(luffy);
    }
    let luffycolor=()=>{
        setClr({backgroundColor:'#ff0000'})
    }
    let toDoraemon=()=>{
        setImage(doraemon);
    }
    let doracolor=()=>{
        setClr({backgroundColor:'#0093ff'})
    }
    let toDefault=()=>{
        setImage(peter);
    }
    let defaultcolor=()=>{
        setClr({backgroundColor:'#2f972d'})
    }
    let defaultfuncall=()=>{
        toDefault();
        defaultcolor();
    }


    return(
        <>
            <div className='container'>
                <img src={image} alt="" />
                <button className='peter' onClick={()=>{
                                        defaultfuncall(); 
                                        setdef();}}>Default</button>
                <div className='buttons'>
                    <button style={clr} onClick={()=>{
                                        setnar();
                                        toNaruto();
                                        narutocolor();}}>Naruto</button>
                    <button style={clr} className='luffybtn'onClick={()=>{
                                        setluff();
                                        toLuffy();
                                        luffycolor();}}>Luffy</button>
                    <button style={clr} onClick={()=>{
                                        setdor();
                                        toDoraemon();
                                        doracolor();}}>Doraemon</button>
                </div>
            </div>
        </>

    )
}

export default ToggleSection