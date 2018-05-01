import TimoServer from './request'

class TimoApi extends TimoServer {
    constructor(props) {
        super(props);
    }

    /**
     * 获取用户信息api
     */
    async getUserInfo(params = {}) {
        let result = await this.axios('post', '/getUserInfo', params);
        if(result) {
            return result;
        }
    }

    async getRewards(params = {}) {
        let result = await this.axios('get', '/getRewards', params);
        return result;
    }
}

export default new TimoApi();