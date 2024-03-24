// Student Grade Generator 
// will need input value for grade in html -- problem to solve 

const form = document.getElementById('myForm');
const gradeResult = document.getElementById('gradeResults')


form.addEventListener('submit', function (event) {
    //prevent the browser from default
    event.preventDefault();
    // get grade value input 
    const grade = document.getElementById('grade').value;

    //a function to calculate the grade scores 
    function gradeEvaluator(grade) {
        if (grade >= 79 && grade <= 100) {
            return 'A';

        } else if (grade >= 60 && grade < 79) {
            return 'B';
        } else if (grade > 49 && grade <= 59) {
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


speedForm.addEventListener('submit', function (e) {
    //prevent default behavior
    e.preventDefault();
    const speed = document.getElementById('speed').value;
    const speedDetector = speedCalculator(speed);
    speedDisplay.textContent = `${speedDetector}`;

})

// CHALLENGE 3      NET SALARY CALCULATOR 


//TO GET PAYEE

const basicSalary = document.getElementById("basicSalary").value;
const benefits = document.getElementById("benefits").value;
const netSalaryCalculatorForm = document.getElementById("netSalaryCalculatorForm");
const calcDisplay = document.getElementById("calcDisplay");



netSalaryCalculatorForm.addEventListener('submit', function (e) {
    //prevent default behaviour
    e.preventDefault();
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);
    const benefits = parseFloat(document.getElementById("benefits").value);

    // Calculate the monthly taxable pay
    const monthlyTaxablePay = basicSalary - benefits;


    // Get the payee and display it
    const finalDisplay = getPayee(monthlyTaxablePay);
    const nhiffTotal = getNhif(monthlyTaxablePay);
    const nssfTotal = getNssf(monthlyTaxablePay);

    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - nssfTotal - nhiffTotal - finalDisplay ;

    calcDisplay.textContent = `Payee is ${finalDisplay} NhiF deduction ${nhiffTotal} NSSF IS ${nssfTotal} Gross Salary ${grossSalary} Net Salary is ${netSalary}`;


});

// to get the tax rate value 
function getRateofTax(monthlyTaxablePay) {
    for (const bracket of taxBrackets) {
        // Get the range values
        const min = bracket["Monthly Taxable Pay"].min;
        const max = bracket["Monthly Taxable Pay"].max;
        // Use if statement to check the ranges 
        if (monthlyTaxablePay >= min && monthlyTaxablePay <= max) {
            return bracket["Rate of Tax (%)"]; // Corrected property name
        }
    }
    return null;
}




function getPayee(monthlyTaxablePay) {


    const taxRate = getRateofTax(monthlyTaxablePay);
    if (taxRate !== null) {
        const payee = monthlyTaxablePay * (taxRate / 100);
        return payee;
    } else {
        return "Invalid monthly taxable income "
    }


};


//TO CALCULATE Nhif

function getNhif(monthlyTaxablePay) {
    for (const rate of nhifRates) {
        // check the range 
        if (monthlyTaxablePay >= rate.min && monthlyTaxablePay <= rate.max) {
            const deduction = rate.deduction;
            return rate.deduction;
        }
    }

}
//calculate Nssf
function getNssf(monthlyTaxablePay) {
    const calcNssf = monthlyTaxablePay * (6 / 100);
    return calcNssf;
}


// represent the data in an array of objects 

const taxBrackets = [{
    "Monthly Taxable Pay": {
        min: 0,
        max: 24000
    },
    "Annual Taxable Pay": {
        min: 0,
        max: 388000
    },
    "Rate of Tax (%)": 10.0
},
{
    "Monthly Taxable Pay": {
        min: 24001,
        max: 32333
    },
    "Annual Taxable Pay": {
        min: 288001,
        max: 388000
    },
    "Rate of Tax (%)": 25.0
},
{
    "Monthly Taxable Pay": {
        min: 32334,
        max: 500000
    },
    "Annual Taxable Pay": {
        min: 388001,
        max: 6000000
    },
    "Rate of Tax (%)": 30.0
},
{
    "Monthly Taxable Pay": {
        min: 500001,
        max: 800000
    },
    "Annual Taxable Pay": {
        min: 6000001,
        max: 9600000
    },
    "Rate of Tax (%)": 32.5
},
{
    "Monthly Taxable Pay": {
        min: 800001,
        max: Infinity
    },
    "Annual Taxable Pay": {
        min: 9600001,
        max: Infinity
    },
    "Rate of Tax (%)": 35.0
}
];

// now to represent the data of nhif

const nhifRates = [{
    min: 0,
    max: 5999,
    deduction: 150
},
{
    min: 6000,
    max: 7999,
    deduction: 300
},
{
    min: 8000,
    max: 11999,
    deduction: 400
},
{
    min: 12000,
    max: 14999,
    deduction: 500
},
{
    min: 15000,
    max: 19999,
    deduction: 600
},
{
    min: 20000,
    max: 24999,
    deduction: 750
},
{
    min: 25000,
    max: 29999,
    deduction: 850
},
{
    min: 30000,
    max: 34999,
    deduction: 900
},
{
    min: 35000,
    max: 39999,
    deduction: 950
},
{
    min: 40000,
    max: 44999,
    deduction: 1000
},
{
    min: 45000,
    max: 49999,
    deduction: 1100
},
{
    min: 50000,
    max: 59999,
    deduction: 1200
},
{
    min: 60000,
    max: 69999,
    deduction: 1300
},
{
    min: 70000,
    max: 79999,
    deduction: 1400
},
{
    min: 80000,
    max: 89999,
    deduction: 1500
},
{
    min: 90000,
    max: 99999,
    deduction: 1600
},
{
    min: 100000,
    max: Infinity,
    deduction: 1700
}
];
// adding data for nssf 
const pensionRates = [{
    tier: "I",
    range: "Up to 7,000"
},
{
    tier: "II",
    range: "7,001 - 36,000"
}
];