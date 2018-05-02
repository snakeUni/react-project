import TimoServer from './request'

class TimoApi extends TimoServer {
    constructor(props) {
        super(props);
    }

    /**
     * 获取用户信息api
     * @param {*} params 
     */
    async getUserInfo(params = {}) {
        let result = await this.axios('post', '/getUserInfo', params);
        if(result) {
            return result;
        }
    }

    /**
     * 获得所有奖品信息api
     * @param {*} params 
     */
    async getRewards(params = {}) {
        let result = await this.axios('get', '/getRewards', params);
        return result;
    }

    /**
     * 获取每日记录api
     * @param {*} params 
     */
    async getDayRecord( params = {} ) {
        let result = await this.axios('get', '/getdayrecord', params);
        return result;
    }

    /**
     * 增加每日记录api
     * @param {*} params 
     */
    async addDayRecord(params = {}) {
        let result = await this.axios('post', '/adddayrecord', params);
        return result;
    }

    /**
     * 获取所有记录api
     * @param {*} params 
     */
    async getRewardRecords(params = {}) {
        let result = await this.axios('get', '/getRewardRecords', params);
        return result;
    }
}

export default new TimoApi();