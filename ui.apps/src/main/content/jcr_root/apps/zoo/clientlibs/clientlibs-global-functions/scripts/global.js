(function(document, window, $) {
    //want to test and achieve the use of the foundation registry adaptor.
    let $window = $(window);
    let multifield = ".limit-multifield-items";

    let registry = $window.adaptTo("foundation-registry");

    registry.register("foundation.adapters", {
            type: "limit-multifield",
            selector: "coral-multifield", //this selector is in reference to the literal element <coral-multifield></coral-multifield>
            adapter: function(el) {
                let $multifield = $(el);
                let $addButton = $multifield.children('._coral-Button._coral-Button--primary');
                console.log("successfully adapted the object");
                return {
                    //exposes "limit-multifield" APIs of "coral-multifield" literal element
                    callConsole: function() {
                        console.log("successfully called the callConsole API");
                        return;
                    },
                    disableAdd: function(disabled) {
                        $addButton.attr('disabled', disabled);
                    }
                }
            }
    });

    registry.register("foundation.validation.validator", {
        selector: "coral-multifield",
        validate: function(el) {
            let $this = $(el);
            let limitMultifield = $this.adaptTo("limit-multifield");

            let totalPanels = el.items.length;
            let min;
            let max;

            if ($this.data("min-item")){
                min = $this.data("min-item");
                if(totalPanels < min) {
                    return "Minimum numbers of items required are: " + min;
                }
            }
            if ($this.data("max-item")){
                max = $this.data("max-item");
                limitMultifield.disableAdd(false);
                if(totalPanels >= max) {
                    limitMultifield.callConsole();
                    limitMultifield.disableAdd(true);
                    return "Maximum numbers of items allowed are: " + max;
                }
            }
        }
    });



})(document, window, Granite.$);
