let personSizeArray = [];

function getPersonSize() {
  document.querySelector("#submit").addEventListener("click", function (e) {
    e.preventDefault();
    // Get color and quantity of current product
    let lastName = document.querySelector("#lastName").value;

    let firstName = document.querySelector("#firstName").value;

    const tshirtSizeInput = document.getElementById("tshirtSize");
    let tshirtSize = tshirtSizeInput.options[tshirtSizeInput.selectedIndex].value;

    const pantsSizeInput = document.querySelector("#pantsSize");
    let pantsSize = pantsSizeInput.options[pantsSizeInput.selectedIndex].value;

    const parkaSizeInput = document.querySelector("#parkaSize");
    let parkaSize = parkaSizeInput.options[parkaSizeInput.selectedIndex].value;

    const fleeceSizeInput = document.querySelector("#fleeceSize");
    let fleeceSize = fleeceSizeInput.options[fleeceSizeInput.selectedIndex].value;

    let shoesSize = document.querySelector("#shoesSize").value;

    let personSize = {
      prénom: firstName,
      nom: lastName,
      tshirt: tshirtSize,
      pantalon: pantsSize,
      parka: parkaSize,
      polaire: fleeceSize,
      chaussure: shoesSize,
    };
    console.log(personSize);

    personSizeArray.push(personSize);
    console.log(personSizeArray);
  });
}

getPersonSize();
