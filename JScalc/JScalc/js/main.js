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



