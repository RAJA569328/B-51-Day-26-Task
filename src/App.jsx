import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './components/All';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import FSD from './components/FSD';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
// import './Img/'

function App() {
  let FSDImg = './src/Img/FSD.jpg';
  let DataScienceImg = './src/Img/DataSciencePNG.png';
  let CyberSecurityImg = './src/Img/CyberSecurity.jpg';
  let CareerImg = './src/Img/Career.jpg'
  let x = ''
  let FSDCourse = [{
    img: FSDImg ,
    CourseName: 'MERN STACK',
  }]

  let DataScienceCourse =[{
    img: DataScienceImg,
    CourseName: 'DATA SCIENCE'
  },
  {
    img: DataScienceImg,
    CourseName: 'DATA SCIENCE'
  }]

  let CyberSecurityCourse=[{
    img : CyberSecurityImg,
    CourseName: 'CYBER SECURITY'
  },
  {
    img : CyberSecurityImg,
    CourseName: 'CYBER SECURITY'
  },
  {
    img : CyberSecurityImg,
    CourseName: 'CYBER SECURITY'
  }]

  let CareerCourse=[{
    img: CareerImg,
    CourseName: 'Software Developer vs Software Engineer'
  },
  {
    img: CareerImg,
    CourseName: 'Software Developer vs Software Engineer'
  },
  {
    img: CareerImg,
    CourseName: 'Software Developer vs Software Engineer'
  },
  {
    img: CareerImg,
    CourseName: 'Software Developer vs Software Engineer'
  }]

  let AllCourse = FSDCourse.concat(DataScienceCourse,CyberSecurityCourse,CareerCourse)

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='All' element={<All  AllCourse={AllCourse}/>} />
      <Route path='FSD' element={<FSD  FSDCourse={FSDCourse}/>} />
      <Route path='DataScience' element={<DataScience DataScienceCourse={DataScienceCourse} />} />
      <Route path='CyberSecurity' element={<CyberSecurity CyberSecurityCourse={CyberSecurityCourse} />} />
      <Route path='Career' element={<Career  CareerCourse={CareerCourse}/>} />
      <Route path='*' element={<All  AllCourse={AllCourse}/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App