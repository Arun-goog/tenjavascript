function backtohome(){
    firstdisplay.style.display="inline";
    seconddisplay.style.display="inline";
    answerdisplay.style.display="none"
    qns01.style.display= "none";
    qns02.style.display= "none";
    qns03.style.display= "none";
    qns04.style.display= "none";
    qns05.style.display= "none";
    qns06.style.display= "none";
    qns07.style.display= "none";
    qns08.style.display= "none";
    qns09.style.display= "none";
    qns10.style.display= "none";

    cleardata();
    clearanswear();
    displayQnsHeading();
}

function displayQnsHeading(){
    selectheadans.style.display="none";
    selectheadqns.style.display="inline";
}

function dispalyAnsHeading(){
    selectheadans.style.display="inline";
    selectheadqns.style.display="none";
}

function diplayAnsDiv(){
    firstdisplay.style.display="none";
    seconddisplay.style.display="none";
    answerdisplay.style.display="inline";

}

function cleardata(){

    items = [];
    document.getElementById("inputDisplay01").innerHTML='';
    document.getElementById("inputDisplay02").innerHTML='';
    document.getElementById("inputDisplay04").innerHTML='';
    document.getElementById("inputDisplay06").innerHTML='';
    document.getElementById("inputDisplay08").innerHTML='';
    document.getElementById("ans01").innerHTML='';
    document.getElementById("ans02").innerHTML='';
    document.getElementById("ans03").innerHTML='';
    document.getElementById("ans04").innerHTML='';
    document.getElementById("ans05").innerHTML='';
    document.getElementById("ans06").innerHTML='';
    document.getElementById("ans07").innerHTML='';
    document.getElementById("ans08").innerHTML='';
    document.getElementById("ans09").innerHTML='';
    document.getElementById("ans10").innerHTML='';
    
}

function clearanswear(){

    
    document.getElementById("ans01").innerHTML='';
    document.getElementById("ans02").innerHTML='';
    document.getElementById("ans03").innerHTML='';
    document.getElementById("ans04").innerHTML='';
    document.getElementById("ans05").innerHTML='';
    document.getElementById("ans06").innerHTML='';
    document.getElementById("ans07").innerHTML='';
    document.getElementById("ans08").innerHTML='';
    document.getElementById("ans09").innerHTML='';
    document.getElementById("ans10").innerHTML='';
    
    
}


function qnsButtonfxn(ele){   
    
    diplayAnsDiv();
    dispalyAnsHeading();

    var ide=ele.id.split('');
    

    if(ide[ide.length-1]== 1){
        qns01.style.display= "inline";

    }else if(ide[ide.length-1]== 2){
        qns02.style.display= "inline";

    }else if(ide[ide.length-1]== 3){
        qns03.style.display= "inline";

    }else if(ide[ide.length-1]== 4){
        qns04.style.display= "inline";

    }else if(ide[ide.length-1]== 5){
        qns05.style.display= "inline";

    }else if(ide[ide.length-1]== 6){
        qns06.style.display= "inline";

    }else if(ide[ide.length-1]== 7){
        qns07.style.display= "inline";
        console.log("jkm");

    }else if(ide[ide.length-1]== 8){
        qns08.style.display= "inline";

    }else if(ide[ide.length-1]== 9){
        qns09.style.display= "inline";

    }else{
        qns10.style.display= "inline";

    }

    
}





let items=[];

function inputArray(ele){
    var boxide;
    var formide = ele.id.split('') ;

    if(formide[formide.length-1] == 1){
        boxide = "inputBox01";
    }else if(formide[formide.length-1] == 2){
        boxide = "inputBox02";
    }else if(formide[formide.length-1] == 4){
        boxide = "inputBox04";
    } else {
        boxide = "inputBox08";
    }
    
    
    var numdata ='';
    var boxvalue=document.getElementById(boxide).value;
    console.log(boxvalue);
    items.push(boxvalue);
    
    for(i=0;i<items.length;i++){
        numdata += '  '+items[i]+'  ' ;
    }

    if(formide[formide.length-1] == 1){
        document.getElementById("inputDisplay01").innerHTML =numdata;
    }else if(formide[formide.length-1] == 2){
        document.getElementById("inputDisplay02").innerHTML =numdata;
    }else if(formide[formide.length-1] == 4){
        document.getElementById("inputDisplay04").innerHTML =numdata;
    } else {
        document.getElementById("inputDisplay08").innerHTML =numdata;
    }

    return false
}














//001- function on primenumber



function checkprime(){

    var firstelement = 0;
    firstelement = items[0];
    

    if(firstelement==="" || items.length == 0){
    alert("Enter valid Number");
    
    }
    else if(firstelement==="0"){

        document.getElementById("ans01").innerHTML=firstelement +' - is neither Prime nor Composite';

    }else if(firstelement==="1"){
               
        document.getElementById("ans01").innerHTML=firstelement +' - is not a Prime Number';

    }else if(firstelement==="2"){
        
        document.getElementById("ans01").innerHTML=firstelement +' - is a Prime Number';
    }else{
         for(var x=2;x<firstelement;x++)
            {
                if(firstelement%x===0)
                 { 
                     
                     document.getElementById("ans01").innerHTML=firstelement +' - is not a Prime Number';
                     return ;
                }
            }
        
        document.getElementById("ans01").innerHTML=firstelement +' - is a Prime Number';
    }
}



//002- function on frequent number in an array
function checkfrequent(){
    
    var mostFrequent =1;
    var tempCount=0;
    var item;
    if(items.length==0){
        alert("Enter something");
    }

    for(var i=0;i<items.length;i++){
        for(var j=0;j<items.length;j++){
            if(items[i]==items[j])
            tempCount++;
            if(mostFrequent<tempCount){
                mostFrequent=tempCount;
                item=items[i];
            }
        }

        tempCount = 0;
    
    }

    if(item ===""){
        item = "Null"
    }
    
    document.getElementById("ans02").innerHTML='Most frequent element = '+item +'  [ '+mostFrequent +' -times]';


}


//003- swapping case

function swapCase(){

    var inputString ='';
    var newLetters='';

    inputString = document.getElementById('inputBox03').value;

    for(var i=0;i<inputString.length;i++){
        if(inputString[i]===inputString[i].toLowerCase()){
            newLetters += inputString[i].toUpperCase();

        }else {
            newLetters += inputString[i].toLowerCase();
        }
        console.log(newLetters);
    }

    document.getElementById("ans03").innerHTML=newLetters;
    
     
    return false
}




//004- sum of squares

function sumofSquares(){

    var sumSquare=0 ;
    for(i=0;i<items.length;i++){

        sumSquare += items[i]*items[i];
    }

    document.getElementById("ans04").innerHTML=sumSquare;
}

//005-  odd or even 0-15

function findoddeven(){

    var dataprint = 0;

    for(i=0;i<=15;i++){

        if(i===0){
        
        dataprint = i +' is neither even nor odd <br>'       
        
        }else if(i%2===0){
            dataprint += i +' is even <br>'       

        }else{

            dataprint += i +' is odd <br>'
                       
        }
    }
    document.getElementById("ans05").innerHTML=dataprint;
}

//007- Truncate the input string

function truncateFunct(){
    
    var string1 ='';
    var truncString ='';

    string1=document.getElementById('inputBox06a').value;
    length=document.getElementById('inputBox06b').value;
      
    truncString = string1.substring(0,length);

    document.getElementById("ans06").innerHTML=truncString;
    
    return false
}

//007- Find larger number

function findLarge(){
    
    
    var boxvalue01=document.getElementById('inputBox07a').value;
    var boxvalue02=document.getElementById('inputBox07b').value;
    
    

    var largernum = Math.max(boxvalue01,boxvalue02);
        
    document.getElementById("ans07").innerHTML =largernum +" - is Larger";
    
    return false
}

//008- Arrange alphabaticaly


function alphabatical(){

    var alpha ='';

    items.sort();

    for(i=0;i<items.length;i++){
        alpha +=items[i]+' ';
    }

    document.getElementById("ans08").innerHTML= alpha;
}

//009- print java triangle

function trianglejava(){

    var javastring ='javascript';
    var javachar='';

    for(i=0;i<javastring.length;i++){
        
        for(j=0;j<=i;j++){
            javachar += javastring.charAt(j);
        }
        javachar +='\n <br>';
    }
        
    document.getElementById("ans09").innerHTML=javachar;
}


//10- print star pattern
function printPattern(){

    var starpatern='';
    for(i=0;i<8;i++){
        for(j=0;j<=i;j++){
            starpatern += '*';           

        }
        starpatern +='\n <br>';           
    }
    document.getElementById("ans10").innerHTML=starpatern ;
    

    }
