// Start writing JS code
//alert("Welcome to JS Class")

var student = "bala"

// Create 5 variables
// variable_name should follow this syntax
// student_1
//..
// student_2
var student_1 = "alpha"
var student_2 = "bravo"

// values should be, you and your peer.

var welcome_msg = "Hai. We are friends.. " + student_1 + " , " + student_2
console.log(welcome_msg)

// 1.   Create a new variable "dog" and assign to it with the value "Puggy"
// 1.1  Use the "var" keyword to create a new variable
// 1.2  Give the new variable the name of "dog". Note: variable names do not have quotes(" or ')
// 1.3  Assign the text "Puggy" to the variable dog with the "=" operator
// 1.4  Close the statement with ";"
// WRITE THE CODE FOR STEP 1 BELOW THIS LINE:
var dog = "Puggy";

// WRITE YOUR CODE ABOVE THIS LINE
// 2.		Print out the variable "dog"
// 2.1	Use the console.log statement to print
// 			console.log();
// 2.2	Insert the item that you wish to print out between the brackets
// 			console.log(item);
// WRITE THE CODE FOR STEP 2 BELOW THIS LINE:
console.log(dog);

// WRITE YOUR CODE ABOVE THIS LINE
// 3.		Print out type of value assigned to the variable "dog"
// 3.1	Create a new variable "dogType"
// 3.2	Use the keyword "typeof" to find out the value's type and assign it to "dogType"
// 3.3	Print dogType on your console
// WRITE THE CODE FOR STEP 3 BELOW THIS LINE:
var dogType = typeof (dog);
console.log(dogType);

// WRITE YOUR CODE ABOVE THIS LINE
// 4.		Create a new variable "goodBoy" and assign to it a value of true
// 4.1  Use the "var" keyword to create a new variable
// 4.2  Give the new variable the name of "goodBoy". Note: variable names do not have quotes(" or ')
// 4.3  Assign the value true to the variable "goodBoy" with the "=" operator
// 4.4  Close the statement with ";"
// WRITE THE CODE FOR STEP 4 BELOW THIS LINE:

var goodBoy = true;

// WRITE YOUR CODE ABOVE THIS LINE
// 5.		Print out the variable "goodBoy" and the type of value assigned to it
// 5.1	Create a new variable "goodBoyType"
// 5.2	Use the keyword "typeof" to find out the value's type and assign it to "goodBoyType"
// 5.3	Print goodBoy and goodBoyType on your console
// WRITE THE CODE FOR STEP 5 BELOW THIS LINE:

var goodBoyType = typeof (goodBoy);
console.log(goodBoy);
console.log(goodBoyType);

// WRITE YOUR CODE ABOVE THIS LINE
// 6.		Create a new variable "treats" and assign to it a value of 5
// 6.1  Use the "var" keyword to create a new variable
// 6.2  Give the new variable the name of "treats". Note: variable names do not have quotes(" or ')
// 6.3  Assign the value 5 to the variable "treats" with the "=" operator
// 6.4  Close the statement with ";"
// WRITE THE CODE FOR STEP 6 BELOW THIS LINE:
var treats = 5;

// WRITE YOUR CODE ABOVE THIS LINE
// 7.		Print out the variable treats and the type of value assigned to it
// 7.1	Create a new variable "treatsType"
// 7.2	Use the keyword "typeof" to find out the value's type and assign it to treatsType
// 7.3	Print treats and treatsType on your console
// WRITE THE CODE FOR STEP 5 BELOW THIS LINE:
var treatsType = typeof (treats);
console.log(treats);
console.log(treatsType);

// WRITE YOUR CODE ABOVE THIS LINE
// 4.        Create a new variable "goodBoy" and assign to it a value of true
// 4.1  Use the "var" keyword to create a new variable
// 4.2  Give the new variable the name of "goodBoy". Note: variable names do not have quotes(" or ')
// 4.3  Assign the value true to the variable "goodBoy" with the "=" operator
// 4.4  Close the statement with ";"
// WRITE THE CODE FOR STEP 4 BELOW THIS LINE:
var goodBoy = true;


// WRITE YOUR CODE ABOVE THIS LINE
// 5.        Print out the variable "goodBoy" and the type of value assigned to it
// 5.1    Create a new variable "goodBoyType" 
// 5.2    Use the keyword "typeof" to find out the value's type and assign it to "goodBoyType"
// 5.3    Print goodBoy and goodBoyType on your console
// WRITE THE CODE FOR STEP 5 BELOW THIS LINE:

var goodBoyType = typeof (goodBoy)
console.log(goodBoy)
console.log(goodBoyType)



// WRITE YOUR CODE ABOVE THIS LINE
// 6.        Create a new variable "treats" and assign to it a value of 5
// 6.1  Use the "var" keyword to create a new variable
// 6.2  Give the new variable the name of "treats". Note: variable names do not have quotes(" or ')
// 6.3  Assign the value 5 to the variable "treats" with the "=" operator
// 6.4  Close the statement with ";"
// WRITE THE CODE FOR STEP 6 BELOW THIS LINE:
var treats = 5;


// WRITE YOUR CODE ABOVE THIS LINE
// 7.        Print out the variable treats and the type of value assigned to it
// 7.1    Create a new variable "treatsType" 
// 7.2    Use the keyword "typeof" to find out the value's type and assign it to treatsType
// 7.3    Print treats and treatsType on your console
// WRITE THE CODE FOR STEP 5 BELOW THIS LINE:
var treatsType = typeof (treats)
console.log(treats)
console.log(treatsType)




// WRITE YOUR CODE ABOVE THIS LINE

//      Given the following variable
var i = 10;

// 1.   Increment i by 1 and print it out
// 1.1  Increment using the "++" operator
// 1.2  Print the code 
// WRITE THE CODE FOR STEP 1 BELOW THIS LINE:
console.log(i++)



// WRITE YOUR CODE ABOVE THIS LINE
// 2.   Subtract i by 2 and assign it back to i. Print out i.
// 2.1  Subtract using the "-=" operator
// 2.2  Print the code
// WRITE THE CODE FOR STEP 2 BELOW THIS LINE:
// i = i - 2
i -= 2
console.log(i)



// WRITE YOUR CODE ABOVE THIS LINE
// 3.   Multiply i by the power of 2
// 3.1  Perform the operation using the "**" operator and reassign it to i
// 3.2  Print the code
// WRITE THE CODE FOR STEP 3 BELOW THIS LINE

i = i ** 2
console.log(i)



// WRITE YOUR CODE ABOVE THIS LINE

function greet(nameOfPerson) {

    var greeting_message = "Welcome , Mr " + nameOfPerson

    console.log(greeting_message)
}

greet("Bala ")

greet("Zin min")

greet("Kenneth")


/*

1. Create a function which takes two inputs (names)
2. inside that function , concatenate those two inputs  using + operator
3. return the resulted_string

4. Call that function, with u and ur's friends name
5. print the returned result.

---------------------------

6. Advanced optional
It should look like this.
If i pass "bala" and "ken" as inputs to the funtion, it should return 
"Bala Bala | Ken Ken"

*/

function joinNames(name1, name2) {
    //This function is going to join two names (name1, name2)
    // It is going to return the joined_string in the following format
    //Returns : "name1 name 2"
    // var space = ""
    var joined_string = name1 + name2
    return joined_string
}
var result
joinNames("Bala", "Ken")


//90-70
var a = 90;
while (a > 69) {
    console.log(a)
    a--
}

for (var a = 90; a > 69; a--) {
    console.log(a)
}

for (var item in [1, 2, 3]) {
    console.log(item)
}


// Objects
var studentObject = {
    name: "Ken"
    age: 20,
    marks: [80, 89, 67, 90, 100]
    subjects: ["Math", "CS", "EC", "Math2", "Math3"],
    avg: 0,
    young: false,
    welcome_function: function () {
        console.log("Welcome Bala Bala Bala..")

    }
    bmi: {
        height: 200,
        weight: 70
    }
}

//Access the value of name "property" from student object??
console.log(student.name)

//method 1
student.avg = 70
var mymarks_list = student.marks



var total = 0
for (var num in mymarks_list) {}
total = total + num

//method 2
for (var index = 0; index < mymarks_list.length; index++) {
    varnum = mymarks_list[index];
    total = total + num

}

//method 3
var index = 0
while (index < mymarks_list.length) {
    total = total + mymarks_list[index]
    index++
}
