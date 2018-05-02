package com.timo.react.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Uni on 2018/5/2.
 */
@Getter
@Setter
@Entity
@Table(name = "TIMO_CHANNEL")
public class TimoChannel extends BaseEntity {

    private String name;            //频道名称

    private String keyword;             //关键词用来url导航

    private String toUrl;              //对应页面的url

    private String imgPath;         //图片路径

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "parent", fetch = FetchType.EAGER)
    private List<TimoChannel> children;     //对应频道下的子频道

    @JsonBackReference
    @ManyToOne()
    @JoinColumn(name = "parentId")
    private TimoChannel parent;

}
