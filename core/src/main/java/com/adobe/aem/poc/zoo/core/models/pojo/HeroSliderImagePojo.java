package com.adobe.aem.poc.zoo.core.models.pojo;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.List;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class HeroSliderImagePojo {

    @ValueMapValue(name = "heroImage")
    private String heroImage;

    @ValueMapValue(name = "imageAltText")
    private String imageAltText;

    @ValueMapValue(name = "title")
    private String title;

    @ChildResource
    private List<HeroSliderLinksPojo> slideLinksList;

    public String getHeroImage() {
        return heroImage;
    }

    public String getImageAltText() {
        return imageAltText;
    }

    public String getTitle() {
        return title;
    }

    public List<HeroSliderLinksPojo> getSlideLinksList() {
        return slideLinksList;
    }
}
