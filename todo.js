import {collection, addDoc, db, onSnapshot, serverTimestamp, query, orderBy, doc, deleteDoc, updateDoc} from './firebase.js'

let taskInput = document.getElementById('taskInput')
let taskList = document.getElementById('taskList')

const addTask = async () =>{
    const docRef = await addDoc(collection(db, "todos"), {
        value: taskInput.value,
        timestamp: serverTimestamp()
      });
      console.log("Document written with ID: ", docRef.id);
      taskInput.value = ''
}

const getData = () =>{
    const q = query(collection(db, "todos"), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        taskList.innerHTML  = ""
        querySnapshot.forEach((data) => {
        taskList.innerHTML += `
        <li id="${data.id}"> ${data.data().value} 
          <span onclick="dltTodo('${data.id}')">Delete todo</span>
          <span onclick="updateTodo('${data.id}')">Update todo</span>
     </li>`
    });

  console.log("Geting data....");
});
}
getData()

document.getElementById('addTask').addEventListener('click', addTask)

window.dltTodo = async(id) => { 
 let result =  confirm("Are you sure you want to delete this todo?")
    if(result === true){
      console.log("deleting....");
      await deleteDoc(doc(db, "todos", id));
    }
}

window.updateTodo = async(id) => {
  let todo = document.getElementById(id)
  
  todo.innerHTML = `<input type="text" id="updateInput" value="${todo.firstChild.nodeValue.trim()}">
  <button onclick="cancle('${id}')">Cancel</button>
  <button onclick="saveTodo('${id}')">Save</button>
  `
  console.log(todo.innerHTML);
}

// cancle todo
window.cancle = (id) =>{
  getData()
}

// saveTodo
window.saveTodo = async(id) =>{
  console.log(id);
  let updateInput = document.getElementById('updateInput').value

  const todoRef = doc(db, "todos", id);
  await updateDoc(todoRef, {
    value: updateInput
  });


  console.log(updateInput, "Updated vallue on firebase"); 
}