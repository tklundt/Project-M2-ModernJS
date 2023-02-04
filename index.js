    // Id
    // customerName
    // phoneNumber
    // address
    // loanAmount
    // interest
    // loanTermYears
    // loanType
    // description
    // calculatedLoanAmount (** Assign the following business logic to calculate the loan amount. By creating a JavaScript function)

    //Calculated field, determines the total loan amount based # of years, initial loan amount, and interest rate
    function calcLoanAMT (interest, loanAmount, loanTermYears) {
        const i = Number(interest) / 100 / 12;
        const pv = Number(loanAmount);
        const n = Number(loanTermYears) * 12;
        let pow = (1+i);
        pow = Math.pow(pow, -n);
        pow = 1-pow;
        let owed = (i*pv) / pow;
        owed = owed * n;
        return owed;
    }

    //Print function
    function printInfo (loan) {
        console.log(loan.customerName + ' owes $' + loan.calculatedLoanAmount + ' total over ' + loan.loanTermYears + ' years at $250 a month.')
    }

    //Array of objects for loan info
    var loanInfo = [
	{
		'id': 1,
        'customerName': 'John',
        'phoneNumber': '555-550-5550',
        'address': '1234 Easy Street',
        'loanAmount': 15000,
        'interest': 6,
        'loanTermYears': 4,
        'loanType': 'Fun',
        'description': '',
        'calculatedLoanAmount': 0
	},
    {
		'id': 2,
        'customerName': 'Sam',
        'phoneNumber': '555-550-5551',
        'address': '1235 Easy Street',
        'loanAmount': 10000,
        'interest': 6,
        'loanTermYears': 4,
        'loanType': 'Not Fun',
        'description': '',
        'calculatedLoanAmount': 0
	},
    {
		'id': 3,
        'customerName': 'Steve',
        'phoneNumber': '555-550-5552',
        'address': '1241 Easy Street',
        'loanAmount': 13000,
        'interest': 10,
        'loanTermYears': 4,
        'loanType': '',
        'description': '',
        'calculatedLoanAmount': 0
	},
    {
		'id': 4,
        'customerName': 'Carla',
        'phoneNumber': '555-550-5560',
        'address': '1400 Easy Street',
        'loanAmount': 5000,
        'interest': 3,
        'loanTermYears': 4,
        'loanType': '',
        'description': '',
        'calculatedLoanAmount': 0
	},
    {
		'id': 5,
        'customerName': 'Cindy',
        'phoneNumber': '555-551-5700',
        'address': '3000 Easy Street',
        'loanAmount': 2500,
        'interest': 6,
        'loanTermYears': 4,
        'loanType': '',
        'description': '',
        'calculatedLoanAmount': 0
	}
    ];

    //For each calculate the grand total and print
    loanInfo.forEach((loan)=>loan.calculatedLoanAmount=Math.floor(calcLoanAMT(loan.interest, loan.loanAmount, loan.loanTermYears)));
    loanInfo.forEach((loan)=>printInfo(loan));