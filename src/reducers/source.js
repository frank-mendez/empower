import {
  RECRUIT_LOADED,
  RECRUIT_ERROR,
  SOURCE_LOADED,
  SOURCE_ERROR
} from '../actions/types';

const initialState = {
  recruits: [],
  error: {},
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RECRUIT_LOADED:
      return {
        ...state,
        recruits: payload,
        loading: false
      };
    case RECRUIT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
