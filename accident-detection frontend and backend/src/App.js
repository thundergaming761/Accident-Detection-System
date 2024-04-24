import React, { useState } from 'react';
import VideoFeed from './components/VideoFeed';
import Map from './components/Map';
import SpeedDisplay from './components/SpeedDisplay';
import CaptureButton from './components/CaptureButton';
import CarsInvolvedButton from './components/CarsInvolvedButton';
import VideoAndMapComponent from './components/VideoAndMapComponent';

const App = () => {
 const [speed, setSpeed] = useState(0);
 const [impact, setImpact] = useState('');

 const handleCapture = () => {
    console.log('Capture frame');
 };

 const handleDetect = () => {
    console.log('Detect number plate');
 };

 const handleCarsInvolved = () => {
    console.log('Display cars involved');
 };

 return (
    <div className="App">
      <h1>SafetyNet DashBoard</h1>
      <VideoAndMapComponent/>
      <SpeedDisplay speed={speed} />
      <CaptureButton onCapture={handleCapture} />
      <CarsInvolvedButton onCarsInvolved={handleCarsInvolved} />
    </div>
 );
};

export default App;