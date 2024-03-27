import React from 'react'
import exam from '../assets/exam.png'
import '../styles/Content.css'
import laptop from '../assets/laptop.png'

const Content = () => {
  return (
    <div className="container-fluid">
      <div className="about">
      <h2>Elevate learning,test Knowledge,and succeed with online Exams </h2>
      <h2>Empower your future with online Exam portal</h2>
      </div>
      <div className="exam-image">
      <img src={exam}></img>
      {/* <img src={laptop} style={{height:"30px",width:"50px"}}></img> */}
      </div>
      
    </div>
  )
}

export default Content
