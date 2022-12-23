import React from 'react';
import './about.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function About() {
  return (
    <div >
      <div className='about d-flex justify-content-around'>
      <h2 className='aboutHeader d-flex align-items-center'>About Me</h2>
     
      </div>
      <div className=" about d-flex flex-wrap align-items-center">
      <p className='info'>My family Imigrated to United states when I was 6 years old, and since then have lived in Washington state.</p>
      <p className='info'>Growing up I was always interstead in robotics and computer science. I have joined clubs and took other programs in the STEM feild.</p>
      <p className='info'>I also enjoy the outdoors and sports. Some of my favorite sports are vollyball and football.</p>
      <p className='info'>After getting my accoicates degree i completed UW coding bootcamp in December 2022.</p>
      </div>
    </div>
  );
}