var wrapper=document.createElement('div');
wrapper.setAttribute('class','wrapping');

var header=document.createElement('h1');
header.setAttribute('class','heading');
header.innerText="Number Game";

var container=document.createElement('div');
container.setAttribute('class','contain');


document.body.append(wrapper);
wrapper.append(header);
wrapper.append(container);

randomer();

function randomer(){
    var a=[];
    var flag=0;
    a[0]=Math.floor(Math.random()*8)+1
    for(var i=0;a.length<9;i++){
        var ip=Math.floor(Math.random()*9)+1;
        for(var j=0;j<a.length;j++){
            if(a[j]==ip){
                flag=1;
            }
        }
        if(flag==0){
            a.push(ip);
        }
        else{
            flag=0;
            continue;
        }
        flag=0;
    }
    console.log(a);
    var counter=0;
  for(var j=0;j<a.length;j++){
      if(counter%3==0){
          var breaker=document.createElement('br');
          container.append(breaker);
      }
      var imgur=document.createElement('img');
      imgur.setAttribute('class','imgur');
      imgur.setAttribute('src',"assets/b"+a[j]+".gif");
      container.append(imgur);
      counter++;
  } 
}

var imaged=document.getElementsByClassName('imgur');
imaged[2].setAttribute('style','display:none');
