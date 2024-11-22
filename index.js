function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const rootContainer = document.getElementById("root");
  /**
   * 👉 STEP 2:
   *    Create a new h1 element that says "Freelancer Forum"
   *    Add the new h1 to the root div
   */
  const heading = document.createElement("h1");
  heading.textContent = "Freelancer Forum";
  rootContainer.appendChild(heading);

  const h2 = document.createElement("table");
  h2.textContent = "The Average starting price is $30";
  root.appendChild(h2);

  const availableh1 = document.createElement("h1");
  availableh1.textContent = "Available Freelancers";
  root.appendChild(availableh1);
  /**
   * 👉 STEP 3:
   *    Create a table to hold our Freelancers in
   */

const table = document.createElement("table");
root.appendChild(table);


  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   * 
   */
}

/**
 * 👉 STEP 4:
 *    Create a function to render the names in our name array
 * 
 */
function freeRender(){
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);


// hold freelancers
  const freeRow = doucment.createElement("tr");

  // textcontent goes here
  const freelancers = documnt.createElement("td");

// this is name, occupation, price
  const nameColumn1 = document.createElement("th");
  nameColumn1.textContent = "Name";
  tbody.appendChild(nameColumn1);


  const jobColumn2 = document.createElement("th");
jobColumn2.textContent = "Occupation";
tbody.appendChild(jobColumn2);


  const priceColumn3 = document.createElement("th");
  priceColumn3.textContent = "Price"; 
  tbody.appendChild(priceColumn3);


}

/**
 * 👉 STEP 6:
 *    Create a function to add a new Freelander the Freelancer array
 */
function addNewFreelancer(freelancers){
  
}

/**
 * 👉 STEP 7:
 *    Add an interval to add a new FreeLancer every second
 * 
 */
function addFreelancerInterval()
let indec = freelances.length + 1;
const {name, occupation, starting price} = generateFreelancerData(index);
addFreelancer{name, occupation, starting price};
//call init function
init();
freeRender();