import React from "react";
import {Col} from "react-bootstrap";
 const  ServiesCards=(props)=>{
 const {title,icon,desc,subDesc,color}=props
  return(
      <Col className="mt-3" key={item.title} lg={3} md={6} sm={6}>
       <div >
        <div className="servies-header" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
         <i className={icon} style={{fontSize:'14px'}}></i>
         <h5> {title}</h5>
        </div>
        <div className="servies-items">

         <i  className={icon} style={{fontSize:'24px'}}></i>
        </div>
       </div>
      </Col>
  )
}
export default ServiesCards