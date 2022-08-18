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
  let value = (city === "NYC") ? "Ok, sounds good." : "No go.";
return value;
}


const tip = 'generous';
function switchOnCharmFromTip(tip){
  switch (tip) {
    case  'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default: 
      return 'Bye.'  
    }
  }


  