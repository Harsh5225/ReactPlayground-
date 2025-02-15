import React from 'react'
import ReactDOM from 'react-dom/client'
import Todo from './Todo'



const App = () => {
  return (
    <div>
   <Todo/>
    </div>
  )
}

export default App


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);