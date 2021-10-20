//html elements
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const abilityInput = document.getElementById('abilityInput');
const finalMsg = document.getElementById('finalMsg');
const subBtn = document.getElementById('subBtn');


const headers = {"Access-Control-Allow-Headers":"*", 'Access-Control-Allow-Origin':"*"};
subBtn.addEventListener('click', async (e)=>{
    e.preventDefault();
    const sendData = {'name':nameInput.value, 'age':ageInput.value, 'ability':abilityInput.value};
    const response = await axios.post('http://localhost:8080/', sendData , headers)
    finalMsg.textContent = response.data;
})