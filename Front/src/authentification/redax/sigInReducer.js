const inisialState = {
    token: {
      _id: "",
      
      fullName: "",
    
      photo: "",
      phone: "",
      email: "",
    },
    authenticate: false,
    authenticating: false,
  };
  
  export const signInReducer = (state = inisialState, action) => {
    switch (action.type) {
      case " LOGIN_FAILED":
        state = {
          ...state,
          authenticating: false,
        };
        break;
      case "LOGIN_SUCCESS":
        state = {
          ...state,
  
          token: action.payload.token,
          authenticate: true,
        };
  
        break;
  
      case "LOGOUT_SUCCESS":
        state = {
          ...inisialState,
        };
        break;
  
      default:
    }
  
    return state;
  };