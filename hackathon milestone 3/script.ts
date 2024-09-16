// Define types for form data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement | null;
    const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement | null;
    const generateButton = document.getElementById('generate-button') as HTMLButtonElement | null;
    const toggleButton = document.getElementById('toggle-button') as HTMLButtonElement | null;

    if (!form || !resumeDisplay || !generateButton || !toggleButton) {
        console.error('One or more elements not found');
        return;
    }

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent form submission

        // Extract form data
        const formData: ResumeData = {
            name: (document.getElementById('name') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            phone: (document.getElementById('phone') as HTMLInputElement).value,
            education: (document.getElementById('education') as HTMLTextAreaElement).value,
            experience: (document.getElementById('experience') as HTMLTextAreaElement).value,
            skills: (document.getElementById('skills') as HTMLTextAreaElement).value
        };

        // Generate and display resume
        const resumeHtml = generateResumeHtml(formData);
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
        toggleButton.addEventListener('click', () => {
            if (resumeDisplay && resumeDisplay.style.display === 'block') {
                resumeDisplay.style.display = 'none'; // Hide resume
                toggleButton.textContent = 'Show Resume'; // Change button text
            } else {
                if (resumeDisplay) {
                    resumeDisplay.style.display = 'block'; // Show resume
                }
                toggleButton.textContent = 'Hide Resume'; // Change button text
            }
        });
    }
});

// Function to generate HTML for the resume
function generateResumeHtml(data: ResumeData): string {
    return `
        <h1><b>Dynamic Resume Builder</b></h1>
        <h2><b>Personal Information</b></h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        
        <h2><b>Education</b></h2>
        <p>${data.education}</p>

        <h2><b>Experience</b></h2>
        <p>${data.experience}</p>

        <h2><b>Skills</b></h2>
        <p>${data.skills}</p>
    `;
}
