import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './Counter'


const App = () => {
  return (
    <div>
    <Counter/>
    </div>
  )
}

export default App


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);