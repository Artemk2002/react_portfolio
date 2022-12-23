import React from 'react';
import './project.css';


export default function Project() {

  return (
    <div>
      <h2>My Projects</h2>
      <div className='project-cards d-flex justify-content-around'>
        <div className="project">
          <h3>Superheros</h3>
          <a className="project-link" href=' https://mfarrell23.github.io/superHeros/' target="_blank">
          <img src={require(`./page1.png`)} alt='Superheros' className="project-img" /></a>
          <div><a className="project-link" href="https://github.com/mfarrell23/superHeros" target="_blank"><i className="fa-brands"></i> GitHub Link</a></div>
        </div>
        <div className="project">
          <h3>Wish List</h3>
          <a className="project-link" href='https://team7-wishlist-app.herokuapp.com/' target="_blank"><img src={require(`./home.png`)} alt='wish list' className="project-img" /></a>
          <div><a className="project-link" href="https://github.com/tkmarsten/wishlist" target="_blank"><i className="fa-brands"></i> GitHub Link</a></div>
        </div>
        <div className="project">
          <h3>Vroom</h3>
          <a className="project-link" href="https://github.com/swnova/project3/blob/dev" target="_blank"><img src={require(`./screenhome.png`)} alt='wish list' className="project-img" /></a>
          <div><a className="project-link" href="https://github.com/swnova/project3" target="_blank"><i className="fa-brands"></i> GitHub Link</a></div>
        </div>
        <div className="project">
          <h3>Note Taker</h3>
          <a className="project-link" href="https://note-taker-artemkhomenko.herokuapp.com" target="_blank"><img src={require(`./homepage.png`)} alt='wish list' className="project-img" /></a>
          <div><a className="project-link" href="https://github.com/Artemk2002/Note_Taker" target="_blank"><i className="fa-brands"></i> GitHub Link</a></div>
        </div>
        <div className="project">
          <h3>Team Profile Generator</h3>
          <a className="project-link" href="https://drive.google.com/file/d/17CgVSiCLB-7w28IPNnTRIhAJ5tF0EL69/view?usp=sharing" target="_blank"><img src={require(`./homepage-2.png`)} alt='wish list' className="project-img" /></a>
          <div><a className="project-link" href="https://github.com/Artemk2002/Team_Profile_Generator" target="_blank"><i className="fa-brands"></i> GitHub Link</a></div>
        </div>
        <div className="project">
          <h3>Weather Dashboard</h3>
          <a className="project-link" href="https://artemk2002.github.io/Weather-Dashboard/" target="_blank"><img src={require(`./homepage-3.png`)} alt='wish list' className="project-img" /></a>
          <div><a className="project-link" href="https://github.com/Artemk2002/Weather-Dashboard" target="_blank"><i className="fa-brands"></i> GitHub Link</a></div>
        </div>
      </div>
    </div>

  );
}