import { addingList, tasks } from "./list.js"


const initialRender = () => {
    tasks.forEach((task) => {
        addingList(task);
    });
}

export default initialRender;