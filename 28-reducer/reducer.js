const initialState = []

function reducer(state, action) {
    if (action.type === 'ADD_NAME') {
        return [...state, action.payload]
    }
    if (action.type === 'DELETE_NAME') {
        return state.filter(personName => personName !== action.payload);
    }
    return state
}

let newState = reducer(initialState, { type: 'ADD_NAME', payload: 'DarLa' })

console.log(newState);

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Sasha' });

console.log(newState);

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Kate' });

console.log(newState);

newState = reducer(newState, { type: 'DELETE_NAME', payload: 'Kate' });

console.log(newState);