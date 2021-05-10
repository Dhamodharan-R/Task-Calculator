function send(i){
    x=document.getElementById('display');
    switch(i){
        case 0 : x.value +=0; break;
        case 1 : x.value +=1; break;
        case 2 : x.value +=2; break;
        case 3 : x.value +=3; break;
        case 4 : x.value +=4; break;
        case 5 : x.value +=5; break;
        case 6 : x.value +=6; break;
        case 7 : x.value +=7; break;
        case 8 : x.value +=8; break;
        case 9 : x.value +=9; break;

        case '/' : x.value +='/'; break;
        case '*' : x.value +='*'; break;
        case '-' : x.value +='-'; break;
        case '+' : x.value +='+'; break;
        case '.' : x.value +='.'; break;
        
        case '%' : x.value +='%'; break;
        case '' : x.value =''; break;

        case '=' : 
            result = eval(x.value);
            x.value = result;
         break;

        case '1/x' : 
        result = eval(1/x.value);
        x.value = result;
          break;
        
          case 'root' : 
          result = eval(Math.sqrt(x.value));
          x.value = result;
            break;
        
            case 'ce' :
                let arr =x.split('');
                arr.pop();
                result = arr.join('');
                x.value = result;
              break;


    }
}

function ms(){
    let s = document.getElementById('display').value;
    window.localStorage.setItem('MS',s);
}

function mr(){
    let r =document.getElementById('display');
    r.value=localStorage.getItem('MS');
}
function mc(){
     localStorage.removeItem('MS');
}
function mplus(){
    let p =document.getElementById('display').value;
    result = ((+localStorage.getItem('MS')) + (+p));
    let mp =document.getElementById('display');
    mp.value = result;
    window.localStorage.setItem('MS',result);
    //console.log(result);
}
function mminus(){
    let p =document.getElementById('display').value;
    result = ((+localStorage.getItem('MS')) - (+p));
    let mp =document.getElementById('display');
    mp.value = result;
    window.localStorage.setItem('MS',result);
    //console.log(result);
}
function del(){
    let p =document.getElementById('display').value;
    arr =p.split('');
    arr.pop();
    //console.log(arr);
     arrfin=arr.join('');
    //console.log(arrfin);
    let mp =document.getElementById('display');
    mp.value = arrfin;

}

addEventListener('keydown',function(e){
    x = document.getElementById('display');
    //console.log(x.value+e.key);
    let keyNum = (e.key);
   
    if(keyNum == 0 ||keyNum == 1 ||keyNum == 2||keyNum == 3||keyNum == 4||keyNum == 5||keyNum == 6||keyNum == 7||keyNum == 8||keyNum == 9 ||keyNum == '+' ||keyNum == '-'||keyNum == '*'||keyNum == '/'||keyNum == '.'){
        
        x.value +=e.key;   
    }
    else if(keyNum == 'Backspace'){
        del();
    }
    else if(keyNum == 'Delete'){
        send('');
    }
    else if(keyNum == 'Enter'){
        send('=');
    }
    else{
        alert('Only numbers are allowed')
    }
 
})