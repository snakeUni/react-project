package com.timo.react.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by Uni on 2018/4/28.
 */
@Getter
@Setter
@Entity
@Table(name = "TIMO_DAY_RECORD")
public class TimoDayRecord extends BaseEntity {

    private int happy;      //不生气

    private int sleep;      //准时睡觉

    private int study;      //准时学习

    private int primaryStar;    //初始

    private int rewardOther;     //额外奖励

    private int other;      //其他

    private Long userId;    //用户id

}
