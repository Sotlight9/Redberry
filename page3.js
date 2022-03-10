const selectEl = document.getElementById('select');
const formEl = document.getElementById('form');

const inputForExperienceDuration =
  document.getElementById('experienceDuration');

function addSkillsToSelectEl(skills) {
  skills.forEach(function (skill) {
    const optionEl = document.createElement('option');
    optionEl.className = 'option';

    optionEl.value = skill.id;
    optionEl.innerText = skill.title;

    selectEl.appendChild(optionEl);
  });
}

async function fetchSkills() {
  const url = 'https://bootcamp-2022.devtest.ge/api/skills';

  const response = await fetch(url);
  const json = await response.json();
  return json;
}

window.addEventListener('load', async function () {
  const skills = await fetchSkills();
  addSkillsToSelectEl(skills);
});

formEl.addEventListener('submit', async function (event) {
  event.preventDefault();

  const skillId = selectEl.value;
  const experience = inputForExperienceDuration.value;
  const divEl = document.getElementById('newTextarea');
     const span = document.createElement('span');
     span.innerText = `${skillId} years of experience: ${experience}`;
     divEl.appendChild(span);
});