import { AboutUs } from './AboutUs.js'
import { NavigationTabs } from './NavTabs.js'
import { Options } from './Menu.js'
import { Contact } from './Contact.js'
import { HomePage } from './HomePage.js'
import { ResetContent } from './Reset.js'

/* JS for initial page load with nav tabs and homepage */
NavigationTabs.Tabs()
HomePage.Home()

/* Variables for the individual buttons */
const aboutUs = document.querySelector('.aboutUsTab')
const menu = document.querySelector('.menuTab')
const contact = document.querySelector('.contactTab')
const home = document.querySelector('.homeTab')

/* JS for tabbed browsing buttons */
aboutUs.addEventListener('click', () => {
    ResetContent.ClearDiv()
    AboutUs.Description()
})

menu.addEventListener('click', () => {
    ResetContent.ClearDiv()
    Options.Menu()
})

contact.addEventListener('click', () => {
    ResetContent.ClearDiv()
    Contact.ContactUs()
})

home.addEventListener('click', () => {
    ResetContent.ClearDiv()
    HomePage.Home()
})
