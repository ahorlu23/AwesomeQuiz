//getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

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
    showQuestions();
}

let que_count = 0;

//Getting questions and options from array 
function showQuestions() {
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + quetions[0].quetion + '</span>'
    que_text.innerHTML = que_tag;
}