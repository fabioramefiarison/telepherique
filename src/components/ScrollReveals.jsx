import React, {useEffect} from 'react'
import ScrollReveal  from "scrollreveal";

function ScrollReveals() {
    useEffect (() => {
        ScrollReveal().reveal('.reveal', {
        delay: 200,
        distance: '50px',
        opacity: 0.1,
        easing: 'ease-in-out',
        duration: 1000
    })
    }, [])
  return (
    <div className='reveal'>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsa?</h1>
    </div>
  )
}

export default ScrollReveals