// Student Grade Generator 
// will need input value for grade in html -- problem to solve 

const form = document.getElementById('myForm');
const gradeResult = document.getElementById('gradeResults')


form.addEventListener('click', function (event) {
    //prevent the browser from default
    event.preventDefault();
    // get grade value input 
    const grade = document.getElementById('grade').value;

    //a function to calculate the grade scores 
    function gradeEvaluator(grade) {
        if (grade > 79 && grade <= 100) {
            return 'A';

        } else if (grade >= 60 && grade <= 79) {
            return 'B';
        } else if (grade >= 49 && grade <= 59) {
            return 'C';
        } else if (grade >= 40 && grade <= 49) {
            return "D";
        } else if (grade < 40) {
            return 'E';
        } else {
            const defaulMsg = "The input should be between 0 -100"
            return defaulMsg;
        }

    }
    //we need to show the results 
    const calculatedGrade = gradeEvaluator(grade);

    //show text content to the div id gradeResult 
    gradeResult.textContent = `GRADE : ${calculatedGrade} `;

})



// SPEED DETECTOR  CHALLENGE 2 
// get the speedDisplay div in html
const speedDisplay = document.getElementById('speedDisplay');
const speedForm = document.getElementById('speedForm');


function speedCalculator(speed) {

    if (speed <= 70) {
        return "Ok";
    } else if (speed > 70) {
        excessSpeed = speed - 70;
        dPoints = Math.floor(excessSpeed / 5);
        if (dPoints < 12) {
            return `you have ${dPoints} demerit points`
        } else if (dPoints >= 12) {
            return "your license is suspended !"
        }
    }
}


speedForm.addEventListener('click', function(e){
    //prevent default behavior
    e.preventDefault();
    const speed = document.getElementById('speed').value;
    const speedDetector = speedCalculator(speed);
    speedDisplay.textContent = `${speedDetector}`;

})