(function(document, window, $) {
    //want to test and achieve the use of the foundation registry adaptor.
    let $window = $(window);
    let multifield = ".limit-multifield-items";

    let registry = $window.adaptTo("foundation-registry");
    if(registry != null || registry != undefined) {
        registry.register("foundation.adapters", {
            type: "test-adapt",
            selector: "coral-multifield",
            adapter: function(el) {
                let $multifield = $(el);
                let $addButton = $multifield.children('._coral-Button._coral-Button--primary');
                console.log("successfully adapted the object");
                return {
                    callConsole: function() {
                        console.log("successfully called the callConsole API");
                        return;
                    },
                    disableAdd: function(disabled) {
                        //let $addButton = $multifield.children('.coral-Multifield-add');
                        $addButton.attr('disabled', disabled);
                    }
                }
            }
        });
    }

    $.validator.register("foundation.validation.validator", {
        selector: "coral-multifield",
        validate: function(el) {
            var $this = $(el);
            var totalPanels = el["0"].items.getAll().length;
            var min;
            var max;
            let testAdapt = $this.adaptTo("test-adapt");
            if ($this.data("min-item")){
                min = $this.data("min-item");
                if(totalPanels < min) {
                    return "Minimum numbers of items required are: " + min;
                }
            }
            if ($this.data("max-item")){
                max = $this.data("max-item");
                if(totalPanels >= max) {
                    testAdapt.callConsole();
                    testAdapt.disableAdd(true);
                    return "Maximum numbers of items allowed are: " + max;
                }
            }

        }
    });

})(document, window, Granite.$);
