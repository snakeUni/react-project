package com.timo.react.service;

import com.timo.react.domain.TimoDayRecord;
import com.timo.react.pojo.TimoDayRecordPojo;

import java.util.List;

/**
 * Created by Uni on 2018/4/30.
 */
public interface TimoDayRecordService {

    List<TimoDayRecordPojo> getRecordsByUserId(Long userId);

    /**
     * 新增记录
     */
    TimoDayRecord saveRecord(TimoDayRecord timoDayRecord);

}
