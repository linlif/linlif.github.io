//
// $(document).ready(function() {
// 			$('#fullpage').fullpage({
// 				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
// 				// anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
// 				menu: '#menu',
// 				scrollingSpeed: 800
// 			});
// 		});


$(function(){
    var $mlNav = $('.ml-nav');
    $('#fullpage').fullpage({
        verticalCentered: false,
        navigation: true,
        menu:'#menu',
        anchors:["header","page1","page2","page3","page4","page5","page6","page7","page8","page9","footer"],
        css3:true,
        showActiveTooltip:["header","page1","page2","page3","page4","page5","page6","page7","page8","page9","footer"],
        onLeave: function(index, nextIndex, direction){
            if(index == 2 && direction == 'up'){
                $mlNav.animate({
                    top: 80
                }, 680);
            } else if(index == 1 && direction == 'down') {
                $mlNav.animate({
                    top: 0
                }, 400);
            } else if(index == 3 && direction == 'up') {
                $mlNav.animate({
                    top: 0
                }, 500);
            } else {
                $mlNav.animate({
                    top: -66
                }, 400);
            }
        }
    });
});
