$("document").ready(function() {
    // bomb for red warnings
    $("div.ui.negative.message > div.header").each(function() {
        var icon = $("<i>", {"class": "icon fa-solid fa-bomb"});
        this.prepend(icon);
    });
    
    // danger for yellow warnings
    $("div.ui.warning.message > div.header").each(function() {
        var icon = $("<i>", {"class": "icon fa-solid fa-exclamation-triangle"});
        this.prepend(icon);
    });
    
    // good for green warnings
    $("div.ui.positive.message").each(function() {
        var icon = $("<i>", {"class": "icon fa-solid fa-exclamation-triangle"});
        var icon1 = '<i class="icon fa-solid fa-exclamation-triangle"></i>'
        this.prepend(icon);
    });
});
