function hoverbutton ()
{
    document.getElementById("butt").style.backgroundColor="2fe2df";
}

function hover ()
{
    document.getElementById("butt").style.backgroundColor="#00BCBA";
}

function visible()
{
    document.getElementById("click").style.visibility="visible";
    
}

function hide()
{
    document.getElementById("click").style.visibility="hidden";
    
}


var n=0
function Hoverd()
{ 
     n=n+1;
    document.getElementById("img1").innerHTML=n;
}

function clc()
{
    document.getElementById("Clicks").style.color="f50";
    
    
}

function vaild()
{
    var t = prompt("the valid name is ")
    if (t=="Ali")
    {
        window.location="index.html";
    }
    else{
        alert("wrong name !!")
    }
}
