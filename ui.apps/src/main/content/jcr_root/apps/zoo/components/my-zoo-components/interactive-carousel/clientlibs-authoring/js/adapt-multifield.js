(function(document, window, $) {
    $(document).ready(function() {
        $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
            selector: multifield,
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
    });
})(document, window, Granite.$);