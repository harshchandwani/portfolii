$(document).ready(function () {
    var counter = 0; // Start from 0 to match array indices
    
    setInterval(function () {
        // Hide all slides
        $(".slide").hide();

        // Increment counter and reset if it reaches the end
        counter++;
        if (counter == $(".slide").length) {
            counter = 0;
        }

        // Show the current slide
        $(".slide").eq(counter).show();
    }, 4000);
});
