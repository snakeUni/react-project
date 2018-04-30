package com.timo.react.serviceImpl;

import com.timo.react.pojo.TimoUserPojo;
import com.timo.react.repository.TimoUserRepo;
import com.timo.react.service.TimoUserService;
import com.timo.react.utils.BeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Uni on 2018/4/30.
 */
@Service
public class TimoUserServiceImpl implements TimoUserService {

    @Autowired
    private TimoUserRepo timoUserRepo;

    @Override
    public TimoUserPojo getUserById(Long userId) {
        return null;
    }

    @Override
    public TimoUserPojo getUserByPhone(String phone) {
        return BeanMapper.map(timoUserRepo.findByTellphone(phone), TimoUserPojo.class);
    }

    @Override
    public TimoUserPojo getUserByUsername(String username) {
        return BeanMapper.map(timoUserRepo.findByUsername(username), TimoUserPojo.class);
    }

}
