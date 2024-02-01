var counterWidth = 0 
var counterHeight = 0 
function changeSizes(){
    var userWidth = testInput1.value
    var userHeight = testInput2.value
    if(userHeight >= counterHeight){
        ++counterHeight
        myAnimationDiv.style.height =
        `${counterHeight}vh`
    }
    else{
        myAnimationDiv.style.height =
        `${userHeight}vh`
    }
    if(userWidth >= counterWidth){
        ++counterWidth
        myAnimationDiv.style.width =
        `${counterWidth}vw`
    }
    else{
        myAnimationDiv.style.width =
        `${userWidth}vw`
    }
    if(counterHeight == userHeight && counterWidth == userWidth){
        return clearInterval(myInterval)
    }
}
var myInterval = setInterval(changeSizes,1000)




