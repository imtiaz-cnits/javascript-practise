// DOM - Document Object Model

let tbody = document.querySelector("tbody");

console.log(tbody);
console.log(tbody.children);
console.log(tbody.children[2]);
console.log(tbody.childElementCount);

tbody.children[1].innerHTML = "<span>This is new post</span>";

console.log(tbody.firstElementChild);
console.log(tbody.lastElementChild);

/*
<tr>
    <td class="post">post 1</td>
        <td>
            <span class="fa fa-times float-right pr-3"></span>
        </td>
</tr>
*/

// Creating elements with DOM
const tr = document.createElement("tr");
const td1 = document.createElement("td");

td1.className = "post";
td1.innerText = "post 6";
td1.id = "post-id";
td1.setAttribute("title", "post-title-6");

console.log(td1);

const td2 = document.createElement("td");
const span = document.createElement("span");

span.className = "fa fa-times float-right pr-3";
td2.append(span);

console.log(td2);

tr.append(td1, td2);
console.log(tr);

document.querySelector("tbody").append(tr);
