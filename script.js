let todo = [];
let addBtn = document.getElementById("addBtn");
let todoItem = document.getElementById("todoItem");
let showErr = document.getElementById("showErr")
let showTodo = document.getElementById("showTodo")


function dispArr() {
    showTodo.innerHTML = "";
    todo.forEach((el, index) => {
        showTodo.innerHTML +=`
        <div id="display">
          <h5>${index} ${el} </h5>
            <div class="btn-div">
                <button id="deleteBtn" onclick='edit(${index})'>Edit</button>         
                <button id="deleteBtn"  onclick='del(${index})'>Delete</button>
            </div>
        </div>         
        `
    })
}
    dispArr();

    function addItems() {
        if (todoItem.value == "") {
            showErr.innerHTML = "Input field cannot be empty";
        }
        else {
            showErr.innerHTML = "Todo successfully added";
            todo.push(todoItem.value);
            dispArr()
        }
    }

function del(index) {
    todo.splice(index,1);
    dispArr()
    
}

// function addItems() {
//     if (input.value === "") {
//         alert("Input Something");
//         return;
//     }
//     else {
//         if (arrayTodo.includes(input.value)) {
//             alert("Items already exist");
//             return;
//         }
//         else {
//             showTodo.innerHTML = "";
//             arrayTodo.push(input.value);
//             arrayTodo.map((arrayElement, index) => {
//                 showTodo.innerHTML += `
//             <div class="display">
//                 <h1 id="arrayItem">${arrayElement}</h1>
//                 <div>
//                     <button id='delete-btn' onclick='edit(${index})'>Edit</button>
//                     <button id='delete-btn' onclick='del(${index})'>Delete</button>
//                  </div>
//             </div>
//             `
//             })
//         }
//     }
// }

// function del(rem) {
//     arrayTodo.splice(rem, 1);
//     showTodo.innerHTML = "";
//     arrayTodo.map((sh, rem) => {
//         console.log(sh, rem);
//         showTodo.innerHTML += `
//     <div class="display">
//         <h1>${sh}</h1>
//         <div>
//             <button id='delete-btn' onclick='edit(${rem})'>Edit</button>
//             <button id='delete-btn' onclick='del(${rem})'>Delete</button>
//           </div>
//     </div>
//     `
//     })
    
// }

// function edit(rem) {
//     arrayTodo.splice(rem, 1, input.value);
//     showTodo.innerHTML = "";
//     arrayTodo.map((sh, rem) => {
//         console.log(sh, rem);
//         showTodo.innerHTML += `
//     <div class="display">
//         <h1>${sh}</h1>
//         <div>
//             <button id='delete-btn' onclick='edit(${rem})'>Edit</button>
//             <button id='delete-btn' onclick='del(${rem})'>Delete</button>
//           </div>
//     </div>
//     `
//     })
// }