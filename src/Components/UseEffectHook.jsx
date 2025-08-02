import React, { useEffect } from 'react'
import { useState } from 'react';

const UseEffectHook = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
         const logSomething = () => {
        console.log("logging something...");
    }
    logSomething();

    }, [count2]); //dependency array
 
   



    return (
        <div>

            <div className='flex flex-col p-10 gap-5 items-center'>
                <h1 className='font-bold text-xl text-yellow-600 text-shadow-2xs'>Counter 1 : {count1} </h1>
                <button className='bg-green-500 border rounded px-3 py-2' onClick={() => setCount1(count1+1)}>Click button 1</button>
            </div>

            <div className='flex flex-col p-10 gap-5 items-center'>
                <h1 className='font-bold text-xl text-yellow-600 text-shadow-2xs'>Counter 2 : {count2} </h1>
                <button className='bg-blue-600 border rounded px-3 py-2' onClick={() => setCount2(count2+2)}>Click button 2</button>
            </div>

        </div>
    )
}

export default UseEffectHook
