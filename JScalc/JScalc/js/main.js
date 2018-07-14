window.onload=function()
{
    var x=0;
    var text=0;
    document.getElementById("button1").onclick=function(evt)
    {
        x=Add(text,1);
        document.getElementById("answerfield").setAttribute("value",x);  
    }
    document.getElementById("button+").onclick=function(evt)
    { 
        text=document.getElementById("answerfield").value; 
        document.getElementById("answerfield").setAttribute("value", text+"+"); 
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
    return (x/y);
}

function Equals(x,y)
{
    //evaluate what's in the field and set to a varaible
    //scrub text field
    //display variable 
}


