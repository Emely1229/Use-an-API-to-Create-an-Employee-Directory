let employees= [];
const urlAPI = `https://randomuser.me/api/?restulst=12&nat=US&inc=name,picture,email,location,phone,dob`
const gridContainer = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");

fetch(urlAPI)
  .then(res => res.json())
  .then(res => console.log(res))
  .then(res => res.results)
  .then(displayEmployees)
  .catch(err => console.log(err))

  function displayEmployees(employeeData) {
      employees = employeeData;
      //store the employee HTML
      let employeeHTML = '';

      //loop through each employee and create HTML markup
      employees.forEach((employee, index) => {
          
      }
  });