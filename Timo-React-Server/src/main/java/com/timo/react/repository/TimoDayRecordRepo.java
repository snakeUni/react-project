package com.timo.react.repository;

import com.timo.react.domain.TimoDayRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Uni on 2018/4/30.
 */
@Repository
public interface TimoDayRecordRepo extends JpaRepository<TimoDayRecord, Long>{

    /**
     * 根据用户id查找出所有的每日添加记录信息
     * @param userId
     * @return
     */
    List<TimoDayRecord> findByUserId(Long userId);

}
