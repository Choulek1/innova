const statez = {
    token: {
      message: "",
    },
    authenticate: false,
    authenticating: false,
  };
  
  export const registerReducer = (state = statez, action) => {
    const { type, payload } = action;
    switch (type) {
      case "USER_REGISTER_REQUEST":
        state = {
          ...state,
          loading: true,
        };
        break;
      case "REGISTER_SUCCED":
        return {
          ...state,
          token: [state.token, payload.message],
          authenticate: true,
        };
  
  
      case "USER_REGISTER_FAILURE":
        state = {
          ...state,
          loading: false,
          error: action.payload.error,
        };
        break;
    }
  
    return state;
  };