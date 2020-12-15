import React, { Component } from 'react';
import { Button } from '../components/Button';
import '../styles/HeroSection.css';
import Video from '../videos/ohio.mp4';

export default class HeroSection extends Component {

  componentDidMount = () => {
    let heroVideo = document.getElementById('heroVideo');
    heroVideo.addEventListener('pause', () => {
      console.log('pause');
      heroVideo.load();
    })
  }

  render() {
    return (
      <div className='hero-container'>
        <h1>Cincinnati Adventure Awaits</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--test'
              buttonSize='btn--medium'
            >
              Tours Here
            </Button>  
        </div>
        
        <video id="heroVideo" autoPlay loop muted>
          <source src={Video} type='video/mp4' />
        </video>
      
      </div>
    );
  }
}
