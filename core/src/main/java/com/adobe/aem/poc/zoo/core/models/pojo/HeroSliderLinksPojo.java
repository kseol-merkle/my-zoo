package com.adobe.aem.poc.zoo.core.models.pojo;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class HeroSliderLinksPojo {

    @ValueMapValue(name = "text")
    private String linkText;

    @ValueMapValue(name = "path")
    private String linkPath;

    public String getLinkText() {
        return linkText;
    }

    public String getLinkPath() {
        return linkPath;
    }
}
