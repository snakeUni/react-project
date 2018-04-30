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
@Table(name = "TIMO_REWARD")
public class TimoReward extends BaseEntity {

    private String name;        //奖品名称

    private int total;          //奖品总数量

    private int remain;         //奖品剩余数量

    private int unitPrice;      //奖品单价

}
