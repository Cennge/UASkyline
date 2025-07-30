import './App.css'
import { Page1 } from './components/page1/page1'
import { Page2 } from './components/page2/page2'
import { Page3 } from './components/page3/page3'
import { Page4 } from './components/page4/page4'
import { Page5 } from './components/page5/page5'
import { Page6 } from './components/page6/page6'
import { Page7 } from './components/page7/page7'
import { Page8 } from './components/page8/page8'
import { Page9 } from './components/page9/page9'
import { Page10 } from './components/page10/page10'
import { Page11 } from './components/page11/page11'
import { Page12 } from './components/page12/page12'
import { Page13 } from './components/page13/page13'
import { Page14 } from './components/page14/page14'
import { Page15 } from './components/page15/page15'
import { Page16 } from './components/page16/page16'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop'


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
        <div className='app-page4'>
        <Page4 />
        </div>
        <div className='app-page5'>
        <Page5 />
        </div>
        <div className='app-page6'>
        <Page6 />
        </div>
        <div className='app-page7'>
        <Page7 />
        </div>
        <div className='app-page8'>
        <Page8 />
        </div>
        <div className='app-page9'>
        <Page9 />
        </div>
        <div className='app-page10'>
        <Page10 />
        </div>
        <div className='app-page11'>
        <Page11 />
        </div>
        <div className='app-page12'>
        <Page12 />
        </div>
        <div className='app-page13'>
        <Page13 />
        </div>
        <div className='app-page14'>
        <Page14 />
        </div>
        <div className='app-page15'>
        <Page15 />
        </div>
        <div className='app-page16'>
        <Page16 />
        </div>

        <ScrollToTopButton />
      </div>
    </>
  )
}

export default App
