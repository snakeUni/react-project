package com.timo.react.service;

import com.timo.react.pojo.TimoChannelPojo;

import java.util.List;

/**
 * Created by Uni on 2018/5/2.
 */
public interface TimoChannelService {

    List<TimoChannelPojo> getChannel(String keyword);

}
