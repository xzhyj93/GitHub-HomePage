window.onload = function(){
    var collapseBtn = $("#collapse-btn");
    var navBar = $("#navbar");
    $(collapseBtn).click(function(){
        if(navBar.css("display").match("none")){
            console.log("aaa");
            navBar.css("display","block");
        } else {
            console.log("bbb");
            navBar.css("display","none");
        }
    });
}