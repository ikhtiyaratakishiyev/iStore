import React from 'react'
import {Cards2} from "../../Data/data"

const index = () => {

  return (
    <div>
        {  Cards2.map((item,index)=>{
            return(
               <div>
                   {item.image}
                </div>
               
            )
        })}
    </div>
  )
}

export default index