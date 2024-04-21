
//user enters the website and sees freelancers for higher
// will need a array called freelancer to make the initail freelancer data 
const currentfreelancers = [
  {
    name: `Alice`,
    occupation: `writer`,
    startingPrice: `30`

  },
  {
    name: `Bob`,
    occupation: `teacher`,
    startingPrice: `50`
  },
  {
    name: `carol`,
    occupation: ` designer`,
    startingPrice: `70`
  }
];


// the user finds a message that displays the avg freelancer price which is 40$
// the alert() method will display a message that will give the starting average starting price 
alert("the average freelancer price is 40$ right now, however this could change")

// new freelancer apper every few seconds and the avg price changes accordingly 
// this array will will insert via DOM
// these will be the data for our new freelancers that pop up every few seconds
const names = ["jake", "jim", "drake", "tom", "don", "ron", "shawn", "bob"];
const occupations = ["game dev", " react dev", "python dev", "api dev", "java dev", "javaScript dev", "writer", " project manager"];
const startingPrices = [40, 50, 55, 79, 24, 29, 36, 55,];
// this will state how many frelancers are displayed on the page
const visableFreelancers = 9;

// render our freelancers array using this function here
availableFreelancers();
// this will give us a random freelancer evry few 6000 mil seconds
const randomFreelancerGenerator = setInterval(randomFreelancer, 6000);

//make a function to use randomFreelancer
function randomFreelancer() {
  const addFreelancerData = {};
  // now we want a random name occupation and price to render to our page
  addFreelancerData.name = names[Math.floor(Math.random() * names.length)];

  addFreelancerData.occupation = occupations[Math.floor(Math.random() * occupations.length)];

  addFreelancerData.startingPrice = startingPrices[Math.floor(Math.random() * startingPrices.length)];

  // we want to push our random freelancer data to our current freelancers array 
  currentfreelancers.push(addFreelancerData);

  //now we want to force our render freelancers to update with availableFreelancers;
  availableFreelancers();
  // we only want a certain number of frelancers to be on our page at once so we will use .length===visableFreelancers
  if (currentfreelancers.length === visableFreelancers) {
    // this will stop our setInterval from running once the limit is hit
    clearInterval(randomFreelancerGenerator);
  }
}

// create a avergae cost of the freelnacers

function averagePrice () {
  return currentfreelancers.reduce ((totalCosts, eachFreelancer) =>
  (totalCosts + eachFreelancer.startingPrice), 0) / currentfreelancers.length;
 
}


// now we want to make a function that will show our freelancer on the page

function availableFreelancers () {
  //now we want to establish a connection to the dom for both of our IDS
  const tableDOM = document.querySelector(`#mainTable`);
  const averagePriceDOM = document.querySelector(`#AveragePrice`);

  const newFreelancerData = currentfreelancers.map ((eachRow) => {
    const freelancerRow = document.createElement('tr')

    const nameRow = document.createElement('td');
     nameRow.innerText = eachRow.name;
    console.log(nameRow)
     const occupationRow = document.createElement('td');
     occupationRow.innerText = eachRow.occupation;

     const priceRow = document.createElement('td');
     priceRow.innerText = eachRow.startingPrice;


     freelancerRow.appendChild(nameRow);
     freelancerRow.appendChild(occupationRow);
     freelancerRow.appendChild(priceRow);
     return freelancerRow;
  })
  tableDOM.replaceChildren(...newFreelancerData);
  averagePriceDOM.innerText = averagePrice();
}