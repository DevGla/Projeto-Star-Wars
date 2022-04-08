import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const [filterByName, setFilterByName] = useState('');

  const [select, setSelect] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const [filterByNumber, setFilterByNumber] = useState([]);

  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const changePlanets = (array) => {
    setPlanets(array);
  };
  const changeFilterByName = (string) => {
    setFilterByName(string);
  };
  const changeFilterByNumber = (obj) => {
    setFilterByNumber((prevState) => [...prevState, obj]);
  };
  const changeSelect = (array) => {
    setSelect(array);
  };
  const changeDelete = (array) => {
    setFilterByNumber(array);
  };
  const changeOrder = (obj) => {
    setOrder(obj);
  };

  const state = {
    planets,
    select,
    filterByName,
    filterByNumber,
    order,
    setOrder,
    setPlanets,
    setFilterByName,
    setFilterByNumber,
    changeDelete,
    changeOrder,
    changePlanets,
    changeFilterByName,
    changeFilterByNumber,
    changeSelect,
  };

  return <MyContext.Provider value={ state }>{children}</MyContext.Provider>;
}

PlanetProvider.defaultProps = {
  children: '',
};

PlanetProvider.propTypes = {
  children: PropTypes.string,
};

export default PlanetProvider;
