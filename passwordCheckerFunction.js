
// Already have the password stored in a variable

const password = "secretword123";

// Receive the value which the user entered

function checkPassword(input){
if (input === password)
    console.log("Correct password entered");
} else {
    console.log("Incorrect password, please try again");
}

// Compare the two values
// If they match print "Correct password entered"
// If they don't match print "Incorrect password, please try again"

checkPassword("secretword123");


console.log(input);



