
// Already have the password stored in a variable

const password = "secretword123";

// Receive the value which the user entered

function checkPassword(userInput){
    // Compare the two values
    if (userInput === password) {
    console.log("Correct password entered");
    // If they match print "Correct password entered"
    } else { 
    console.log("Incorrect password, please try again");
    // If they don't match print "Incorrect password, please try again"
    }
    }

checkPassword("secretword123");
checkPassword("WrongGuess99");
