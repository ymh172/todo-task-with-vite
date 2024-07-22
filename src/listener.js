import {
  addingListHandler,
  deleteAllHandler,
  doneAllHandler,
  listGroupHandler,
  taskInputHandler,
} from "./handler.js";
import {
  addTaskBtn,
  deletAll,
  doneAll,
  listGroup,
  taskInput,
} from "./selector.js";

const listener = () => {
  addTaskBtn.addEventListener("click", addingListHandler);
  listGroup.addEventListener("click", listGroupHandler);
  taskInput.addEventListener("keyup", taskInputHandler);
  deletAll.addEventListener("click", deleteAllHandler);
  doneAll.addEventListener("click", doneAllHandler);
};

export default listener;
