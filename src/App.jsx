import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initializing the state with a person object and show state
    this.state = {
      person: {
        fullName: 'Afrosix Jaara',
        bio: 'A passionate web developer.',
        imgSrc: '/ini.png',
        profession: 'Software Engineer and Spokenword Poet'
      },
      show: false,
      timeSinceMount: 0, // Time since the component was mounted
    };
  }

  componentDidMount() {
    // Start the timer when the component is mounted
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    // Clear the timer when the component is unmounted
    clearInterval(this.timer);
  }

  toggleShow = () => {
    // Toggle the state of show to either display or hide the profile
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>Profile Toggle Example</h1>
        
        {/* Button to toggle the visibility of the profile */}
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {/* Conditionally render the profile when show state is true */}
        {show && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p><strong>Profession:</strong> {person.profession}</p>
          </div>
        )}

        {/* Display the time since the component was mounted */}
        <div className="timer">
          <p>Time since mounted: {timeSinceMount} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;

