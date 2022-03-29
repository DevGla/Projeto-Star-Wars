import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import dataAPI from '../services/dataAPI';

function PlanetProvider({ children }) {
  const [data, setDataAPI] = useState([]);

  const request = async () => {
    try {
      const resultAPI = await dataAPI();
      setDataAPI(resultAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return <MyContext.Provider value={ { data } }>{children}</MyContext.Provider>;
}

PlanetProvider.defaultProps = {
  children: '',
};

PlanetProvider.propTypes = {
  children: PropTypes.string,
};

export default PlanetProvider;
