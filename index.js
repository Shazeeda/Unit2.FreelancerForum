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
  /**
   * 👉 STEP 3:
   *    Create a table to hold our Freelancers in
   */

  const table = document.createElement("table");
  const coll = document.createElement("td");
  col1.textContent = "Name";
  table.appendChild(col1);

  const tr1 = document.createElement("tr");
  tr1.textContent = "Bob";
  table.appendChild(tr1);

  rootContainer.appendChild(table);

  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */
}

/**
 * 👉 STEP 4:
 *    Create a function to render the pets in our pets array
 */

/**
 * 👉 STEP 6:
 *    Create a function to add a new pet to the pets array
 */

/**
 * 👉 STEP 7:
 *    Add an interval to add a new pet every second
 */

//call init function
init();
