package com.timo.react.controller;

import com.timo.react.domain.TimoDayRecord;
import com.timo.react.domain.TimoUser;
import com.timo.react.pojo.*;
import com.timo.react.service.*;
import com.timo.react.utils.response.GetResponse;
import com.timo.react.utils.response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by Uni on 2018/4/30.
 */
@RestController
@RequestMapping("api/timo")
public class TimoApi {

    @Autowired
    private TimoRewardRecordService timoRewardRecordService;
    @Autowired
    private TimoRewardService timoRewardService;
    @Autowired
    private TimoDayRecordService timoDayRecordService;
    @Autowired
    private TimoUserService timoUserService;
    @Autowired
    private TimoChannelService timoChannelService;

    /**
     * 获取每天记录api
     * @param request
     * @param userId
     * @return
     */
    @RequestMapping(value = "getdayrecord", method = RequestMethod.GET)
    public Response getDayRecord(HttpServletRequest request,
                                 @RequestParam(name = "userId") Long userId) {
        List<TimoDayRecordPojo> list = timoDayRecordService.getRecordsByUserId(userId);
        return new GetResponse("result", list);
    }

    /**
     * 增加每日记录api
     * @param request
     * @param timoDayRecordPojo
     * @return
     */
    @RequestMapping(value = "adddayrecord", method = RequestMethod.POST)
    public Response addDayRecord(HttpServletRequest request,
                                 @RequestBody TimoDayRecordPojo timoDayRecordPojo) {
        TimoDayRecord timoDayRecord = new TimoDayRecord();
        timoDayRecord.setHappy(timoDayRecordPojo.getHappy());
        timoDayRecord.setOther(timoDayRecordPojo.getOther());
        timoDayRecord.setPrimaryStar(timoDayRecordPojo.getPrimaryStar());
        timoDayRecord.setRewardOther(timoDayRecordPojo.getRewardOther());
        timoDayRecord.setSleep(timoDayRecordPojo.getSleep());
        timoDayRecord.setStudy(timoDayRecordPojo.getStudy());
        timoDayRecord.setUserId(timoDayRecordPojo.getUserId());
        TimoDayRecord timoDayRecord1 =  timoDayRecordService.saveRecord(timoDayRecord);
        if(timoDayRecord1 != null) {
            return new GetResponse("result", "success");
        } else {
            return new GetResponse("result", "fail");
        }
    }

    /**
     * 获取所有奖品信息api
     * @param request
     * @return
     */
    @RequestMapping(value = "getRewards", method = RequestMethod.GET)
    public Response getRewards(HttpServletRequest request) {
        List<TimoRewardPojo> list = timoRewardService.getRewards();
        return new GetResponse("result", list);
    }

    /**
     * 获取兑换奖品信息api
     * @param request
     * @param userId
     * @return
     */
    @RequestMapping(value = "getRewardRecords", method = RequestMethod.GET)
    public Response getRewardRecords(HttpServletRequest request,
                                     @RequestParam(name = "userId") Long userId) {
        List<TimoRewardRecordPojo> list = timoRewardRecordService.getRewardRecordsByUserId(userId);
        return new GetResponse("result", list);
    }

    /**
     * 获取用户信息api
     * @param request
     * @param timoUserPojo
     * @return
     */
    @RequestMapping(value = "getUserInfo", method = RequestMethod.POST)
    public Response getUserInfo(HttpServletRequest request,
                                @RequestBody TimoUserPojo timoUserPojo) {
        TimoUser timoUser = timoUserService.getUserByUsernameAndPassword(timoUserPojo.getUsername(), timoUserPojo.getPassword());
        if(timoUser != null) {
            return new GetResponse("result", timoUser);
        } else {
            return new GetResponse("result", "");
        }
    }

    @RequestMapping(value = "getChannel", method = RequestMethod.GET)
    public Response getChannel(HttpServletRequest request) {
        String keyword = "root";
        List<TimoChannelPojo> list = timoChannelService.getChannel(keyword);
        return new GetResponse("result", list);
    }
}
