import './App.css'
import { Page1 } from './components/page1/page1'
import { Page2 } from './components/page2/page2'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'


function App() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className='main-components'>
        <Page1 />
        <Page2 />
      </div>
    </>
  )
}

export default App
