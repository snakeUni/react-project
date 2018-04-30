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
@Table(name = "TIMO_REWARD_RECORD")
public class TimoRewardRecord extends BaseEntity {

    private String rewardName;  //奖品名称

    private int rewardNumber;   //兑换数量

    private int usedStar;       //消耗的星星

    private Long userId;        //用户id

    private Long rewardId;      //奖品id

}
