import React from 'react'
import ReactDOM from 'react-dom/client'
import Background from './Background'




const App = () => {
  return (
    <div>
  <Background/>
    </div>
  )
}

export default App


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);