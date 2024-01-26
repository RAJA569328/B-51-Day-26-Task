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
  let FSDImg = 'https://res.cloudinary.com/dlaqkow18/image/upload/v1706267638/FSD_pgtwfs.jpg';
  let DataScienceImg = 'https://res.cloudinary.com/dlaqkow18/image/upload/v1706267818/Data_Science_k9z9cp.jpg';
  let CyberSecurityImg = 'https://res.cloudinary.com/dlaqkow18/image/upload/v1706267818/CyberSecurity_xkk1dz.jpg';
  let CareerImg = 'https://res.cloudinary.com/dlaqkow18/image/upload/v1706267818/Career_owdqzy.jpg';
  
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