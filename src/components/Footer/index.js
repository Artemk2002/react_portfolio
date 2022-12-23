import React from 'react';
import './footer.css'

function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/Artemk2002",
      title: "GitHub"
    },
    {
      name: "fab fa-linkedin",
      link: "",
      title: "LinkedIn"
    }
  ]
  return (
    <footer>
      <hr></hr>
      <div className="footer d-flex justify-content-center align-items-center">
      {icons.map(icon =>(
        <a className="footer-link" href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}> {icon.title}</i></a>
      )
        )}
      </div>
    </footer>
  );
}

export default Footer;