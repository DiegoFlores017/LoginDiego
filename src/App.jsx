import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Holamundo from './Holamundo.jsx'
import SignInSide from './SignInSide.tsx'

function App(){
  return (
  <Routes>
    <Route path = "/" element={<SignInSide></SignInSide>}></Route>
    <Route path='/Holamundo' element ={<Holamundo></Holamundo>}></Route>
  </Routes>
  )
}
export default App;
/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

//export default App
/*function Cuadrado ({value}){
  function handleClick(){
    console.log("hiciste click ");
  }
 return( 
 <button
  className="Cuadrado"
  onClick= {handleClick}
 >{value}
 </button>)
}
export default function Tablero() {
  return ( 
  <>
    <div className='linea 1'>
       <Cuadrado value={1}/>
       <Cuadrado value={2}/>
       <Cuadrado value={3}/>
    </div>
    <div className='linea 2'>
       <Cuadrado value={4}/>
       <Cuadrado value={5}/>
       <Cuadrado value={6}/>
    </div>
     <div className='linea 3'>
       <Cuadrado value={7}/>
       <Cuadrado value={8}/>
       <Cuadrado value={9}/>
     </div>
  </>
    );
}*/

 /*function Login() {
  return (
    <>
    <body className='cuerpo'>
    <section className='Formulario-Login'>
    <h5>Login</h5>
   <input class="controls" type="text" className="Login" name="usuario" value="" placeholder='Usuario'/>
   <input class="controls" type="password" className="Login" name="contraseña" value="" placeholder='Contraseña'/>
   <input class="buttons" type ="submit" name='' value="Ingresar"/> 
   <input class="buttons" type='reset'name="" value="Reset"/>
   <p><a href='#'>¿Olvidaste tu contraseña?</a></p>
   </section>
   </body>
  </>
  )
}
export default Login;*/

