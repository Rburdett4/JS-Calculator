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
    document.getElementById("button0").onclick=function(evt) 
    {
        var temp=document.getElementById("answerfield").value
        document.getElementById("answerfield").setAttribute("value",temp+"0");
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
    document.getElementById("buttondivide").onclick=function(evt)
    {
        var text=document.getElementById("answerfield").value;
        document.getElementById("answerfield").setAttribute("value",text+"/");
    }
    document.getElementById("buttonC").onclick=function(evt)
    {
        document.getElementById("answerfield").setAttribute("value","");
        document.getElementById("welcomeLabel").innerHTML="Ryan Burdett's Calculator!";
    }
    document.getElementById("buttoneq").onclick=function(evt) 
    {
        var input=document.getElementById("answerfield").getAttribute("value");
        var inputlength=input.length;
        document.getElementById("welcomeLabel").innerHTML="Ryan Burdett's Calculator!"; 
        var opcount=0;
        for(var i=0;i<inputlength;i++)      //validate proper form- only wish to support single operations 
                                            //at this time.Could revisit in the future.
        {
            if(input.charAt(i)=="+"||input.charAt(i)=="-"||input.charAt(i)=="*"||input.charAt(i)==  "/")
            {
                opcount++;
                if(opcount > 1)
                {
                    document.getElementById("welcomeLabel").innerHTML="-->Invalid input form.";
                    return;
                }
            }
        }

        for(var i=0;i<inputlength;i++)
        {
            switch(input.charAt(i))
            {
                case "+":
                    //get num1 and num2
                    var num1=parseInt(input.substring(0,i)); 
                    var num2=parseInt(input.substring(i+1,inputlength+1));
                    if(isNaN(num1) || isNaN(num2))
                    {
                        document.getElementById("welcomeLabel").innerHTML="-->Invalid input form.";
                        break;
                    }
                    document.getElementById("answerfield").setAttribute("value",Add(num1,num2));
                    break;
                case "-":
                    var num1=parseInt(input.substring(0,i));
                    var num2=parseInt(input.substring(i+1,inputlength+1));
                    if(isNaN(num1)||isNaN(num2))
                    {
                        document.getElementById("welcomeLabel").innerHTML="-->Invalid input form.";
                        break;
                    }
                    document.getElementById("answerfield").setAttribute("value",Subtract(num1,num2));
                    break;
                case "*":
                    var num1=parseInt(input.substring(0,i));
                    var num2=parseInt(input.substring(i+1,inputlength+1));
                    if(isNaN(num1)||isNaN(num2))
                    {
                        document.getElementById("welcomeLabel").innerHTML="-->Invalid input form.";
                        break;
                    }
                    document.getElementById("answerfield").setAttribute("value",Multiply(num1,num2)); 
                    break;
                case "/":
                    var num1=parseInt(input.substring(0,i));
                    var num2=parseInt(input.substring(i+1,inputlength+1));
                    if(isNaN(num1)||isNaN(num2))
                    {
                        document.getElementById("welcomeLabel").innerHTML="-->Invalid input form.";
                        break;
                    } 
                    document.getElementById("answerfield").setAttribute("value",Divide(num1,num2));
                    if(isNaN(document.getElementById("answerfield").getAttribute("value")))
                    {
                        document.getElementById("answerfield").setAttribute("value", "Not a Number!"); 
                    }
                    break;
                default:
                    break;
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
        document.getElementById("welcomeLabel").innerHTML="......Nice try!";
        return;
    }
}


