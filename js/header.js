var Header = (function() {
    
    function headerLinkClicks(evt){
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        var url = $(evt.target).attr("href");

        $.ajax(url, {
                dataType: "text"
            })
            .then(function (contents) {
                $modal.html(contents).show();
            });
    }
    
    function init(){
        $modal = $("[rel='js-modal']");
        $("[rel='js-controls']").on("click", "[rel*='js-']", headerLinkClicks); 
    }
    
    var $modal;
    
    EVT.on("init", init);
    
    return{
        init: init
    }

})();


/*how to deal with spaggeti code*/

/*(function(global, $){
now we can use $ for any jquery function
    98 private
    
    global.foo = foo;
    global.bar = bar;
    
})(window, jQuery);*/

/*
function foo(o){
    console.log(o.name); prints "kale"
}
foo({ name : "kale" });

*/