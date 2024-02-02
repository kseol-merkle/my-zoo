package com.adobe.aem.poc.zoo.core.models;

import com.adobe.aem.poc.zoo.core.models.pojo.HeroSliderImagePojo;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

import java.util.List;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class HeroSliderModel {
    @ChildResource
    private List<HeroSliderImagePojo> heroSliderList;

    public List<HeroSliderImagePojo> getHeroSliderList() {
        return heroSliderList;
    }
}
