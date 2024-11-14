$(document).ready(function() {
    // Open Modal on Enroll Now button click
    $("#enrollNow").click(function() {
        $("#enrollModal").modal('show');
    });

    // Form submission handling
    $("#enrollForm").submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        let name = $("#name").val();
        let course = $("#course").val();
        let referral = $("#referral").val();

        if (name && course) {
            alert(`Enrollment Successful!\nName: ${name}\nCourse: ${course}\nReferral: ${referral ? referral : 'None'}`);
            $("#enrollModal").modal('hide');
            $("#enrollForm")[0].reset(); // Reset the form after submission
        } else {
            alert("Please fill in all required fields.");
        }
    });

    // Handle Modal Close
    $(".close").click(function() {
        $("#enrollModal").modal('hide');
    });
});

// Typing Animation (Vanilla JS)
document.addEventListener("DOMContentLoaded", function() {
    function typeText(element, text, delay = 100) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, delay);
            }
        }
        type();
    }

    // Select the h2 and p elements within the hero section
    const heroHeading = document.querySelector(".hero h2");
    const heroParagraph = document.querySelector(".hero p");

    // Check if elements exist before running the typewriter effect
    if (heroHeading && heroParagraph) {
        // Save the original text
        const headingText = heroHeading.textContent;
        const paragraphText = heroParagraph.textContent;

        // Clear the elements before starting the animation
        heroHeading.textContent = "";
        heroParagraph.textContent = "";

        // Start typing the text with a delay between the elements
        typeText(heroHeading, headingText, 100); // Adjust the speed as desired
        setTimeout(() => typeText(heroParagraph, paragraphText, 50), headingText.length * 100);
    } else {
        console.error("Hero elements not found");
    }
});
