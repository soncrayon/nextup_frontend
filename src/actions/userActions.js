export const createUserAccount = (user) => {
    return (dispatch) => {
        dispatch({type: 'CREATING_USER_ACCOUNT'});
        fetch('https://localhost:3001/users', {
            method: 'POST',
            body: JSON.stringify({user}),
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.status === 'created') {
                    return dispatch({type: 'ACCOUNT_CREATED', payload: resp})
                }
                return dispatch({type: 'ACCOUNT_CREATION_FAILED', payload: resp})
            })
    }
}