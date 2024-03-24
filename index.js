// Student Grade Generator 
// will need input value for grade in html -- problem to solve 

const form =document.getElementById('myForm');

form.addEventListener('click',function(event){
    //prevent the browser from default
    event.preventDefault();

    const grade = document.getElementById('grade').value;

    function gradeEvaluator (grade){
        if (grade > 79){
            return A;
    
        }else if (grade >= 60 && grade <= 79){
            return B ;
        }else if (grade >=49 && grade <= 59){
            return C;
        }else if (grade >= 40 && grade <=49){
            return "D" ; 
        }else if (grade < 40){
            return E ; 
        }else {
            const defaulMsg = "The input should be between 0 -100"
            return defaulMsg;
        }
    
    }

    console.log('g value ', grade);
})


function gradeEvaluator (grade){
    if (grade > 79){
        return A;

    }else if (grade >= 60 && grade <= 79){
        return B ;
    }else if (grade >=49 && grade <= 59){
        return C;
    }else if (grade >= 40 && grade <=49){
        return "D" ; 
    }else if (grade < 40){
        return E ; 
    }else {
        const defaulMsg = "The input should be between 0 -100"
        return defaulMsg;
    }

}


