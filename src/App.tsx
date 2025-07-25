import './App.css'
import { Page1 } from './components/page1/page1'
import { Page4 } from './components/page4/page4'
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
        <Page4 />
      </div>
    </>
  )
}

export default App
