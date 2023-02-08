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
        <a href="#" className="to-top">
        <BsFillArrowUpCircleFill/>
      </a>

    )}
    </>
  )
}
