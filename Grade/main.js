const calcy =() =>{
    let wd=document.getElementById('wd').value;
    let maths=document.getElementById('maths').value;
    let comp=document.getElementById('comp').value;
    let phy=document.getElementById('phy').value;
    let grades="";
    // console.log(wd);
    let Totalgrades=parseFloat(wd)+parseFloat(maths)+parseFloat(comp)+parseFloat(phy);
    // alert(Totalgrades);
    let perc=(Totalgrades/400)*100;
    alert(perc);
    if(perc<=100 && perc>=80){
        grades='A';
    }else if(perc<=79 && perc>=70){
        grades='B';
    }else if(perc<=69 && perc>=60){
       grades='C';
    }else if(perc<=59 && perc>=50){
        grades='D';
    }else{
        grades='F';
    }
    if(perc>=40){
        document.getElementById('showData').innerHTML=  `Out of Total 400 your total is ${Totalgrades} and your percentage is ${perc}%.<br> Your grade is ${grades}.You have passed`
    }else{
        document.getElementById('showData').innerHTML=  `Out of Total 400 your total is ${Totalgrades} and your percentage is ${perc}%.<br> Your grade is ${grades}.Unfortunately you have failed`
    }
    
}