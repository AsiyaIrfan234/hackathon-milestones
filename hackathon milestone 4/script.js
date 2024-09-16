document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeDisplay = document.getElementById('resume-display');
    var generateButton = document.getElementById('generate-button');
    if (!form || !resumeDisplay || !generateButton) {
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
        var resumeHtml = editableResumeHtml(formData);
        if (resumeDisplay) {
            resumeDisplay.innerHTML = resumeHtml;
            resumeDisplay.style.display = 'block'; // Show resume
        }
    });
});
// Function to generate HTML for the resume
function editableResumeHtml(data) {
    return "\n        <h1><b>Editable Resume Builder</b></h1>\n        <h2>Personal Information</h2>\n            <p><b>Name:</b><span contenteditable=\"true\">".concat(data.name, "</span></p>\n            <p><b>Email:</b><span contenteditable=\"true\">").concat(data.email, "</span></p>\n            <p><b>Phone:</b><span contenteditable=\"true\">").concat(data.phone, "</span></p>\n        \n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(data.education, "</p>\n        \n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(data.experience, "</p>\n        \n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(data.skills, "</p>\n    ");
}
