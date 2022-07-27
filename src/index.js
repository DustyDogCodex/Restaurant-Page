import { LoadPage } from './LoadPage.js'
import { NavigationTabs } from './NavTabs.js'
import { Options } from './Menu.js'

document.addEventListener('DOMContentLoaded', function () {
    NavigationTabs.Tabs()    
    LoadPage.WelcomeHeading()
    Options.Menu()
})