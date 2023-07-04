import axios from 'axios';

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_DATA_FAILURE',
          payload: error.message,
        });
      });
  };
};
