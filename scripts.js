//getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec");

const option_list = document.querySelector(".option_list");

//If start Quiz Button is clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");//show the info box
}

//If Exit Button is clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the info box
}

//If Continue Button is clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the info box
    quiz_box.classList.add("activeQuiz");//Show the quiz box
    showQuestions(0);
    queCounter(1);
    startTimer(15);
}

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 15;

const next_btn = quiz_box.querySelector(".next_btn");

// If the Next Que button is clicked
next_btn.onclick = ()=>{
    if(que_count < quetions.length -1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
    }else{
        console.log("Questions Completed");
    }
}

//Getting questions and options from array 
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ quetions[index].numb + "." + quetions[index].quetion + '</span>';
    let option_tag = '<div class="option">'+ quetions[index].options[0] +'<span></span></div>'
                        +'<div class="option">'+ quetions[index].options[1] +'<span></span></div>'
                        +'<div class="option">'+ quetions[index].options[2] +'<span></span></div>'
                        +'<div class="option">'+ quetions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick","optionSelected(this)");
    }
}

let tickIcon = '<div class ="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class ="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = quetions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        // If answer is wrong then automatically select the correct answer
        for(let i = 0; i < allOptions; i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].classList.add("correct"); // Corrected line
                // option_list.children[i].setAttribute("class", "options correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    // Once a user selects an option disable the rest
    for (let i = 0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
    }
}



function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + index + '</p>of<p>'+ quetions.length +'</p>Quetions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}