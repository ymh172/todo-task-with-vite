import { updateDoneList, updateList } from "./list.js";
import { listGroup } from "./selector.js";



const observer = () => {
    


    const changes = () => {
        console.log("CHange");
        updateList();
        updateDoneList();
    }

    const observerOption = {
        childList:true,
        subtree:true,
        attributes:true,
    }

    const observer = new MutationObserver(changes);
    observer.observe(listGroup,observerOption);
}

export default observer;