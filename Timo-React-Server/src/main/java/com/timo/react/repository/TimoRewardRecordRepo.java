package com.timo.react.repository;

import com.timo.react.domain.TimoRewardRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Uni on 2018/4/30.
 */
@Repository
public interface TimoRewardRecordRepo extends JpaRepository<TimoRewardRecord, Long> {

    /**
     * 获取兑换记录根据用户id
     * @param usedId
     * @return
     */
    List<TimoRewardRecord> findByUserId(Long usedId);

}
