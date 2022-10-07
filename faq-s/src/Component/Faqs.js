import React from 'react'
import style from './faq.module.css'

import { dummyData } from './data'
import Faq from './Faq'
const Faqs = () => {
  return (
    <div className={style.box}>
        {dummyData.map((item)=><Faq {...item} key={item.id}/>)}
    </div>
  )
}

export default Faqs