import * as action from './action-type'

export const getRecord = (records) => {
    return {
        type: action.GET_RECORD,
        records
    }
}

export const addRecord = (record) => {
    return {
        type: action.ADD_RECORD,
        record
    }
}

export const getRewards = (rewards) => {
    return {
        type: action.GET_REWARDS,
        rewards
    }
}

export const getUserInfo = (user) => {
    return {
        type: action.GET_USERINFO,
        user
    }
}

export const getChannel = (channels) => {
    return {
        type: action.GET_CHANNEL,
        channels
    }
}

export const registerUser = (user) => {
    return {
        type: action.REGISTER_USER,
        user
    }
}