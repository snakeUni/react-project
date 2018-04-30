package com.timo.react.pojo;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by Uni on 2018/4/30.
 */
@Getter
@Setter
public class TimoRewardPojo extends BasePojo {

    private String name;        //奖品名称

    private int total;          //奖品总数量

    private int remain;         //奖品剩余数量

    private int unitPrice;      //奖品单价

}
