import React from "react"
import projectStyles from "./project.module.css"

import allist from './../../public/static/ALListProject.png'
import uttt from './../../public/static/uttt.png'

const Project = () => (

<div style={{display: 'block', textAlign: 'center'}}>
  <div className={"project"}>
    <div style={{display: 'inline-block', width: '100%', height: '100%', border: '1px solid blue', boxShadow: '0 0 18px #727272'}}>
      <img style={{width: '100%', height: 'auto'}} src={allist}></img>
    </div>
  </div>
  <div className={"project"}>
    <div style={{display: 'inline-block', width: '100%', height: '100%', border: '1px solid blue', boxShadow: '0 0 18px #727272'}}>
      <img style={{width: '100%', height: 'auto'}} src={uttt}></img>
    </div>  
  </div>
</div>

)

export default Project