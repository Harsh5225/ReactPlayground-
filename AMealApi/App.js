import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Main'




const App = () => {
  return (
    <div>
   <Main/>
    </div>
  )
}

export default App


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);