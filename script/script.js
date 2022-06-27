let staff = ["user1", "user2", "user3", "user4"];

for (let i = 0; i < staff.length; i++) {
  const option = document.createElement("option");
  option.setAttribute("value", staff[i]);
  option.textContent = `${staff[i]}`;
  const select = document.querySelector("#name");
  select.appendChild(option);
}

const LSlinea = localStorage.getItem("staff");
const staffJson = JSON.parse(LSlinea);

function createStaffArray() {
  if (localStorage.length != 0) {
    staffClothesSizes = staffJson;
  } else {
    staffClothesSizes = [];
  }
}

createStaffArray();

function getPersonSize() {
  document.querySelector("#submit").addEventListener("click", function (e) {
    e.preventDefault();
    // Get color and quantity of current product
    let name = document.querySelector("#name").value;

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
      nom: name,
      tshirt: tshirtSize,
      pantalon: pantsSize,
      parka: parkaSize,
      polaire: fleeceSize,
      chaussure: shoesSize,
    };

    if (name == "" || tshirtSize == "" || pantsSize == "" || parkaSize == "" || fleeceSize == "") {
      alert("merci de remplir tous les champs");
    } else if (shoesSize > "56" || shoesSize < "38") {
      alert("la pointure de chaussure doit être entre 38 et 56");
    } else if (staffClothesSizes.length == 0) {
      staffClothesSizes.push(personSize);
    } else if (staffClothesSizes.length >= 1) {
      const sameName = staffClothesSizes.find((test) => test.nom == personSize.nom);
      if (sameName == undefined) {
        staffClothesSizes.push(personSize);
      } else if (sameName != undefined) {
        let index = staffClothesSizes.indexOf(sameName);
        staffClothesSizes[index].tshirt = tshirtSize;
        staffClothesSizes[index].pantalon = pantsSize;
        staffClothesSizes[index].parka = parkaSize;
        staffClothesSizes[index].polaire = fleeceSize;
        staffClothesSizes[index].chaussure = shoesSize;
      }
    }
    console.log(staffClothesSizes);

    const staffLinea = JSON.stringify(staffClothesSizes);
    localStorage.setItem("staff", staffLinea);
  });
}

getPersonSize();
