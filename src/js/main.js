import "./slider"
import modals from "./modules.js/modals";
import tabs from "./modules.js/tabs";
import forms from "./modules.js/forms";
import changeModalState from "./modules.js/changeModalState";
import timer from "./modules.js/timer";


window.addEventListener('DOMContentLoaded', () => {

let modalState = {};
let deadline ='2025-06-01';

changeModalState(modalState)
    modals();
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider','.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState); 
    timer('.container1', deadline);
});