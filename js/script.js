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
            'width': '150px',
            'height': '150px'
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
            'width': '250px',
            'height': '250px'
        });
    }, function() {
        // When the mouse leaves a circle, reset the size of the cursor circle
        $('.cursor-circle').css({
            'width': '250px',
            'height': '250px'
        });
    });
});

$(document).ready(function() {
    $('#circle4').hover(function() {
        // When a circle is hovered over, increase the size of the cursor circle
        $('.cursor-circle').css({
            'width': '450px',
            'height': '450px'
        });
    }, function() {
        // When the mouse leaves a circle, reset the size of the cursor circle
        $('.cursor-circle').css({
            'width': '450px',
            'height': '450px'
        });
    });
});

$(document).ready(function() {
    $('#circle5').hover(function() {
        // When a circle is hovered over, increase the size of the cursor circle
        $('.cursor-circle').css({
            'width': '2000px',
            'height': '2000px'
        });
    }, function() {
        // When the mouse leaves a circle, reset the size of the cursor circle
        $('.cursor-circle').css({
            'width': '2000px',
            'height': '2000px'
        });
    });
});


