window.onload=function()
{
    document.getElementById("button").onclick=function(evt)
    {
        sayHello()
    }
}


function sayHello()
{
    var messageDialog=new Windows.UI.Popups.MessageDialog("fdsfdsfdsfads!","gggggg"); 
    messageDialog.showAsync();
}



