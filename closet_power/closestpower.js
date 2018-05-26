function closestpower()
{
    var n=document.getElementById("text1").value;
    var i=1;
    var res=1;
    var count=0;
    while(res<=n)
    {
        var res=Math.pow(2,i);
        i++;
        count++;
    }
count=count-1;
alert("reslt is:"+count);
}