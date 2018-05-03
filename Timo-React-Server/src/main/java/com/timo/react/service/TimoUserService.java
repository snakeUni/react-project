package com.timo.react.service;

import com.timo.react.domain.TimoUser;
import com.timo.react.pojo.TimoUserPojo;

/**
 * Created by Uni on 2018/4/30.
 */
public interface TimoUserService {

    /**
     * 通过用户id查找
     * @param userId
     * @return
     */
    TimoUserPojo getUserById(Long userId);

    /**
     * 通过手机号查找
     * @param phone
     * @return
     */
    TimoUserPojo getUserByPhone(String phone);

    /**
     * 通过用户名查找
     * @param username
     * @return
     */
    TimoUser getUserByUsername(String username);

    /**
     * 通过用户名密码查找
     * @param username
     * @param password
     * @return
     */
    TimoUser getUserByUsernameAndPassword(String username, String password);

    /**
     * 保存新的用户
     * @param user
     * @return
     */
    TimoUser save(TimoUser user);

}
