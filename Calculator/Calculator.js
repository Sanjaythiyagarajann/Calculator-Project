let outPutValue=document.getElementById("value")

function display(arr){
    outPutValue.value += arr;
}
function calculate(){
     try {
       outPutValue.value= eval(outPutValue.value) 
     } catch (error) {
        alert("invalid key")
     }
}
function del(){
    outPutValue.value=outPutValue.value.slice(0,-1);
}
function Clear(){
    outPutValue.value="";
}