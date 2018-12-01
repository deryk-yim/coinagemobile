const LOGIN = 'koinij/profile/LOGIN';
const LOGOUT = 'koinij/profile/LOGOUT';
const UPDATE = 'koinij/profile/UPDATE';

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign(
        {},
        this.state,
        { profile: action.value },
      );
    case LOGOUT:
      return Object.assign(
        {},
        this.state,
        { profile: {} },
      );
    case UPDATE:
      return Object.assign(
        {},
        this.state,
        { profile: action.value },
      );
    default: return state;
  }
};

export const login = profile => ({
  type: LOGIN,
  payload: profile,
});

export const logout = () => ({
  type: LOGOUT,
});

export const update = profile => ({
  type: UPDATE,
  payload: profile,
});

/*
thunk, epics example
export function getWidget() {
  return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
}
*/

export default reducer;
