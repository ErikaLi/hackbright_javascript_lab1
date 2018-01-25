// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();


// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 

function displayInfo(name, account, business) {
    console.log(`Account Holder Name: ${name}`);
    console.log(`Account Holder Number: ${account}`);
    console.log(`Business Name: ${business}`);
}

// Add function to print all addresses, including a header
function showAddresses(addressArr) {
    console.log('Addresses:');
    for (let address of addressArr) {
        console.log(address);
    }
}


// Add function to print phone types and numbers
function showPhones(phoneMap) {
    console.log('Phone Numbers:');
    for (let [contact, number] of phoneMap) {
        console.log(contact + ": " + number);
    }
}


// ///////////////////////////////////////////////////////
// Transactions:

// Create a map of transactions
const transactions = new Map([
    ['May-2', -500], 
    ['May-13', 1200], 
    ['May-15', -100], 
    ['May-21', -359], 
    ['May-29', 2200]
    ]);

// Add function to add transactions
function addTransaction(date, amount) {
    transactions.set(date, amount);
}


// Add function to show balance status
function showBalanceStatus(balance) {
    console.log(`Balance: ${balance}`);
    if (isNaN(balance)) {
        console.log('Please enter a valid number');
    } else if (balance < 0) {
        console.log('You are overdrawn!');
    } else if (balance < 20) {
        console.log('Warning: You are close to zero balance');
    } else {
        console.log("Thank you for your business.");
    }    
}

// Add function to show transactions
function showTransactions(transactionMap, beg_balance) {
    console.log(`Beginning balance: ${beg_balance}`);
    for (let [date, amount] of transactionMap) {
        console.log(`Date: ${date}`);
        if (amount < 0) {
            console.log('Type: withdrawal');
        } else if (amount > 0) {
            console.log('Type: deposit');
        } else {
            console.log('Transaction not valid');
        }
        console.log(`Amount: ${amount}`);
        beg_balance += amount;
        console.log(`New balance: ${beg_balance}`);
    }
    // console.log(`Ending balance: ${beg_balance}`);
    showBalanceStatus(beg_balance)
    if (beg_balance < 0) {
        addTransaction('Jan-24', -25)
    }
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info
const customer = {
    'accountHolder': accountHolder,
    'accountNumber': accountNumber,
    'businessName': businessName,
    'addresses': addresses,
    'phoneNumbers': phoneNumbers,
    'transactions': transactions,
    'startingBalance': 26000
};


// Function to add customer attributes
function addProperties(melon = 'Canteloupe', numPets = 0) {
    customer['favMelon'] = melon;
    customer['numPets'] = numPets;
}

addProperties('Casaba', 2)

// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate
function getInterestRate(income, customerObj) {
    let preferred;
    if ((customerObj.favMelon === "Casaba") || (customerObj.numPets > 5)) {
        preferred = true;
    } else {
        preferred = false;
    }
    if (income < 100000) {
        if (preferred) {
            return '5%';
        } else {
            return '8%';
        }
    } else if (income < 200000) {
        if (preferred) {
            return '4%';
        } else {
            return '7%';
        }
    } else {
        return '4%';
    }
}


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report
function printReport(customerObj) {
    displayInfo(customerObj.accountHolder, customerObj.accountNumber, customerObj.businessName);
    showPhones(customerObj.phoneNumbers);
    showTransactions(customerObj.transactions, customerObj.startingBalance);
    if ((customerObj.favMelon === "Casaba") || (customerObj.numPets > 5)) {
        console.log("Congratulations on being a premiere customer!");
    }
}


// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses
let frequentCustomers = new Map([
    ['Mel Melitipolski', '707 Birch Street'],
    ['Barbara Brown','8997 Jones Street']
    ])


// Write a function to return the address of a given person
function getAddress(customerName) {
    return frequentCustomers.get(customerName);
}


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours






