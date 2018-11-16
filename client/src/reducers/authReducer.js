const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  // using switch for testing
  switch (action.type) {
    default:
      return state;
  }
}
