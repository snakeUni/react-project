package com.timo.react.service;

import com.timo.react.pojo.TimoRewardRecordPojo;

import java.util.List;

/**
 * Created by Uni on 2018/4/30.
 */
public interface TimoRewardRecordService {

    List<TimoRewardRecordPojo> getRewardRecordsByUserId(Long userId);

}
