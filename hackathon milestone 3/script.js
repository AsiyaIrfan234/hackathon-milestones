document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeDisplay = document.getElementById('resume-display');
    var generateButton = document.getElementById('generate-button');
    var toggleButton = document.getElementById('toggle-button');
    if (!form || !resumeDisplay || !generateButton || !toggleButton) {
        console.error('One or more elements not found');
        return;
    }
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        // Extract form data
        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            education: document.getElementById('education').value,
            experience: document.getElementById('experience').value,
            skills: document.getElementById('skills').value
        };
        // Generate and display resume
        var resumeHtml = generateResumeHtml(formData);
        if (resumeDisplay) {
            resumeDisplay.innerHTML = resumeHtml;
            resumeDisplay.style.display = 'block'; // Show resume
        }
        if (toggleButton) {
            toggleButton.style.display = 'inline'; // Show toggle button
        }
        if (generateButton) {
            generateButton.style.display = 'none'; // Hide generate button
        }
    });
    // Toggle button functionality
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            if (resumeDisplay && resumeDisplay.style.display === 'block') {
                resumeDisplay.style.display = 'none'; // Hide resume
                toggleButton.textContent = 'Show Resume'; // Change button text
            }
            else {
                if (resumeDisplay) {
                    resumeDisplay.style.display = 'block'; // Show resume
                }
                toggleButton.textContent = 'Hide Resume'; // Change button text
            }
        });
    }
});
// Function to generate HTML for the resume
function generateResumeHtml(data) {
    return "\n        <h1><b>Dynamic Resume Builder</b></h1>\n        <h2><b>Personal Information</b></h2>\n        <p><b>Name:</b> ".concat(data.name, "</p>\n        <p><b>Email:</b> ").concat(data.email, "</p>\n        <p><b>Phone:</b> ").concat(data.phone, "</p>\n        \n        <h2><b>Education</b></h2>\n        <p>").concat(data.education, "</p>\n\n        <h2><b>Experience</b></h2>\n        <p>").concat(data.experience, "</p>\n\n        <h2><b>Skills</b></h2>\n        <p>").concat(data.skills, "</p>\n    ");
}
