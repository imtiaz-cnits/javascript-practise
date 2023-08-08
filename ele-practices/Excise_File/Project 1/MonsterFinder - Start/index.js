// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
import { monsters } from "./monsters.js";
console.log(monsters);

for (let monsterDiv of monsters) {
  showMonster(monsterDiv);
}

function showMonster(monsterDiv) {
  const monster = document.createElement("div");
  monster.className = "monster";

  const img = document.createElement("img");
  img.src = `https://robohash.org/${monsterDiv.id}?set=set2`;
  img.alt = "Kazi Ariyan";

  const mname = document.createElement("p");
  mname.className = "name";
  mname.innerText = monsterDiv.name;

  const email = document.createElement("email");
  email.className = "email";
  email.innerText = monsterDiv.email;

  monster.append(img, mname, email);
  document.querySelector(".monsters").append(monster);
  console.log(monster);
}

showError();
function showError() {
  const notFoundDiv = document.createElement("div");
  notFoundDiv.className = "p-5 not-found";
  notFoundDiv.style.display = "none";

  const span = document.createElement("span");
  span.innerText = "404";

  const h1 = document.createElement("h1");
  h1.innerText = "🧟‍♂️ No Monster Found 🧟‍♂️";

  notFoundDiv.append(span, h1);
  document.querySelector(".monsters").append(notFoundDiv);
  console.log(notFoundDiv);
}

/*
        <div class="p-5 not-found" style="display: none">
          <span>404</span>
          <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
        </div>
*/
