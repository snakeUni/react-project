package com.timo.react.controller;

import com.timo.react.pojo.TimoDayRecordPojo;
import com.timo.react.service.TimoDayRecordService;
import com.timo.react.service.TimoRewardRecordService;
import com.timo.react.service.TimoRewardService;
import com.timo.react.utils.response.GetResponse;
import com.timo.react.utils.response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by Uni on 2018/4/30.
 */
@RestController
@RequestMapping("api/timo")
public class TimoApi {

    @Autowired
    private TimoDayRecordService timoDayRecordService;
    @Autowired
    private TimoRewardRecordService timoRewardRecordService;
    @Autowired
    private TimoRewardService timoRewardService;

    @RequestMapping(value = "getdayrecord", method = RequestMethod.GET)
    public Response getDayRecord(HttpServletRequest request,
                                 @RequestParam(name = "userId") Long userId) {
        List<TimoDayRecordPojo> list = timoDayRecordService.getRecordsByUserId(userId);
        return new GetResponse("result", list);
    }

}
