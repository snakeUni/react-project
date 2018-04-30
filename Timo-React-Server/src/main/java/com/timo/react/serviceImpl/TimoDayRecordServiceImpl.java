package com.timo.react.serviceImpl;

import com.timo.react.pojo.TimoDayRecordPojo;
import com.timo.react.repository.TimoDayRecordRepo;
import com.timo.react.service.TimoDayRecordService;
import com.timo.react.utils.BeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Uni on 2018/4/30.
 */
@Service
public class TimoDayRecordServiceImpl implements TimoDayRecordService{

    @Autowired
    private TimoDayRecordRepo timoDayRecordRepo;

    @Override
    public List<TimoDayRecordPojo> getRecordsByUserId(Long userId) {
        return BeanMapper.mapList(timoDayRecordRepo.findByUserId(userId), TimoDayRecordPojo.class);
    }

}
