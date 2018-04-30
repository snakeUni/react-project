package com.timo.react.serviceImpl;

import com.timo.react.pojo.TimoRewardRecordPojo;
import com.timo.react.repository.TimoRewardRecordRepo;
import com.timo.react.service.TimoRewardRecordService;
import com.timo.react.utils.BeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Uni on 2018/4/30.
 */
@Service
public class TimoRewardRecordServiceImpl implements TimoRewardRecordService{

    @Autowired
    private TimoRewardRecordRepo timoRewardRecordRepo;

    @Override
    public List<TimoRewardRecordPojo> getRewardRecordsByUserId(Long userId) {
        return BeanMapper.mapList(timoRewardRecordRepo.findByUserId(userId), TimoRewardRecordPojo.class);
    }
}
