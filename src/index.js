import { LoadPage } from './LoadPage.js'
import { NavigationTabs } from './NavTabs.js'
import { Options } from './Menu.js'
import { Contact } from './Contact.js'
import { HomePage } from './HomePage.js'

document.addEventListener('DOMContentLoaded', function () {
    NavigationTabs.Tabs()    
    HomePage.Home()
    LoadPage.WelcomeHeading()
    Options.Menu()
    Contact.contactUs()
})