import axios from 'axios';
import {
  RECRUIT_LOADED,
  RECRUIT_ERROR,
  SOURCE_LOADED,
  SOURCE_ERROR
} from './types';

// Get current recruiting
export const getCurrentRecruit = () => async dispatch => {
  try {
    const res = await axios.get(
      'https://raw.githubusercontent.com/frank-mendez/empower/master/src/recruiting.json'
    );
    dispatch({
      type: RECRUIT_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RECRUIT_ERROR,
      payload: { msg: 'Recruit Error' }
    });
  }
};
