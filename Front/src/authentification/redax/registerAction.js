import axios from 'axios'

export const register = (user) => {

    console.log(user)

    return async (dispatch) => {

        dispatch({type:  "USER_REGISTER_REQUEST"});
        const res = await axios.post('http://localhost:3003/frip/user/register', {
           ...user
        });

        if(res.status === 201){
            const { message } = res.data;
            dispatch({
                type: "REGISTER_SUCCED",
                payload: {message}
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: "USER_REGISTER_FAILURE",
                    payload: { error: res.data.error }
                });
            }
        }
    }
}