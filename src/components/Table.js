import React, { useContext } from 'react';
import MyContext from '../context/Context';
// import data from '../services/data';

function Component() {
  const { data } = useContext(MyContext);
  const arrayAPI = data.filter((element) => delete element.residents);
  console.log(arrayAPI);
  return (
    <div>
      <h1>PROJETO STAR-WARS</h1>
      <label htmlFor="input">
        <input
          type="text"
          data-testid="input"
          id="input"
          name="description"
          // value={ description }
          // onChange={ this.handleChange }
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
        <tbody>
          {data.map((el) => (
            <tr key={ el.name }>
              <td>{el.name}</td>
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
