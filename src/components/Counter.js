import React, { useEffect, useRef, useState } from 'react'

const Counter = ({end}) => {
    const [state, setState] = useState(null)
    const ref = useRef(0)
    const accumlator = end/200;
    const updateCounterState = () =>{
        if(ref.current <end){
            const result = Math.ceil(ref.current + accumlator)
            if(result > end) return setState(end)
            setState(result)
            ref.current = result
        }
        setTimeout(updateCounterState,50)
            
    }
    useEffect(() =>{
        let isMounted = true;
        if(isMounted){updateCounterState()}
        return () =>isMounted = false
    },[end])
  return (
    <h1 className='sphere'>
      {state}%
    </h1>
  )
}

export default Counter
