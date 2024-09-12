document.addEventListener('DOMContentLoaded', () => {
    const toggleSkills = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.getElementById('skills') as HTMLElement;

    if (!toggleSkills || !skillsSection) {
        console.error('Required elements are not found in the DOM.');
        return;
    }

    toggleSkills.addEventListener('click', () => {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
            toggleSkills.innerHTML = '<b>Hide Skills</b>';
        } else {
            skillsSection.style.display = 'none';
            toggleSkills.innerHTML = '<b>Show Skills</b>';
        }
    });
});