import React, { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function BackToTop() {
    const [backToTop,setBackToTop]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                setBackToTop(true)

            }else{
                setBackToTop(false)
            }
        })
    },[])
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    }
  return (
    <>
    
    {backToTop && (
        <a href="#" className="to-top" style={{backgroundColor: 'white',
            position: 'fixed',
            bottom: '10px',
            right: '12px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '47px',
            opacity: '1',
            transition: 'all .4s'}}>
        <BsFillArrowUpCircleFill/>
      </a>

    )}
    </>
  )
}
