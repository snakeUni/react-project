package com.timo.react.pojo;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by Uni on 2018/4/30.
 */
@Getter
@Setter
public class TimoUserPojo extends BasePojo {

    private String username;    //用户名

    private String password;    //密码

    private String tellphone;   //手机号

    private int sex;            //性别    1:男性 2:女性 0:未知

}
