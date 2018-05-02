package com.timo.react.pojo;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * Created by Uni on 2018/5/2.
 */
@Getter
@Setter
public class TimoChannelPojo extends BasePojo {

    private String name;            //频道名称

    private String keyword;             //关键词用来url导航

    private String toUrl;              //对应页面的url

    private String imgPath;         //图片路径

    private List<TimoChannelPojo> children;     //对应频道下的子频道

    private TimoChannelPojo parent;

}
