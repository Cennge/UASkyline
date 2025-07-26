import './App.css'
import { Page1 } from './components/page1/page1'
import { Page2 } from './components/page2/page2'
import { Page3 } from './components/page3/page3'
import { Page4 } from './components/page4/page4'
import { Page5 } from './components/page5/page5'
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
        <Page3 />
        <Page4 />
        <Page5 />
      </div>
    </>
  )
}

export default App
