package com.timo.react.repository;

import com.timo.react.domain.TimoChannel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Uni on 2018/5/2.
 */
@Repository
public interface TimoChannelRepo extends JpaRepository<TimoChannel, Long>{

    /**
     * 根据关键词查询
     * @param keyword
     * @return
     */
    List<TimoChannel> findByKeyword(String keyword);

}
