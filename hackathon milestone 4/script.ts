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

    if (!form || !resumeDisplay || !generateButton) {
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
        const resumeHtml = editableResumeHtml(formData);
        if (resumeDisplay) {
            resumeDisplay.innerHTML = resumeHtml;
            resumeDisplay.style.display = 'block'; // Show resume
        }
    });
});

// Function to generate HTML for the resume
function editableResumeHtml(data: ResumeData): string {
    return `
        <h1><b>Editable Resume Builder</b></h1>
        <h2>Personal Information</h2>
            <p><b>Name:</b><span contenteditable="true">${data.name}</span></p>
            <p><b>Email:</b><span contenteditable="true">${data.email}</span></p>
            <p><b>Phone:</b><span contenteditable="true">${data.phone}</span></p>
        
            <h3>Education</h3>
            <p contenteditable="true">${data.education}</p>
        
            <h3>Experience</h3>
            <p contenteditable="true">${data.experience}</p>
        
            <h3>Skills</h3>
            <p contenteditable="true">${data.skills}</p>
    `;
}
