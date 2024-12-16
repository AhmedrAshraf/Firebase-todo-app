import {collection, addDoc, db, onSnapshot, serverTimestamp, query, orderBy,} from './firebase.js'

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
        taskList.innerHTML += `<li>${data.data().value}</li>`
    });

  console.log("Geting data....",  taskList.value);
});
}
getData()
document.getElementById('addTask').addEventListener('click', addTask)