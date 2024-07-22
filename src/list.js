import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';


export const tasks = ["Hello", "AA", "BB"];

export const updateList = () => {
  const lists = document.querySelectorAll(".list");

  undoneTask.innerText = lists.length;;
};

export const updateDoneList = () => {
  const doneLists = document.querySelectorAll(".list input:checked");
  doneTask.innerText = doneLists.length;
};

//creating list structure
export const createList = (currentTask) => {
  const list = listTemplate.content.cloneNode(true);
  list.querySelector(".list").id = "list" + uuidv4();
  list.querySelector(".list-task").innerText = currentTask;

  return list;
};

//Delete List
export const deleteList = (listId) => {
  // console.log("u del");
  const currentList = document.querySelector(`#${listId}`);
  // console.log(currentList);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      currentList.classList.add("animate__animated", "animate__zoomOut");
      currentList.addEventListener("animationend", () => {
        currentList.remove();
      });
    }
  });
};

//Edit List
export const editList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const doneCheckList = currentList.querySelector(".done-check-list");
  const listTask = currentList.querySelector(".list-task");
  const editBtn = currentList.querySelector("#editBtn");
  editBtn.setAttribute("disabled", true);
  doneCheckList.setAttribute("disabled", true);

  const newInput = document.createElement("input");
  newInput.className =
    "border border-stone-950 px-1 py-1 focus-visible:outline-none font-mono w-[150px] disabled:opacity-20";

  listTask.after(newInput);

  listTask.classList.add("hidden");

  const taskValue = listTask.innerText;

  newInput.value = taskValue;
  newInput.focus();

  newInput.addEventListener("blur", () => {
    const editValue = newInput.value;
    listTask.innerText = editValue;
    newInput.classList.add("hidden");
    listTask.classList.remove("hidden");
    editBtn.removeAttribute("disabled");
    doneCheckList.removeAttribute("disabled");
  });
};

export const doneList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const doneCheckList = currentList.querySelector(".done-check-list");
  const listTask = currentList.querySelector(".list-task");
  const editBtn = currentList.querySelector("#editBtn");

  // updateDoneList();
  listTask.classList.toggle("line-through");
  currentList.classList.toggle("opacity-50");
  currentList.classList.toggle("scale-95");
  currentList.classList.toggle("duration-200");
  if (doneCheckList.checked) {
    editBtn.setAttribute("disabled", true);
  } else {
    editBtn.removeAttribute("disabled");
  }
};

export const addingList = (text) => {
    listGroup.append(createList(text));
    taskInput.value = null;
    // updateList();
  };