let a=document.querySelector('#answer');

let addbtn=document.querySelector ('#add');
 addbtn.addEventListener('click',()=>{
    let input1=parseInt(document.getElementById('first').value);
    let input2=parseInt(document.getElementById('second').value);

    sum=input1+input2;
    a.innerText=sum;





 })
 let subsbtn=document.querySelector('#substract');
  subsbtn.addEventListener('click',()=>{
    let input1=parseInt(document.getElementById('first').value);
    let input2=parseInt(document.getElementById('second').value);

    sum=input1-input2;
    a.innerText=sum;
 })

    let multiplybtn=document.querySelector('#multiply');
        multiplybtn.addEventListener('click',()=>{
           let input1=parseInt(document.getElementById('first').value);
           let input2=parseInt(document.getElementById('second').value);

           sum=input1*input2;
           a.innerText=sum;})

   let divbtn=document.querySelector('#divide');
         divbtn.addEventListener('click',()=>{
    let input1=parseInt(document.getElementById('first').value);
    let input2=parseInt(document.getElementById('second').value);

    sum=input1/input2;
    a.innerText=sum;
         })