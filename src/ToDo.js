import initialRender from "./initialRender.js";
import { addingList, tasks } from "./list.js";
import listener from "./listener.js";
import observer from "./observer.js";

class ToDo{
    init(){
        // tasks.forEach((task) => {
        //     addingList(task);
        // })
        observer();
        initialRender();
        listener();
        
    }
}

export default ToDo;