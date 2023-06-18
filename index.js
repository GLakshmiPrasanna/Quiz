var quizData=[
    {
        question : "Which framework is related to Javascript?",
        a : ".net",
        b : "flask",
        c : "react",
        d : "django",
        crt : 'c'
    },
    {
        question : "Which is not a programming language?",
        a : "HTML",
        b : "Python",
        c : "Java",
        d : "Javascript",
        crt : 'a' 
    },
    {
        question : "Which is not a framework?",
        a : "React",
        b : "Javascript",
        c : "Angular",
        d : "Django",
        crt : 'b' 
    },
    {
        question : "CSS stands for",
        a : "cascading style state",
        b : "cascading style sheet",
        c : "cascading sheet of styles",
        d : "none",
        crt : 'b'
    }
]

var answer=document.querySelectorAll('.answer');
var submit=document.getElementById('submit');
var cnt=0,score=0;
display();
function display()
{
    deselect();
    $('#question').text(quizData[cnt].question);
    $('#a_val').text(quizData[cnt].a);
    $('#b_val').text(quizData[cnt].b);
    $('#c_val').text(quizData[cnt].c);
    $('#d_val').text(quizData[cnt].d);
}
function deselect()
{
    answer.forEach(ans => {
        ans.checked=false;
    });
}
submit.addEventListener('click',()=>{
    answer.forEach((ans)=>{
        if(ans.checked){
            if(ans.id===quizData[cnt].crt){
                score++;
            }
            cnt++;
        }
    })
    if(cnt==quizData.length)
    {
        $('.quizDiv').text('Your score is '+score).css('font-size','30px').css('font-weight','bold').css('text-align','center');
    }
    else    display();
})
