import Data from "./data.js";
import Home from "./home.js";


const data = new Data();

const home = new Home(data);
home.render();


