// if a function is called inside a function and passed by parameter that is callback function 
function welcomeMessage(name, greetHandler) {
    // console.log('Welcome from WelcomeMessage Function');
    greetHandler(name);
    // console.log(name);
}
const name = 'Tom Hanks';
// const name = ['Tom Hanks'];
// const myObj = {name: 'Tom Hanks'};

function greetMorning(name) {
    console.log('Good Morning', name)
}
function greetAfternoon(name) {
    console.log('Good Afternoon', name)
}
function greetEvening(name) {
    console.log('Good Evening', name)
}
welcomeMessage( name,greetMorning);
welcomeMessage( 'Sakib',greetAfternoon);
welcomeMessage( 'Mazid',greetEvening);