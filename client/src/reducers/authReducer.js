const initialState = {
  isAuthentticated: false,
  user: {},
  hello: 'testing state'
};

export default function(state = initialState, action) {
  // using switch for testing
  switch (action.type) {
    default:
      return state;
  }
}
