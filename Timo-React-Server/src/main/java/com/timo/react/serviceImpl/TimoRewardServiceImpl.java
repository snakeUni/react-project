package com.timo.react.serviceImpl;

import com.timo.react.pojo.TimoRewardPojo;
import com.timo.react.repository.TimoRewardRepo;
import com.timo.react.service.TimoRewardService;
import com.timo.react.utils.BeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Uni on 2018/4/30.
 */
@Service
public class TimoRewardServiceImpl implements TimoRewardService{

    @Autowired
    private TimoRewardRepo timoRewardRepo;


    @Override
    public List<TimoRewardPojo> getRewards() {
        return BeanMapper.mapList(timoRewardRepo.findAll(), TimoRewardPojo.class);
    }
}
