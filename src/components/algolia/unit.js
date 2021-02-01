import React from 'react'
import {navigate} from 'gatsby'
import Button from '@material-ui/core/Button';




 const  HitPreview =({hit}) => {


const handleClick =(e)=>{
  let path = hit.path
    navigate(path)
}
  return ( 
  <>
   {/* <div
   onClick={handleClick}>
   {hit.context !== null  && ( hit.context.slug ) } </div>
   {hit.context !== null  && ( console.log(hit.context))} */}
   {hit.build === false  && ( <Button 
                                style={{fontStyle: 'italic', color:'grey'}} 
                                onClick={handleClick}
                              >{hit.context.slug}</Button> ) } 


    </>
  )
}

export default HitPreview
