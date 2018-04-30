package com.timo.react.repository;

import com.timo.react.domain.TimoUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Uni on 2018/4/30.
 */
@Repository
public interface TimoUserRepo extends JpaRepository<TimoUser, Long>{

    /**
     * 根据手机号查询
     * @param tellphone
     * @return
     */
    TimoUser findByTellphone(String tellphone);

    /**
     * 根据用户名查找
     * @param username
     * @return
     */
    TimoUser findByUsername(String username);

}
