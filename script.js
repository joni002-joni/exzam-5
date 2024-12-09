//  // Калькулятор ехзамен
// let san1 = +prompt("Бірінші сан енгіз")
// let san2 = +prompt("Екінші  сан енгіз")
// i=0

  
//  if (isNaN(san1) && isNaN(san2)) {
// alert(`Сіз не жазып кеттіңіз!!!`)
// } else if (san1,san1) {
// alert(` Қосындысы = ${san1+san2} 
//  Азаитындысы = ${san1-san2}
//  Көбейтіндісі  = ${san1*san2}
//  Бөліндісі  = ${san1/san2}`)
      
// }
 

let num =  50; 
 
  
 function sandar() { 
     while(true){ 
         let san = +prompt("Сан енгізіңіз: ") 
     if(num == san){ 
       alert("Керемет сіз санды таптыңыз!!!") 
     }else if(san < 0 || san > 100){ 
         alert("Қүып кеттіңіз!") 
     }  
      
     else if (num-5<=san && san<=num+5 ){ 
         alert(" Сіз жақындап қалдыңыз:  " ) 
     } 
     
     else{ 
         alert("Сіз алыстап кеттіңіз! ") 
     } 
     } 
  
 } 
 sandar();




















