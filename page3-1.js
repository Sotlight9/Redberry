const selectEl = document.getElementById('select');
const formEl = document.getElementById('form');

let skills = [];

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
  skills = await fetchSkills();
  addSkillsToSelectEl(skills);
  attachEventListener();
});

function attachEventListener(){
  formEl.addEventListener('submit', async function (event) {
    event.preventDefault();

    const skillId = parseInt(selectEl.value);
    const item = skills.find((skill) => skill.id === skillId);

    if(item){
      const experience = inputForExperienceDuration.value;
      const divEl = document.getElementById('newTextarea');
      const spanText = document.createElement('span');
      spanText.style.border = '1px solid rgba(82, 85, 87, 1)';
      spanText.style.padding = '10px 100px';
      spanText.style.display = 'flex';
      spanText.style.flexDirection = 'column';
      spanText.style.margin = '10px 0px';
      spanText.style.color = 'rgba(82, 85, 87, 1)';
      


      spanText.innerText = `${item.title} years of experience: ${experience}`;
      divEl.appendChild(spanText);
    }
  });
}