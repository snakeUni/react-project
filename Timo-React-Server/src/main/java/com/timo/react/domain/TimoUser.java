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
@Table(name = "TIMO_USER")
public class TimoUser extends BaseEntity {

    private String username;    //用户名

    private String password;    //密码

    private String tellphone;   //手机号

    private int sex;            //性别    1:男性 2:女性 0:未知


}
