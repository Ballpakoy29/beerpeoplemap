import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import MainPage from './components/mainpage'
import WebFont from 'webfontloader';

function App() {

  useEffect(()=>{

    WebFont.load({
      google: {
        families: ['Anuphan', 'Chilanka'],
      }})

},[])


  return (
    <div style={{fontFamily: 'Anuphan'}}>
      <MainPage></MainPage>
    </div>
  )
}

export default App
