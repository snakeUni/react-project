import * as action from  './action-type'

let defaultState = {
    user: {
        name: 'Uni',
        password: '123456'
    },
    records: [
        {
            startStar: 1,
            sleep: 2
        }, {
            startStar: 2,
            sleep: 3
        }
    ]
}

export const getRecordReducer = (state = defaultState, action = {}) => {
    return {...state}
}

export const wrappedReduer = (name) => {
    return (state = defaultState, action = {}) => {
        return {...state}
    }
}