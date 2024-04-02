console.log("showhide")

$(document).mousemove(function(e){
    $("#cursor-circle").css({
        "top":e.clientY,
        "left":e.clientX
    }) 

})

$(document).ready(function() {
    $('.circle').hover(function() {
        // When a circle is hovered over, increase the size of the cursor circle
        $('.cursor-circle').css({
            'width': '60px',
            'height': '60px'
        });
    }, function() {
        // When the mouse leaves a circle, reset the size of the cursor circle
        $('.cursor-circle').css({
            'width': '60px',
            'height': '60px'
        });
    });
});

$(document).ready(function() {
    $('#circle2').hover(function() {
        // When a circle is hovered over, increase the size of the cursor circle
        $('.cursor-circle').css({
            'width': '90px',
            'height': '90px'
        });
    }, function() {
        // When the mouse leaves a circle, reset the size of the cursor circle
        $('.cursor-circle').css({
            'width': '150px',
            'height': '150px'
        });
    });
});

$(document).ready(function() {
    $('#circle3').hover(function() {
        // When a circle is hovered over, increase the size of the cursor circle
        $('.cursor-circle').css({
            'width': '200px',
            'height': '200px'
        });
    }, function() {
        // When the mouse leaves a circle, reset the size of the cursor circle
        $('.cursor-circle').css({
            'width': '200px',
            'height': '200px'
        });
    });
});

$(document).ready(function() {
    $('#circle4').hover(function() {
        // When a circle is hovered over, increase the size of the cursor circle
        $('.cursor-circle').css({
            'width': '350px',
            'height': '350px'
        });
    }, function() {
        // When the mouse leaves a circle, reset the size of the cursor circle
        $('.cursor-circle').css({
            'width': '350px',
            'height': '350px'
        });
    });
});

$(document).ready(function() {
    $('#circle5').hover(function() {
        // When a circle is hovered over, increase the size of the cursor circle
        $('.cursor-circle').css({
            'width': '1000px',
            'height': '1000px'
        });
    }, function() {
        // When the mouse leaves a circle, reset the size of the cursor circle
        $('.cursor-circle').css({
            'width': '1000px',
            'height': '1000px'
        });
    });
});


