// Code your solutions in this file



function writeCards(names,eventName){
for( let i=0;i<=names.length-1;i++){

  names[i] = [ ` Thank you ${names[i]} for the ${eventName} gift`];
}
return names;
}
writeCards(["Ada","Brendan","Ali"],"surprise");
