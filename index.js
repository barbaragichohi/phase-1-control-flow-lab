function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return 'This one is on me!';
  }
  else if (feet > 2000 && feet <= 2499) {
    return 'I will gladly take your thirty bucks.';
  }else {
    return 'No can do.';
  }
}


function ternaryCheckCity(city) {
  if(city === 'NYC') {
    return 'Ok, sounds good.';
}else {
  return 'No go.';
}
}
  


function switchOnCharmFromTip(say){
  if (say ==='generous') {
    return 'Thank you so much.';
  }else if (say ==='not as generous') {
    return 'Thank you.'; 
  }else {
    return 'Bye.';
  }
  }