package com.timo.react.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by Uni on 2018/4/28.
 */
@Getter
@Setter
@MappedSuperclass
public abstract class BaseEntity implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;                                      // 实体id

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdTime;                             // 新建时间

    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedTime;                             // 最后更新时间

    private Long createdByUserId;                         // 新建用户id

    private String createdByUsername;                     // 新建用户名称

    private Long updatedByUserId;                         // 最后更新用户id

    private String updatedByUsername;                     // 最后更新用户名称

    public BaseEntity() {
        this.createdTime = new Date();
    }

}
