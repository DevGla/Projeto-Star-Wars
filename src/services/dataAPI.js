const dataAPI = async () => {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const result = await response.json();
    return result.results;
  } catch (error) {
    return error;
  }
};

export default dataAPI;
