


//     const { exec } = require('child_process');
// exec('ls | grep js', (err, stdout, stderr) => {
//     if (err) {
//         //some err occurred
//         console.error(err)
//     } else {
//         // the *entire* stdout and stderr (buffered)
//         console.log(`stdout: ${stdout}`);
//         console.log(`stderr: ${stderr}`);
//     }
// });
    
function f1(){
  //  alert("hello world")
  
    let x= document.getElementById("box");
    let result="";
    if(x.value!=0){
        x.value=x.value*2;
        result=parseInt(x.value);
    }
    x= document.getElementById("show")
    result=x.innerHTML;
//    else{
//        x.value=x.value;
//        result=x.value;
//    }

   
}


