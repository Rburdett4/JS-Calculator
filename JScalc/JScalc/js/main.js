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


