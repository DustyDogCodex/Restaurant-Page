import { LoadPage } from './LoadPage.js'
import { NavigationTabs } from './NavTabs.js'
import { Options } from './Menu.js'
import { Contact } from './Contact.js'

document.addEventListener('DOMContentLoaded', function () {
    NavigationTabs.Tabs()    
    LoadPage.WelcomeHeading()
    Options.Menu()
    Contact.contactUs()
})