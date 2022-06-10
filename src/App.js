import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Alert } from 'react-bootstrap';
import Navbar2 from './components/navbar2';
import Coding from './components/coding';
import Study from './components/study';
import Photos from './components/photos';
import Social from './components/social';
import About from './components/about';

function App() {

  return (
    <>
      <Navbar2 />
      
      
      <Alert variant="dark">
      <Alert.Heading>Hey, nice to see you!</Alert.Heading>
        <p>
          Currently the website is under development, we'll keep you update on the last news.
        </p>
        <hr />
        <p className="mb-0">
          Hope to see you soon!
        </p>
      </Alert>
    

      <Container fluid='true' className='App-content'>
          {/* <Photos /> */}
          <About />
          <Coding />
          <Study />
          <Social />
      </Container>

    </>
  );

}

export default App;
