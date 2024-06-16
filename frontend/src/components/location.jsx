import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/location-style.css';

const Location = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLocalArea, setSelectedLocalArea] = useState('');

  const handleStateSelection = (state) => {
    setSelectedState(state);
    setSelectedCity('');
    setSelectedLocalArea('');
  };

  const handleCitySelection = (city) => {
    setSelectedCity(city);
  };

  const handleLocalAreaSelection = (area) => {
    setSelectedLocalArea(area);
  };

  const handleSubmit = () => {
    if (selectedState && selectedCity && selectedLocalArea) {
      let route = '/';
      switch (selectedLocalArea) {
        case 'Pune City':
          route = '/pune-city';
          break;
        case 'Lohegaon':
          route = '/lohegaon';
          break;
        default:
          route = '/other';
      }

      navigate(route);
    } else {
      console.warn('Please select all fields (State, City, Area)');
    }
  };

  return (
    <div>
      <div className="location-form">
        <div className="field-container dropdown-container">
          <input
            type="text"
            id="stateInput"
            className="location-input"
            placeholder="State"
            value={selectedState}
            readOnly
            style={{ color: selectedState ? 'white' : 'black' }}
          />
          <div className="down-arrow">&#9660;</div>
          <div className="dropdown-content">
            <div
              className="dropdown-item"
              onClick={() => handleStateSelection('Maharashtra')}
            >
              Maharashtra
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleStateSelection('Madhya Pradesh')}
            >
              Madhya Pradesh
            </div>
          </div>
        </div>
        <div className="field-container dropdown-container">
          <input
            type="text"
            id="cityInput"
            className="location-input"
            placeholder="City"
            value={selectedCity}
            readOnly
            style={{ color: selectedCity ? 'white' : 'black' }} 
          />
          <div className="down-arrow">&#9660;</div>
          <div className="dropdown-content">
            {selectedState === 'Maharashtra' && (
              <>
                <div
                  className="dropdown-item"
                  onClick={() => handleCitySelection('Pune')}
                >
                  Pune
                </div>
                <div
                  className="dropdown-item disabled"
                  onClick={() => handleCitySelection('Mumbai')}
                >
                  Mumbai
                </div>
              </>
            )}
            {selectedState === 'Madhya Pradesh' && (
              <>
                <div
                  className="dropdown-item"
                  onClick={() => handleCitySelection('Indore')}
                >
                  Indore
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleCitySelection('Bhopal')}
                >
                  Bhopal
                </div>
              </>
            )}
          </div>
        </div>
        <br />
      </div>
      <div className="field-local-container dropdown-container">
        <input
          type="text"
          id="areaInput"
          className="location-input"
          placeholder="Local Area"
          value={selectedLocalArea}
          readOnly
          style={{ color: selectedLocalArea ? 'white' : 'black' }}
        />
        <div className="down-arrow">&#9660;</div>
        <div className="dropdown-content" style={{ marginLeft: '150px' }}>
          {selectedCity === 'Pune' && (
            <>
              <div
                className="dropdown-item"
                onClick={() => handleLocalAreaSelection('Pune City')}
              >
                Pune City
              </div>
              <div
                className="dropdown-item"
                onClick={() => handleLocalAreaSelection('Lohegaon')}
              >
                Lohegaon
              </div>
            </>
          )}
          {selectedCity === 'Mumbai' && (
            <>
              <div
                className="dropdown-item"
                onClick={() => handleLocalAreaSelection('Area1')}
              >
                Area1
              </div>
              <div
                className="dropdown-item"
                onClick={() => handleLocalAreaSelection('Area2')}
              >
                Area2
              </div>
            </>
          )}
          {selectedCity === 'Indore' && (
            <>
              <div
                className="dropdown-item"
                onClick={() => handleLocalAreaSelection('Area3')}
              >
                Area3
              </div>
              <div
                className="dropdown-item"
                onClick={() => handleLocalAreaSelection('Area4')}
              >
                Area4
              </div>
            </>
          )}
          {selectedCity === 'Bhopal' && (
            <>
              <div
                className="dropdown-item"
                onClick={() => handleLocalAreaSelection('Area5')}
              >
                Area5
              </div>
              <div
                className="dropdown-item"
                onClick={() => handleLocalAreaSelection('Area6')}
              >
                Area6
              </div>
            </>
          )}
        </div>
      </div>
      <div className="submit-container">
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Location;
