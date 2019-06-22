
$("document").ready(function(){
    uiFixer()
})

$(window).resize(function(){
    uiFixer()
})

$("#content").click(function(){
    uiFixer()
})

function uiFixer(){
    var windowHeight = $(window).height();
    console.log(windowHeight);
    $("#leftSidebar").height(windowHeight);
    $("#input-hosts").height(windowHeight-30)

}