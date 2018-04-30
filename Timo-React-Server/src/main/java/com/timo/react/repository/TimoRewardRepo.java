package com.timo.react.repository;

import com.timo.react.domain.TimoReward;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Uni on 2018/4/30.
 */
@Repository
public interface TimoRewardRepo extends JpaRepository<TimoReward, Long> {

    /**
     * 获得所有奖品信息
     * @return
     */
    List<TimoReward> findAll();

}
