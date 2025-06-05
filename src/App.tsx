import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Nav, Navbar } from 'react-bootstrap';
import navLines from './assets/nav-lines.svg';
import christianImg from './assets/man-5022931.jpg'
import communityImg from './assets/community.svg';
import consultationImg from './assets/conversation.svg';
import podcastImg from './assets/podcast.svg';
import youtubeImg from './assets/youtube.svg';
import nycImg from './assets/sunset-3875817.jpg';
import consultationBookImg from './assets/consultation-9530086.svg';
import mediaAppearanceImg from './assets/microphone-8689065.png';
import youtubeAltImg from './assets/presentation-9591454.svg';
import newsletterImg from './assets/newsletter.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
Aos.init();

function App() {
  return (
    <div className="App">
      <Navbar>
        <h1>
          <a href='/'>Christian, Life Coach</a>
        </h1>
        <Button>
          <img alt='open nav bar' src={navLines} />
        </Button>
      </Navbar>
      <main className='content'>
        <section  
          data-aos="fade-in"
          data-aos-duration="2000"
          className='christian'
        >
          <img alt='christian life coach' src={christianImg} />
        </section>
        <section   
            data-aos="fade-in"
            data-aos-duration="2000"
            className='meet-christian'
        >
          <div className='meet-christian-content'>
            <h2>Meet Christian</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a href='#book-a-consultation'>
              <Button>BOOK 1-ON1 CONSULTATION</Button>
            </a>
          </div>
        </section>
        <section className='home-banner' 
          data-aos="fade-in"
          data-aos-duration="2000">
          <img src={nycImg} alt='new york city skyline' />
        </section>
        <section className='service-options'>
          <ul>
            <li 
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <a href='#join-the-community'>
                <img alt='join the community' src={communityImg} />
                <p>Join the Community</p>
              </a>
            </li>
            <li 
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <a href='#book-a-consultation'>
                <img alt='book a consultation' src={consultationImg} />
                <p>Book a Consultation</p>
              </a>
            </li>
            <li 
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <a href='#media-appearance'>
                <img alt='schedule a media appearance' src={podcastImg} />
                <p>Schedule a Media Appearance</p>
              </a>
            </li>
            <li 
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <a href='#youtube'>
                <img alt='follow on youtube' src={youtubeImg} />
                <p>Subscribe on YouTube</p>
              </a>
            </li>
          </ul>
        </section>
        <section   
              data-aos="fade-right"
              data-aos-duration="2000"
              id='book-a-consultation' 
              className='consultations'
        >
          <img alt='book a consultation with me' src={consultationBookImg} />
          <h2>Book a Consultation</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Button>SCHEDULE A SESSION</Button>
        </section>
        <section   
              data-aos="fade-right"
              data-aos-duration="2000"
              id='media-appearance' 
              className='media-appearance' 
        >
          <img alt='schedule a media appearance with me' src={mediaAppearanceImg} />
          <h2>Schedule a Media Appearance</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Button>REQUEST A COLLABORATION</Button>
        </section>
        <section    
              data-aos="fade-right"
              data-aos-duration="2000"
              id='youtube' 
              className='youtube'>
          <img alt='follow me on youtube' src={youtubeAltImg} />
          <h2>Subscribe on YouTube</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Button>VISIT THE CHANNEL</Button>
        </section>
        <section     
              data-aos="fade-right"
              data-aos-duration="2000"   
              id='join-the-community' 
              className='join-the-community'>
          <form>
            <img alt='my weekly newsletter' src={newsletterImg} />
            <h2>Like What You Heard?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            {/* the below input box breaks with bitwarden, permission denied error */}
            <input type='text' placeholder='Enter your email' /> 
            <Button>SUBSCRIBE</Button>
          </form>
        </section>
      </main>
      <footer className='footer'>
        <h2>Christian, Life Coach</h2>
        <ul>
          <li>Community</li>
          <li>Consultations</li>
          <li>Collaborations</li>
        </ul>
        <ul>
          <li>
            <img alt='instagram page' src='https://placehold.co/32x32' />
          </li>
          <li>
            <img alt='linkedin profile' src='https://placehold.co/32x32' />
          </li>
          <li>
            <img alt='tiktok page' src='https://placehold.co/32x32' />
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
