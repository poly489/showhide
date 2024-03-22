console.log("showhide")

$(document).mousemove(function(e){
    $("#cursor-circle").css({
        "top":e.clientY,
        "left":e.clientX
    }) 

})

$(document).ready(function() {
    const $circle = $('#cursor-circle');

    // Function to change circle size on scroll wheel
    function changeCircleSize(event) {
        const delta = event.originalEvent.deltaY; // Get the scroll delta
        
        // Calculate the change in size based on the scroll direction
        const newSize = $circle.width() + (delta > 0 ? -50 : 50); // Decrease size on scroll down, increase on scroll up
        
        // Set the new size to the circle
        $circle.css({
            'width': newSize + 'px',
            'height': newSize + 'px'
        });
        
        // Prevent the default scroll behavior
        event.preventDefault();
    }

    // Add wheel event listener to change circle size
    $circle.on('wheel', changeCircleSize);
});
