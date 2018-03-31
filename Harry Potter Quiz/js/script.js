function submitAnswer(){
    let total = 5;
    let score = 0;

    //User Input
    let q1 = document.forms["quizForm-HarryPotter"]["q1"].value;
    let q2 = document.forms["quizForm-HarryPotter"]["q2"].value;
    let q3 = document.forms["quizForm-HarryPotter"]["q3"].value;
    let q4 = document.forms["quizForm-HarryPotter"]["q4"].value;
    let q5 = document.forms["quizForm-HarryPotter"]["q5"].value;

    //Validations
    for(let i=1; i<= total; i++){
        if(eval('q'+i) == null || eval('q'+i) == ''){
            alert("You missed question " + i);
            return false;
        }
    }

    //Correct Answers
    let answer = ["b","b","d","c","a"];

    //Check Answers
    for(i=1; i<= total; i++){
        if(eval('q'+i) == answer[i - 1]){
            score++;            
        }
    }   

    //Display Results
    var results = document.getElementById("result");
    results.innerHTML = "<h3>You scored <span>"+score+"</span> out of <span>"+total+"</span></h3>";
    alert("You scored " +score+" out of "+total);

    return false;
}

