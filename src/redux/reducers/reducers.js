import { combineReducers } from 'redux';

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return true;
    case 'FETCH_DATA_SUCCESS':
    case 'FETCH_DATA_FAILURE':
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_DATA_FAILURE':
      return action.payload;
    case 'FETCH_DATA_REQUEST':
    case 'FETCH_DATA_SUCCESS':
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default rootReducer;