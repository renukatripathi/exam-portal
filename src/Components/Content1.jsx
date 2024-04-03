import React from 'react'
import exam1 from '../assets/exam1.png'
import '../styles/content1.css'

const Content1 = () => {
    return (
        <div className='content1'>
            <div className='exam-intro'>
                <h1 className='heading'>WELCOME TO ONLINE EXAM PORTAL</h1>
                <h2 className='exam-content'> Online Examination System is a technology-driven way to simplify examination activities like defining exam patterns with question banks, defining exam timers, objective/ subjective question sections, and conducting exams using a computer or mobile devices in a paperless manner.<br></br><br></br>
                    Online Examination System is a cost-effective, scalable way to convert traditional pen and paper-based exams to online and paperless mode. Candidates can appear for the exam using any desktop, laptop, or mobile device with a browser. Exam results can be generated instantly for the objective type of questions.


                </h2>


            </div>
            <div className='exam-image'>
                <img src={exam1} className='exam-icon'></img>


            </div>
        </div>
    )
}

export default Content1
