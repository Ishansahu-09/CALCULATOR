let result=document.querySelector("#result");

let number=document.querySelectorAll(".number");

number.forEach(button=>{
    button.addEventListener('click',()=>{
        result.innerText = result.innerText + button.innerText;





    })

})


let b=document.querySelector("#equal");
b.addEventListener('click',()=>{

    
let a=document.getElementById('result').innerText;
let b=eval(a);
result.innerText=b;


})

let c=document.querySelector('#clear');
c.addEventListener('click',()=>{
    result.innerText='  ';
})


let x=document.querySelector('#back');
let arr;

x.addEventListener('click',()=>{
    let w=result.innerText;
  
  
    result.innerText=w.slice(0,-1);
  

}

)