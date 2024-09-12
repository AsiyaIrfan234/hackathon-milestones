document.addEventListener('DOMContentLoaded', function () {
    var toggleSkills = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills');
    if (!toggleSkills || !skillsSection) {
        console.error('Required elements are not found in the DOM.');
        return;
    }
    toggleSkills.addEventListener('click', function () {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
            toggleSkills.innerHTML = '<b>Hide Skills</b>';
        }
        else {
            skillsSection.style.display = 'none';
            toggleSkills.innerHTML = '<b>Show Skills</b>';
        }
    });
});
