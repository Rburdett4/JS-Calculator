window.onload=function()
{
    var x = 0;
    document.getElementById("button1").onclick=function(evt)
    {
        x=Add(x,1);
        document.getElementById("answerfield").setAttribute("value", x);
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
    //display result here
}


