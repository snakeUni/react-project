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
     * 根据userId查找
     * @param userId
     * @return
     */
    TimoUser findOne(Long userId);

    /**
     * 根据手机号查询
     * @param tellphone
     * @return
     */
    TimoUser findByTellphone(String tellphone);

}
