import React from 'react'
import '../App.css'
export default function SiteInfo({data}) {
  return (
    <div className='info-box'>
        <ul className='info-list'>
            {data.SiteInfo.map(item=>{
                return <li key={item.title}> 
                    <h3> { item.title}</h3>
                    <p> { item.description}</p>
                </li>
            })}
            
        </ul>
    </div>
  )
}
