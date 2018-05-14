import * as timo from  './action-type'

let defaultState =  [
    {
        startStar: 1,
        sleep: 2
    }, {
        startStar: 2,
        sleep: 3
    }
]

let defaultStateUser = {
    name: 'Uni',
    alias: '白面葫芦娃'
}

export const records = (state = defaultState, action = {}) => {
    switch (action.type) {
        case timo.ADD_RECORD : 
            return [...state, {startStar: action.startStar, sleep: action.sleep}]
        default :
            return state
    }
}

export const user = (state = defaultStateUser, action = {}) => {
    return state
}

export const wrappedReduer = (name) => {
    return (state = defaultState, action = {}) => {
        return state
    }
}