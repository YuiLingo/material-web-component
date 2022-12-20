import {
    MDCDrawer
} from "@material/drawer";
import {
    MDCRipple
} from '@material/ripple';
import {
    MDCList
} from '@material/list';
import {
    MDCTopAppBar
} from '@material/top-app-bar';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const iconButtonRipple = new MDCRipple(document.querySelector('.topAppRipple'));
iconButtonRipple.unbounded = true;

// Instantiation drawer, add action to hamburger button to open drawer

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

const drawerTriggerBtn = document.getElementById('drawerTrigger')
drawerTriggerBtn.addEventListener('click', () => {
    // Set the draw to whatever state it was not in last
    drawer.open = !drawer.open;
});

// Instantiation list, add ripple effect to list items
const list = new MDCList(document.querySelector('.drawerNav'));
const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));