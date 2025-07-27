import './App.css'
import { Page1 } from './components/page1/page1'
import { Page2 } from './components/page2/page2'
import { Page3 } from './components/page3/page3'
import { Page4 } from './components/page4/page4'
import { Page5 } from './components/page5/page5'
import { Page6 } from './components/page6/page6'
import { Page7 } from './components/page-7/page7'
import { Page8 } from './components/page-8/page8'
import { Page9 } from './components/page9/page9'
import { Page15 } from './components/page15/page15';
import Page16 from './components/page16/page16'

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
        <div className='app-page2'>
          <Page2 />
        </div>
        <div className='app-page3'>
        <Page3 />
        </div>
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page15 />
        <Page16 />
      </div>
    </>
  )
}

export default App
