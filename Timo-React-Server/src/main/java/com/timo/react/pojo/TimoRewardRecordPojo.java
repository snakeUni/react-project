package com.timo.react.pojo;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by Uni on 2018/4/30.
 */
@Getter
@Setter
public class TimoRewardRecordPojo extends BasePojo {

    private String rewardName;  //奖品名称

    private int rewardNumber;   //兑换数量

    private int usedStar;       //消耗的星星

    private Long userId;        //用户id

    private Long rewardId;      //奖品id

}
