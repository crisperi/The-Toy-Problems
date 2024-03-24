// Student Grade Generator 
// will need input value for grade in html -- problem to solve 

const form =document.getElementById('myForm');

form.addEventListener('click',function(event){
    //prevent the browser from default
    event.preventDefault();

    const grade = document.getElementById('grade').value;

    console.log('g value ', grade);
})



