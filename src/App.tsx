import { useState } from 'react'
import { SizeSelector } from './components/SizeSelector'
import './App.css'


function App() {
  
  const [currentSize, setCurrentSize] = useState('none')

  return (
    <div className='App App-header'>
      <h1>Talla seleccionada: { currentSize }</h1>
      <SizeSelector 
        selectedSize={ currentSize } 
        onSizeChange={ (size) => setCurrentSize(size)}
      />
        
    </div>
  )
}

export default App
