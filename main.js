import ToDo from "./src/ToDo";
import "./style.css";
import "./node_modules/animate.css/animate.min.css";
import { v4 as uuidv4 } from 'uuid';

const app = new ToDo();
app.init();

console.log(uuidv4());