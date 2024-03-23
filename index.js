// Student Grade Generator 
// will need input value for grade in html -- problem to solve 

const form =document.getElementById('myForm');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const grade = document.getElementById('grade');

    console.log(grade);
})



