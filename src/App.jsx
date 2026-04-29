// import React, { useState } from 'react'

// const App = () => {
//   const [advice,setAdvice] = useState('Hello Bhai')



  
// const ApiHandler = async() => {

//  const api = await fetch('https://api.adviceslip.com/advice')
//  const result  = await api.json()
//  const {slip} = result
//  setAdvice(slip.advice)



  
// }


//   return (
//     <div className='Parent'>
//    <h1>Hello I'm Huzaifa Warsi </h1>
//    <h2>{advice}</h2>
//    <button onClick={ApiHandler}>Advice</button>
//    </div>



// )
// }



// export default App




// import React, { useState } from 'react'

// const App = () => {

//   const [count , setCount] = useState(0)
//   const [advice,setAdvice] = useState('Advice')


//   const Counter = async()  => {

//     console.log('Click howa');
    
//     setCount(count + 1)

//     const api = await fetch('https://api.adviceslip.com/advice')
//     const result  = await api.json()
//     const {slip} = result

//     setAdvice(slip.advice)
    
//   }

//   return (
//     <div className='Parent'>
//     <h1>Hello I'm Huzaifa Warsi </h1>
//     <h2>{advice}</h2>
//     <h2>{count}</h2>
//     <button onClick={Counter}>Count</button>

//     </div>
//   )
// }

// export default App








// import React, { useState } from 'react'

// const App = () => {

//   const [count, setCount] = useState(0)
//   const [color, setColor] = useState('red')

//   const colors = ['red','blue','green','yellow','purple']

//   const Counter = () => {
//     console.log('Click howa');
//     setCount(prev => prev + 1)

//       const index = Math.floor(Math.random() * colors.length)
//       setColor(colors[index])
    

//   }

//   return (
//     <div className='Parent'>
//       <h1>Hello I'm Huzaifa Warsi</h1>
//       <h2>{count}</h2>
//       <button onClick={Counter}>Count</button>

//       <body style={{
//         backgroundColor: color,
        
//       }}>
//       </body>
//     </div>
//   )
// }

// export default App
// App.jsx

// App.jsx
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("#000");

  const colors = ["#000", "#1a1a1a", "#222", "#333", "#444", "#5500aa", "#008000", "#990000"];

  const changeBg = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(randomColor);
    
    setBgColor(randomColor);
  };

  const Increment = () => {
    setCount(count + 1);
    changeBg();
  };

  const Decrement = () => {
    setCount(count - 1);
    changeBg();
  };

  const Reset = () => {
    setCount(0);
    changeBg();
  };

  return (
    <div className="parent" style={{ backgroundColor: bgColor }}>
      <div className="card">
        <h1>Counter App</h1>
        <h2>{count}</h2>

        <div className="btnBox">
          <button onClick={Increment}>+</button>
          <button onClick={Decrement}>-</button>
          <button className="reset" onClick={Reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;