import React from 'react'
import { useState } from 'react'
const FlipCoin = () => {

   
    const imageLinkTwo = "https://qph.cf2.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf-lq";

    const imageLinkOne ="https://qph.cf2.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26-lq";

    const[count,setCount]=useState(0)
    const[image,setImage]=useState(true)
    {/*if(image){
      setImage(imageLinkOne)
    }else{
      setImage(imageLinkTwo)
    }*/}
    const clickHandle = ()=>{
        setCount(count+1)
        setImage((value)=>!value)
    }

  return (
    
    <> 
     <h1>This is coin flip</h1>
       <div className='container' >
       
        <div className='items'>
        <img src={image?imageLinkOne:imageLinkTwo}/>
        </div>
         
    </div>
    <button onClick={clickHandle}>Click Me</button>
    <h2>Count : Tail={count}</h2>
    </>
 
  )
}

export default FlipCoin;
