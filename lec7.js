let a = prompt("Hey , what's your age?");
a = Number.parseInt(a); 
console.log(typeof a);
if(a<0){
    alert("This is a invalid age");
}
else if(a<9){
    alert("You are a kid");
}
else if(a<18 && a>=9){
    alert("You are a teenager");
}
else{
    alert("You are a adult");
}

