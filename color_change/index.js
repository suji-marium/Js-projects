var index=0;
function color_change()
{
    
    var color=["red","green","blue","violet","orange"]
    document.getElementsByTagName("body")[0].style.background=color[index++];
    if(index>color.length-1)
        index=0;

}
