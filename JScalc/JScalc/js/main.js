window.onload=function()
{

    //Most Likely will have to check that only one operator is present. 
    //This could be done here,or potentially when the data is sent to be evaluated. 

    //check that preceding character to an operand is a number (e.g. 2+2, not +22+4)

    document.getElementById("button1").onclick=function(evt)
    {
        var temp=document.getElementById("answerfield").value
        document.getElementById("answerfield").setAttribute("value",temp+"1");
    }
    document.getElementById("button2").onclick=function(evt)
    {
        var temp=document.getElementById("answerfield").value
        document.getElementById("answerfield").setAttribute("value",temp + "2");
    }
    document.getElementById("button3").onclick=function(evt)
    {
        var temp=document.getElementById("answerfield").value
        document.getElementById("answerfield").setAttribute("value",temp+"3");
    }
    document.getElementById("button4").onclick=function(evt)
    {
        var temp=document.getElementById("answerfield").value
        document.getElementById("answerfield").setAttribute("value",temp+"4");
    }
    document.getElementById("button5").onclick=function(evt)
    {
        var temp=document.getElementById("answerfield").value
        document.getElementById("answerfield").setAttribute("value",temp+"5");
    }
    document.getElementById("button6").onclick=function(evt)
    {
        var temp=document.getElementById("answerfield").value
        document.getElementById("answerfield").setAttribute("value",temp+"6");
    }
    document.getElementById("button7").onclick=function(evt)
    {
        var temp=document.getElementById("answerfield").value
        document.getElementById("answerfield").setAttribute("value",temp+"7");
    }
    document.getElementById("button8").onclick=function(evt)
    {
        var temp=document.getElementById("answerfield").value
        document.getElementById("answerfield").setAttribute("value",temp+"8");
    }
    document.getElementById("button9").onclick=function(evt) 
    {
        var temp=document.getElementById("answerfield").value
        document.getElementById("answerfield").setAttribute("value",temp+"9");
    } 

    //Now, we can establish the operators.
    document.getElementById("button+").onclick=function(evt)
    {
        var text=document.getElementById("answerfield").value; 
        document.getElementById("answerfield").setAttribute("value",text+"+"); 
    }
    document.getElementById("button-").onclick=function(evt)
    {
        var text=document.getElementById("answerfield").value;
        document.getElementById("answerfield").setAttribute("value",text+"-");
    }
    document.getElementById("button*").onclick=function(evt)
    {
        var text=document.getElementById("answerfield").value;
        document.getElementById("answerfield").setAttribute("value",text+"*");
    }
    document.getElementById("button/").onclick=function(evt)
    {
        var text=document.getElementById("answerfield").value;
        document.getElementById("answerfield").setAttribute("value",text+"/");
    }
    document.getElementById("buttonC").onclick=function(evt)
    {
        document.getElementById("answerfield").setAttribute("value","");
        document.getElementById("welcomeLabel").innerHTML="Ryan Burdett's Calculator!";
    }
    document.getElementById("button=").onclick=function(evt) 
    {
        var input=document.getElementById("answerfield").getAttribute("value"); 
        var inputLength=input.length;
        if(inputLength != 3)
        {
            document.getElementById("welcomeLabel").innerHTML="-->Input is too long/short.";
        }
        else
        {
            document.getElementById("welcomeLabel").innerHTML="Ryan Burdett's Calculator!"; 
            //deconstruct the 3 characters
            var num1=parseInt(input.charAt(0)); 
            var sign=input.charAt(1);
            var num2=parseInt(input.charAt(2));
            if(sign!="+"&&sign!="-"&&sign!="*"&&sign!="/")
            {
                document.getElementById("welcomeLabel").innerHTML="-->Invalid input form.";
            }
            else
            {
                switch(sign)
                {
                    case "+":
                        document.getElementById("answerfield").setAttribute("value",Add(num1, num2));
                        break;
                    case "-":
                        document.getElementById("answerfield").setAttribute("value",Subtract(num1,num2));
                        break;
                    case "*":
                        document.getElementById("answerfield").setAttribute("value",Multiply(num1,num2));
                        break;
                    case "/":
                        document.getElementById("answerfield").setAttribute("value",Divide(num1,num2)); 
                        break;
                }
            }
        }
    }
} 





function Add(x, y)
{
    return (x+y);
}

function Subtract(x,y)
{
    return (x-y);
}

function Multiply(x,y)
{
    return (x*y);
}

function Divide(x,y)
{
    if(y != 0)
    {
        return (x/y);
    }
    else
    {
        document.getElementById("welcomeLabel").innerHTML="Cannot divide by 0.";
        return;
    }
}


