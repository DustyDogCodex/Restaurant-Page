import { AboutUs } from './AboutUs.js'
import { NavigationTabs } from './NavTabs.js'
import { Options } from './Menu.js'
import { Contact } from './Contact.js'
import { HomePage } from './HomePage.js'

const aboutUs = document.querySelector('.aboutUsTab')
const menu = document.querySelector('.menuTab')
const contact = document.querySelector('.contactTab')
const home = document.querySelector('.homeTab')

/* JS for initial page load with nav tabs and homepage */
document.addEventListener('DOMContentLoaded', () => {
    NavigationTabs.Tabs()    
    HomePage.Home()
})

/* JS for tabbed browsing buttons */
aboutUs.addEventListener('click', () => {
    AboutUs.Description()
})

menu.addEventListener('click', () => {
    Options.Menu()
})

contact.addEventListener('click', () => {
    Contact.contactUs()
})

home.addEventListener('click', () => {
    HomePage.Home()
})
