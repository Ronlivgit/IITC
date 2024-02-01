// t1
const t1Array=["avihu","avihay","Natan","Yoav","Noam"]
function sortMyArrayABC(){
    let sortedArray = t1Array.sort() 
    return sortedArray
}

// t2
const t2Array = [1,22,50,31,8,18,12]
function sortLowToHigh(){
   let sortedArray = t2Array.sort((a,b) => b-a)
   return sortedArray
}

// t3
function sortHighToLow(){
    let sortedArray = t2Array.sort((a,b) => a-b)
    return sortedArray
 }
 
//  t4
const myT4Elems = document.getElementsByClassName("nameInputs")
myT4Elems.addEventListener("change",task4Sort)
function task4Sort(){
    console.log(myT4Elems.value);
}
