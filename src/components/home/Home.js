
import React from 'react';
import './Home.css';
import profileImage from '../../assets/images/profile-1.png';

const Home = () => {
  return (
    <div className="container" id="home">
      <article className="home-article">
        <h2>Elijah Brereton</h2>
        <h3>Full-stack development.</h3>
      </article>

      <section className="home-img">
        <div className="imgCard">
          <img src={profileImage} alt="Elijah in prayer formation" />
        </div>
      </section>
    </div>
  );
};

export default Home;
