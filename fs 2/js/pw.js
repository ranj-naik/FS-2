    let marks = [];
    let credits = [];
    function getResult() {
  
      let all_marks = Array.from(document.querySelectorAll(".subject"));
     
      all_marks.forEach((node) => {
        marks.push(node.value);
      });

      let all_credits = Array.from(document.querySelectorAll(".credits"));
    
      all_credits.forEach((node) => {
        credits.push(node.value);
      });

      let sum = 0;
      let total_credits = 0;
    
      for (let i = 0; i < 8; i++) {
        sum = sum + marks[i] * credits[i];
        total_credits += parseInt(credits[i]);
      }
     /** const h1 = document.createElement("h1");
      h1.innerText ="SGPA:" + (sum / total_credits); 
      h1.style.textAlign = "center";
      document.body.append(h1); */
      document.getElementById('resultsgpa').value = parseFloat(sum/total_credits).toFixed(2);
    }
    let grades = [];

//error 
/** 
     function getResult2() 
    {
      let all_grades = Array.from(document.querySelectorAll(".semister"));

      all_grades.forEach((node) => {
        grades.push(node.value);
      });
      let sum = 0;
      
      for (let i = 0; i < 8; i++) {
        sum = sum + grades[i] ;
      }
      const h1 = document.createElement("h1");
      h1.innerText ="CGPA:" + ( sum / 8 );
      h1.style.textAlign = "center";
      document.body.append(h1);
    }

*/

    function calc()
    {
var percent,i,credSum=0;

var n1 =(document.getElementById('n1').value);
var n2 =(document.getElementById('n2').value);
var n3 =(document.getElementById('n3').value);
var n4 =(document.getElementById('n4').value);
var n5 =(document.getElementById('n5').value);
var n6 =(document.getElementById('n6').value);
var n7 =(document.getElementById('n7').value);
var n8 =(document.getElementById('n8').value);

var array1 = new Array(8);

array1[0]=parseFloat(n1);
array1[1]=parseFloat(n2);
array1[2]=parseFloat(n3);
array1[3]=parseFloat(n4);
array1[4]=parseFloat(n5);
array1[5]=parseFloat(n6);
array1[6]=parseFloat(n7);
array1[7]=parseFloat(n8);

var oper = document.getElementById('operators').value;
        
        if(oper === '+')
{

if(array1[0]>0)
{credSum+=24;}
if(array1[1]>0)
{credSum+=24;}
if(array1[2]>0)
{credSum+=28;}
if(array1[3]>0)
{credSum+=28;}
if(array1[4]>0)
{credSum+=26;}
if(array1[5]>0)
{credSum+=26;}
if(array1[6]>0)
{credSum+=24;}
if(array1[7]>0)
{credSum+=20;}

var r1 = parseFloat((array1[0]+array1[1])*24+(array1[2]+array1[3])*28+(array1[4]+array1[5])*26+array1[6]*24+array1[7]*20).toFixed(2);

document.getElementById('result').value = parseFloat(r1/credSum).toFixed(2);
var r2 =parseFloat(r1/credSum);                         

document.getElementById('percent').value = parseFloat((r2-0.75)*10).toFixed(2);




   
}
}
    




