import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../context/Context';
import dataAPI from '../services/dataAPI';
import filter from './filter';

function Component() {
  const { planets, filterByName,
    filterByNumber,
    select,
    order,
    changePlanets,
    changeFilterByName,
    changeFilterByNumber,
    changeDelete,
    changeOrder,
    changeSelect } = useContext(MyContext);

  const [inputColumn, setinputColumn] = useState('population');
  const [inputCompasion, setinputCompasion] = useState('maior que');
  const [inputValues, setInputValues] = useState('0');
  const [inputColumn1, setInputColumn1] = useState('population');
  const [inputRadio, setInputRadio] = useState('');
  const request = async () => {
    const resultAPI = await dataAPI();
    const arrayAPI = await resultAPI.filter((element) => delete element.residents);
    arrayAPI.sort((a, b) => {
      const negative = -1;
      if ((a.name) < (b.name)) return negative;
      return 0;
    });
    changePlanets(arrayAPI);
  };

  useEffect(() => {
    request();
  }, []);

  filter(planets, order);

  let filterAPI = planets.filter((planeta) => planeta.name.includes(filterByName));
  if (filterByNumber.length > 0) {
    filterByNumber.forEach((element) => {
      switch (element.inputCompasion) {
      case 'maior que':
        filterAPI = filterAPI
          .filter((e) => Number(e[element.inputColumn]) > Number(element.inputValues));
        break;
      case 'menor que':
        filterAPI = filterAPI
          .filter((e) => Number(e[element.inputColumn]) < Number(element.inputValues));
        break;
      case 'igual a':
        filterAPI = filterAPI
          .filter((e) => e[element.inputColumn] === element.inputValues);
        break;
      default:
        break;
      }
    });
  }
  const handleClick = () => {
    changeFilterByNumber({ inputColumn, inputCompasion, inputValues });
    const array = select.filter((element) => element !== inputColumn);
    changeSelect(array);
  };
  const removeButtonFilter = (ele) => {
    if (ele.target.id) {
      const newArray = filterByNumber.filter((e) => e.inputColumn !== ele.target.id);
      changeDelete(newArray);
    } else {
      changeDelete([]);
    }
  };

  return (
    <div>
      <h1>PROJETO STAR-WARS</h1>
      <label htmlFor="input">
        <input
          type="text"
          data-testid="name-filter"
          id="input"
          name="description"
          value={ filterByName }
          onChange={ ({ target }) => changeFilterByName(target.value) }
        />
      </label>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>climate</th>
            <th>created</th>
            <th>diameter</th>
            <th>edited</th>
            <th>films</th>
            <th>gravity</th>
            <th>orbital_period</th>
            <th>population</th>
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>url</th>
            <th>terrain</th>
          </tr>
        </thead>
        <label htmlFor="method-input">
          Column
          <select
            name="method"
            id="method-input"
            value={ inputColumn }
            data-testid="column-filter"
            onChange={ ({ target }) => setinputColumn(target.value) }
          >
            {select.map((element) => (
              <option value={ element } key={ element }>{element}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          Comparison
          <select
            name="method"
            id="method-input"
            data-testid="comparison-filter"
            onChange={ ({ target }) => setinputCompasion(target.value) }
            value={ inputCompasion }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="description-input">
          filtro numeros
          <input
            type="number"
            data-testid="value-filter"
            id="description-input"
            name="description"
            value={ inputValues || 0 }
            onChange={ ({ target }) => setInputValues(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          name="input-button"
          id="input-button"
          onClick={ handleClick }
        >
          filtrar
        </button>
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ removeButtonFilter }
        >
          Remover Filtros
        </button>
        <label htmlFor="order-input">
          Order By
          <select
            name="order"
            id="order-input"
            data-testid="column-sort"
            onChange={ ({ target }) => setInputColumn1(target.value) }
          >
            {select.map((element) => (
              <option
                value={ element }
                key={ element }
              >
                {element}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="radio">
          <input
            type="radio"
            id="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
            onClick={ ({ target }) => setInputRadio(target.value) }
          />
          ASC
        </label>
        <label htmlFor="radio">
          <input
            type="radio"
            id="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
            onClick={ ({ target }) => setInputRadio(target.value) }
          />
          DESC
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => changeOrder({
            column: inputColumn1,
            sort: inputRadio,
          }) }
        >
          Order
        </button>
        {(filterByNumber.map((element) => (
          <div key={ element.inputColumn } data-testid="filter">
            {`${element.inputColumn} ${element.inputCompasion} ${element.inputValues}`}
            <button
              type="button"
              id={ element.inputColumn }
              onClick={ removeButtonFilter }
            >
              X
            </button>
          </div>)))}

        <tbody>
          {planets.length > 0 && filterAPI.map((el) => (
            <tr key={ el.name }>
              <td data-testid="planet-name">{el.name}</td>
              <td>{el.climate}</td>
              <td>{el.created}</td>
              <td>{el.diameter}</td>
              <td>{el.edited}</td>
              <td>{el.films}</td>
              <td>{el.gravity}</td>
              <td>{el.orbital_period}</td>
              <td>{el.population}</td>
              <td>{el.rotation_period}</td>
              <td>{el.surface_water}</td>
              <td>{el.url}</td>
              <td>{el.terrain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Component;
