import React from 'react';
import artem from './IMG_4144.JPG'
import './home.css'


export default function Home() {
  return (
    <div>
      <h2>Welcome to my Portfolio </h2>
      <div className="profile-img my-5">
        <img className="profilePicture" src={artem} alt="Artem Khomenk0" />
      </div>
    </div>
  );
}