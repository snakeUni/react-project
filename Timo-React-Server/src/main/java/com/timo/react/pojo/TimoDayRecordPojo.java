package com.timo.react.pojo;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by Uni on 2018/4/30.
 */
@Getter
@Setter
public class TimoDayRecordPojo extends BasePojo {

    private int happy;      //不生气

    private int sleep;      //准时睡觉

    private int study;      //准时学习

    private int primaryStar;    //初始

    private int rewardOther;     //额外奖励

    private int other;      //其他

    private Long userId;    //用户id

}
