import { deleteList, doneList, editList, updateList, addingList } from "./list.js";
import { listGroup } from "./selector.js";

export const listGroupHandler = (event) => {
  const list = event.target.closest(".list");
  if (event.target.classList.contains("done-check-list")) {
    doneList(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-edit-btn")) {
    editList(event.target.closest(".list").id);
  }
};

export const addingListHandler = () => {
  // addingList(taskInput.value);

  if (taskInput.value.trim()) {
    addingList(taskInput.value);F
  } else {
    alert("you must enter input");
  }
};

export const taskInputHandler = (event) => {
  if (event.key === "Enter") {
    if (taskInput.value.trim()) {
      addingList(taskInput.value);
    } else {
      alert("you must enter input");
    }
  }
};

export const deleteAllHandler = () => {
  const allList = listGroup.querySelectorAll(".list");
  if (window.confirm("Are you sure to delete all list")) {
    allList.forEach((list) => {
      list.remove();
    });
  }
};

export const doneAllHandler = () => {
  const allList = listGroup.querySelectorAll(".list");
  if (window.confirm("Are you sure to done all list")) {
    allList.forEach((list) => {
      list.querySelector(".done-check-list").checked = true;
      doneList(list.id);
    });
  }
};
