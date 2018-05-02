package com.timo.react.serviceImpl;

import com.timo.react.pojo.TimoChannelPojo;
import com.timo.react.repository.TimoChannelRepo;
import com.timo.react.service.TimoChannelService;
import com.timo.react.utils.BeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Uni on 2018/5/2.
 */
@Service
public class TimoChannelServiceImpl implements TimoChannelService{

    @Autowired
    private TimoChannelRepo timoChannelRepo;

    @Override
    public List<TimoChannelPojo> getChannel(String keyword) {
        return BeanMapper.mapList(timoChannelRepo.findByKeyword(keyword), TimoChannelPojo.class);
    }
}
