var q = document.getElementById("question")
var y = document.getElementById("test")
var a = document.getElementsByClassName("choice")[0]
var b = document.getElementsByClassName("choice")[1]
var c = document.getElementsByClassName("choice")[2]
var d = document.getElementsByClassName("choice")[3]
var f = document.getElementById("feedback")
var cs = document.getElementById("current")

var score = 0
var page = 0

//Quiz Questions
//Question 1
var q1 = ["1. Which of the following is important to understand when creating animations using Javascript?", 
"A. English", 
"B. Mathematics", 
"C. Art", 
"D. History"]

//Question 2
var q2 = ["2. Which of the following functions is used to control timing in JavaScript Animations?", 
"A. keyframes()", 
"B. None of these", 
"C. timer()", 
"D. setTimeout()"]

//Question 3
var q3 = ["3. Which one of the following is a CSS gradient property?","A. Transparent-gradient", 
"B. Opitcal-gradient", 
"C. Opaque-gradient", 
"D. Linear-gradient"]

//Question 4
var q4 = ["4. What is the correct syntax to round the corners of an element?", 
"A. border: radius15°;", 
"B. border-radius: 15°", 
"C. border-radius:15px;", 
"D. border-roundness:15px;"]

//Question 5
var q5 = ["5. Which three of the following are JavaScript Events?", 
"A. onMousePoint()", 
"B. alert()", 
"C. onModify()", 
"D. onClick()"]

//Question 6
var q6 = ["6. A group for which you are developing a website wants a form to have some fields utilize the autocomplete feature when people fill out the form. Which HTML tag should you use for any field that needs this autocomplete feature?", 
"A. input", 
"B. fieldlist", 
"C. select", 
"D. datalist"]

//Question 7
var q7 = ["7. If you pass a negative value to the rotate() method, what is the result?", 
"A. It rotates the element clockwise", 
"B. It flips the element into the mirrored position", 
"C. It rotates the element counter-clockwise", 
"D. It won't work"]

//Question 8
var q8 = ["8. If a developer needs to hold a piece of data in Javascript for use later in a function, what would they use?",
"A. Container",
"B. Function",
"C. Variable",
"D. Copy"]

//Question 9
var q9 = ["9. In JavaScript, what is the difference between a global versus a local variable?",
"A. A local variable can only be used by the function that defines it",
"B. A local variable is available to any code inside the script tags",
"C. A global variable is created inside a method or function",
"D. A global variable is transported to other JavaScript programs located on other web pages"]

//Question 10
var q10 = ["10. Which one of the following tags help you avoid problems if a browser does not support JavaScript?",
"A. <<#comment>>",
"B. <#!--",
"C. -->",
"D. <--//"]
var img = undefined;
function previous(){
    page -= 1
    if (page<=0){
        page = 1
    }
    else if(page === 1){
        console.log("question 1")
        q.innerHTML = q1[0]
        a.innerHTML = q1[1]
        b.innerHTML = q1[2]
        c.innerHTML = q1[3]
        d.innerHTML = q1[4]
    }
    else if(page === 2){
        console.log("question 2")
        q.innerHTML = q2[0]
        a.innerHTML = q2[1]
        b.innerHTML = q2[2]
        c.innerHTML = q2[3]
        d.innerHTML = q2[4]
    }
    else if(page === 3){
        console.log("question 3")
        q.innerHTML = q3[0]
        a.innerHTML = q3[1]
        b.innerHTML = q3[2]
        c.innerHTML = q3[3]
        d.innerHTML = q3[4]
    }
    else if(page === 4){
        console.log("question 4")
        q.innerHTML = q4[0]
        a.innerHTML = q4[1]
        b.innerHTML = q4[2]
        c.innerHTML = q4[3]
        d.innerHTML = q4[4]
    }
    else if(page === 5){
        console.log("question 5")
        q.innerHTML = q5[0]
        a.innerHTML = q5[1]
        b.innerHTML = q5[2]
        c.innerHTML = q5[3]
        d.innerHTML = q5[4]
    }
    else if(page === 6){
        console.log("question 6")
        q.innerHTML = q6[0]
        a.innerHTML = q6[1]
        b.innerHTML = q6[2]
        c.innerHTML = q6[3]
        d.innerHTML = q6[4]
    }
    else if(page === 7){
        console.log("question 7")
        q.innerHTML = q7[0]
        a.innerHTML = q7[1]
        b.innerHTML = q7[2]
        c.innerHTML = q7[3]
        d.innerHTML = q7[4]
    }
    else if(page === 8){
        console.log("question 8")
        q.innerHTML = q8[0]
        a.innerHTML = q8[1]
        b.innerHTML = q8[2]
        c.innerHTML = q8[3]
        d.innerHTML = q8[4]
    }
    else if(page === 9){
        console.log("question 9")
        q.innerHTML = q9[0]
        a.innerHTML = q9[1]
        b.innerHTML = q9[2]
        c.innerHTML = q9[3]
        d.innerHTML = q9[4]
    }
    else if(page === 10){
        console.log("question 10")
        q.innerHTML = q10[0]
        a.innerHTML = q10[1]
        b.innerHTML = q10[2]
        c.innerHTML = q10[3]
        d.innerHTML = q10[4]
    }
}

function next(){
    page += 1
    if (page<=0){
        page = 1
    }
    else if(page === 1){
        console.log("question 1")
        q.innerHTML = q1[0]
        a.innerHTML = q1[1]
        b.innerHTML = q1[2]
        c.innerHTML = q1[3]
        d.innerHTML = q1[4]
    }
    else if(page === 2){
        console.log("question 2")
        img.remove();
        f.remove();
        q.innerHTML = q2[0]
        a.innerHTML = q2[1]
        b.innerHTML = q2[2]
        c.innerHTML = q2[3]
        d.innerHTML = q2[4]
    }
    else if(page === 3){
        console.log("question 3")
        img.remove();
        f.remove();
        q.innerHTML = q3[0]
        a.innerHTML = q3[1]
        b.innerHTML = q3[2]
        c.innerHTML = q3[3]
        d.innerHTML = q3[4]
    }
    else if(page === 4){
        console.log("question 4")
        img.remove();
        f.remove();
        q.innerHTML = q4[0]
        a.innerHTML = q4[1]
        b.innerHTML = q4[2]
        c.innerHTML = q4[3]
        d.innerHTML = q4[4]
    }
    else if(page === 5){
        console.log("question 5")
        img.remove();
        f.remove();
        q.innerHTML = q5[0]
        a.innerHTML = q5[1]
        b.innerHTML = q5[2]
        c.innerHTML = q5[3]
        d.innerHTML = q5[4]
    }
    else if(page === 6){
        console.log("question 6")
        img.remove();
        f.remove();
        q.innerHTML = q6[0]
        a.innerHTML = q6[1]
        b.innerHTML = q6[2]
        c.innerHTML = q6[3]
        d.innerHTML = q6[4]
    }
    else if(page === 7){
        console.log("question 7")
        img.remove();
        f.remove();
        q.innerHTML = q7[0]
        a.innerHTML = q7[1]
        b.innerHTML = q7[2]
        c.innerHTML = q7[3]
        d.innerHTML = q7[4]
    }
    else if(page === 8){
        console.log("question 8")
        img.remove();
        f.remove();
        q.innerHTML = q8[0]
        a.innerHTML = q8[1]
        b.innerHTML = q8[2]
        c.innerHTML = q8[3]
        d.innerHTML = q8[4]
    }
    else if(page === 9){
        console.log("question 9")
        img.remove();
        f.remove();
        q.innerHTML = q9[0]
        a.innerHTML = q9[1]
        b.innerHTML = q9[2]
        c.innerHTML = q9[3]
        d.innerHTML = q9[4]
    }
    else if(page === 10){
        console.log("question 10")
        img.remove();
        f.remove();
        q.innerHTML = q10[0]
        a.innerHTML = q10[1]
        b.innerHTML = q10[2]
        c.innerHTML = q10[3]
        d.innerHTML = q10[4]
    }
}

let answers = [2, 4, 4, 3, 4, 4, 3, 3, 1, 2]
let answered = [0,0,0,0,0,0,0,0,0,0]
// 
function check(e){
    if (answered[page -1] == 0){
        if (e == answers[page -1]) {
            score++
            console.log("correct")
            f.innerHTML = "Correct!"
            img = document.createElement('img')
            img.src = './yay.jpg'
            document.getElementById("image").appendChild(img)
            cs.innerHTML = "Current Score: "+score+"/10"
        }
        else{
            console.log("wrong")
            f.innerHTML = "Incorrect!"
            cs.innerHTML = "Current Score: "+score+"/10"
            img = document.createElement('img')
            img.src = './no.JPG'
            document.getElementById("image").appendChild(img)
        }
        answered[page - 1] = 1;
    }
}

function displayScore(){
    var ask = window.confirm("Are you sure you want to submit? Once you submit, you cannot go back and change your answers.")
    if (ask){
        alert('Your final score is: '+score+'/10');
        history.back()
    }
    else{
        alert("Okay, please continue your test.")
    }
    
}