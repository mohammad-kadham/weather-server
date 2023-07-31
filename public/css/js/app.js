const searchInput = document.querySelector('#searchInput')
const form = document.querySelector('form')
const details = document.querySelector('#para')

const makeRequest = function(data){
    const request = fetch(`http://localhost:3000/weather?search=${data}`);
    request.then((response)=>{
    response.json().then((data)=>{
       details.textContent = `the temperture is ${data.data.temperature}degree and it visible for ${data.data.visibility} meters`;
       console.log(data.data);
    })
    })

}





form.addEventListener('submit',(e)=>{
    e.preventDefault();
    details.textContent = `loading`;
   makeRequest(searchInput.value)
})