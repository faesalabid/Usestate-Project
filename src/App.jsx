import Preview from "./Preview"
import ToggleSection from "./ToggleSection"
import './app.css'
import { useState } from 'react'
import narutoseries from './assets/nar.jpg'
import doraseries from './assets/dora.jpg'
import opseries from './assets/op.jpg'
import fgseries from './assets/fg.jpg'


function App() {
  let [preview, setPreview]=useState(fgseries);

    let handleNaruto=()=>{
        setPreview(narutoseries)
        }
    let handleLuffy=()=>{
        setPreview(opseries)
          }
    let handleDora=()=>{
        setPreview(doraseries)
            }
    let handleDefault=()=>{
        setPreview(fgseries)
              }

  return (
      <div className="main-container">
        <ToggleSection setnar={handleNaruto} setluff={handleLuffy} setdor={handleDora} setdef={handleDefault} />
        <Preview image={preview}/>
      </div>
  )
}

export default App
