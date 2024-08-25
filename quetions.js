//Creating an array and passing the numbers, quetions, and answers
let quetions = [
    {
        numb: 1,
        quetion:"How do you write " + " Hello World " + " in an alert box?",
        answer: "alert " + " (Hello World);",
        options: [
            "msg " + " (Hello World);",
            "alertBox " + " (Hello World);",
            "alert " + " (Hello World);",
            "msgBox " + " (Hello World);"
        ]
    },

    {
        numb: 2,
        quetion:"Which event occurs when the user clicks on an HTML element?",
        answer: "onclick",
        options: [
            "onchange",
            "onmouseover",
            "onmouseclick",
            "onclick"
        ]
    },

    {
        numb: 3,
        quetion:"How do you declare a JavaScript variable?",
        answer: "var carName;",
        options: [
            "variable carName;",
            "var carName;",
            "v carName;",
            "string carName;"
        ]
    },

    {
        numb: 4,
        quetion:"Which operator is used to assign a value to a variable?",
        answer: "=",
        options: [
            "*",
            "x",
            "=",
            "-"
        ]
    },

    {
        numb: 5,
        quetion:"How do you create a function in JavaScript?",
        answer: "function myFunction()",
        options: [
            "call myFunction()",
            "myFunction()",
            "call function myFunction()",
            "Call.myFunction()"
        ]
    },

    {
        numb: 6,
        quetion:"How do you call a function named " + " myFunction?",
        answer: "myFunction()",
        options: [
            "call myFunction()",
            "myFunction()",
            "call function myFunction()",
            "Call.myFunction()"
        ]
    },

    {
        numb: 7,
        quetion:"How to write an IF statement in JavaScript?",
        answer: "if (i == 5)",
        options: [
            "if i = 5 then",
            "if (i == 5)",
            "if i == 5 then",
            "if i = 5"
        ]
    },

    {
        numb: 8,
        quetion:"How to write an IF statement for executing some code if " + " i " + "is NOT equal to 5?",
        answer: "if (i != 5)",
        options: [
            "if i <> 5",
            "if (i != 5)",
            "if i =! 5 then",
            "f (i <> 5)"
        ]
    },

    {
        numb: 9,
        quetion:"How does a WHILE loop start?",
        answer: "while (i <= 10)",
        options: [
            "while (i <= 10)",
            "while i = 1 to 10",
            "while (i <= 10; i++)",
            "while (i is less than 10)"
        ]
    },

    {
        numb: 10,
        quetion:"How does a FOR loop start?",
        answer: "for (i = 0; i <= 5; i++)",
        options: [
            "for i = 1 to 5",
            "for (i <= 5; i++)",
            "for (i = 0; i <= 5; i++)",
            "for (i = 0; i <= 5)"
        ]
    },

    {
        numb: 11,
        quetion:"How can you add a comment in JavaScript?",
        answer: "// This is a comment",
        options: [
            "This is a comment",
            "// This is a comment",
            "' This is a comment",
            "** This is a comment"
        ]
    },

    {
        numb: 12,
        quetion:"How can you add a multi-line comment in JavaScript?",
        answer: "/* This is a comment */",
        options: [
            "This is a comment ",
            "/* This is a comment */",
            "** This is a comment **",
            "## This is a comment ##"
        ]
    },

    {
        numb: 13,
        quetion:"What is the correct way to write a JavaScript array?",
        answer: "var colors = " + "[" + "red ," + "green ," + " blue]",
        options: [
            "var colors = " + "red " + "," + "green" + "," + "blue",
            "var colors = " + "(1:" + " red , " + "2:" + " green ," + "3:" + " blue)",
            "var colors = " + "[" + "red ," + "green ," + " blue]",
            "var colors = " + "red ," + " green ," + " blue"
        ]
    },

    {
        numb: 14,
        quetion:"How do you round the number 7.25, to the nearest integer?",
        answer: "Math.round(7.25)",
        options: [
            "Math.round(7.25)",
            "rnd(7.25)",
            "round(7.25)",
            "Math.rnd(7.25)"
        ]
    },

    {
        numb: 15,
        quetion:"How do you find the number with the highest value of x and y?",
        answer: "Math.max(x, y)",
        options: [
            "ceil(x, y)",
            "Math.max(x, y)",
            "Math.ceil(x, y)",
            "top(x, y)"
        ]
    },

    {
        numb: 16,
        quetion:"What is the correct JavaScript syntax for opening a new window called " + " w2? ",
        answer: "w2 = window.open(" + "http://www.w3schools.com);",
        options: [
            "w2 = window.new( " + "http://www.w3schools.com);",
            "w2 = window.open( " + "http://www.w3schools.com);",
            "w2 = window.create(" + "http://www.w3schools.com);",
            "w2 = window.window(" + "http://www.w3schools.com);"
        ]
    },

    {
        numb: 17,
        quetion:"JavaScript is the same as Java.",
        answer: "False",
        options: [
            "True",
            "False",
            "Sometimes",
            "Only in the browser"
        ]
    },

    {
        numb: 18,
        quetion:"Which of the following is a JavaScript Data Type?",
        answer: "All of the above",
        options: [
            "number",
            "string",
            "boolean",
            "All of the above"
        ]
    },

    {
        numb: 19,
        quetion:"What is the output of the following code? " + "console.log(typeof 42);",
        answer: "number",
        options: [
            "number",
            "string",
            "integer",
            "undefined"
        ]
    },

    {
        numb: 20,
        quetion:"What is the correct JavaScript syntax to change the content of the HTML element below? "
                + "<p id="+"demo>This is a demonstration.</p>",
        answer: "document.getElementById(demo).innerHTML = Hello World!;",
        options: [
            "document.getElementById(demo).innerHTML = Hello World!;",
            "document.getElementByName(demo).innerHTML = Hello World!;",
            "document.getElement(p).innerHTML = Hello World!;",
            "document.getElementById(p).innerHTML = Hello World!;"
        ]
    },

    {
        numb: 21,
        quetion:"How do you write a JavaScript Object?",
        answer: "{name: John, age: 30, city: New York}",
        options: [
            "{name: John, age: 30, city: New York}",
            "object(name: John, age: 30, city: New York)",
            "name=John; age=30; city=New York;",
            "new Object(name: John, age: 30, city: New York)"
        ]
    },

    {
        numb: 22,
        quetion:"What method can be used to convert a string to an integer in JavaScript?",
        answer: "parseInt()",
        options: [
            "Integer.parse()",
            "String.toInt()",
            "parseInt()",
            "parseFloat()"
        ]
    },

    {
        numb: 23,
        quetion:"What keyword is used to declare a constant variable in JavaScript?",
        answer: "const",
        options: [
            "constant",
            "var",
            "let",
            "const"
        ]
    },

    {
        numb: 24,
        quetion:"Which statement is used to stop a loop in JavaScript?",
        answer: "break",
        options: [
            "stop",
            "exit",
            "break",
            "halt"
        ]
    },

    {
        numb: 25,
        quetion:"What is the purpose of the this keyword in JavaScript?",
        answer: "It refers to the current object",
        options: [
            "It refers to the global object",
            "It refers to the current object",
            "It refers to the previous object",
            "It refers to the first object"
        ]
    },

    {
        numb: 26,
        quetion:"Which function is used to serialize an object into a JSON string?",
        answer: "JSON.stringify()",
        options: [
            "JSON.toString()",
            "JSON.stringify()",
            "JSON.serialize()",
            "JSON.parse()"
        ]
    },

    {
        numb: 27,
        quetion:"Which function is used to parse a JSON string into an object?",
        answer: "JSON.parse()",
        options: [
            "JSON.stringify()",
            "JSON.decode()",
            "JSON.objectify()",
            "JSON.parse()"
        ]
    },

    {
        numb: 28,
        quetion:"Which JavaScript method is used to find a character at a specific index in a string?",
        answer: "charAt()",
        options: [
            "charIndex()",
            "getChar()",
            "charAt()",
            "characterAt()"
        ]
    },

    {
        numb: 29,
        quetion:"How do you check if a variable is an array in JavaScript?",
        answer: "Array.isArray(variable)",
        options: [
            "typeof array",
            "Array.isArray(variable)",
            "ariable.isArray()",
            "isArray(variable)"
        ]
    },

    {
        numb: 30,
        quetion:"How do you remove the last element from an array in JavaScript?",
        answer: "array.pop()",
        options: [
            "array.pop()",
            "array.removeLast()",
            "array.shift()",
            "array.remove()"
        ]
    },

    {
        numb: 31,
        quetion:"What does the splice() method do in JavaScript?",
        answer: "Adds/removes elements from an array",
        options: [
            " Adds new elements to the beginning of an array",
            "Adds/removes elements from an array",
            "Removes the first element from an array",
            "Reverses the order of the elements in an array"
        ]
    },

    {
        numb: 32,
        quetion:"Which method is used to add elements to the end of an array?",
        answer: "push()",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ]
    },

    {
        numb: 33,
        quetion:"What will console.log(2 + '2'); output?",
        answer: "22",
        options: [
            "4",
            "22",
            "NaN",
            "Error"
        ]
    },

    {
        numb: 34,
        quetion:"What is the result of typeof NaN in JavaScript?",
        answer: "number",
        options: [
            "number",
            "string",
            "NaN",
            "undefined"
        ]
    },

    {
        numb: 35,
        quetion:"Which operator returns true if the two compared values are not equal?",
        answer: "!=",
        options: [
            "==",
            "!=",
            "===",
            "<>"
        ]
    },

    {
        numb: 36,
        quetion:"Which method can be used to convert all the elements of an array to a string?",
        answer: "join()",
        options: [
            "join()",
            "toString()",
            "concat()",
            "push()"
        ]
    },

    {
        numb: 37,
        quetion:"Which function can be used to execute a piece of code after a specified amount of time?",
        answer: "setTimeout()",
        options: [
            "setTimeout()",
            "setInterval()",
            "clearTimeout()",
            "delay()"
        ]
    },

    {
        numb: 38,
        quetion:"How do you define a class in JavaScript?",
        answer: "class MyClass {}",
        options: [
            "class = MyClass {}",
            "class MyClass {}",
            "function class() {}",
            "def MyClass {}"
        ]
    },

    {
        numb: 39,
        quetion:"How can you find the length of a string in JavaScript?",
        answer: "string.length",
        options: [
            "string.len",
            "length(string)",
            "string.length",
            "len(string)"
        ]
    },

    {
        numb: 40,
        quetion:"What does JSON.parse() do in JavaScript",
        answer: "Parses a JSON string into a JavaScript object",
        options: [
            "Converts a JavaScript object into a JSON string",
            "Parses a JSON string into a JavaScript object",
            "Parses a JSON object into a JavaScript string",
            "Converts a JSON string into a JavaScript object"
        ]
    },

    {
        numb: 41,
        quetion:"Which built-in method combines the text of two strings and returns a new string?",
        answer: "concat()",
        options: [
            "append()",
            "concat()",
            "attach()",
            "combine()"
        ]
    },

    {
        numb: 42,
        quetion:"Which method is used to access HTML elements in JavaScript?",
        answer: "getElementById",
        options: [
            "getElementByClass",
            "getElementById",
            "getElement",
            "queryElement"
        ]
    },

    {
        numb: 43,
        quetion:"Which of the following will throw an error?",
        answer: "x = 6; (If x is declared with const previously)",
        options: [
            "const x = 5;",
            "x = 6;",
            "let x = 5;",
            "var x = 5;"
        ]
    },

    {
        numb: 44,
        quetion:"How do you write a JavaScript switch statement?",
        answer: "switch(expression) { case x: break; }",
        options: [
            "switch expression { case x: break; }",
            "switch case { expression: break; }",
            "switch(expression) { case x: break; }",
            "switch case(expression) { break; }"
        ]
    },

    {
        numb: 45,
        quetion:"What will console.log([] + []) output?",
        answer: "(empty string)",
        options: [
            "undefined",
            "null",
            "(empty string)",
            "[]"
        ]
    },

    {
        numb: 46,
        quetion:"What does the reduce() method do in JavaScript?",
        answer: "Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value",
        options: [
            "Reduces the size of an array",
            "Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value",
            "Filters the elements of an array",
            "Maps each element to a new array"
        ]
    },

    {
        numb: 47,
        quetion:"How do you add a new element at the beginning of an array?",
        answer: "unshift()",
        options: [
            "push()",
            "unshift()",
            "pop()",
            "shift()"
        ]
    },

    {
        numb: 48,
        quetion:"What does NaN mean in JavaScript?",
        answer: "Not a Number",
        options: [
            "Not a Number",
            "Not a Null",
            "No Any Number",
            "Negative a Number"
        ]
    },

    {
        numb: 49,
        quetion:"What will typeof null return in JavaScript?",
        answer: "object",
        options: [
            "null",
            "undefined",
            "object",
            "string"
        ]
    },

    {
        numb: 50,
        quetion:"Which method is used to remove whitespace from both sides of a string?",
        answer: "trim()",
        options: [
            "trim()",
            "strip()",
            "cut()",
            "slice()"
        ]
    },

];