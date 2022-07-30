class NavigationTabs {
    static Tabs() {
        const content = document.querySelector('.nav')
        const tabContainer = document.createElement('div')
        const home = document.createElement('button')
        const aboutUs = document.createElement('button')
        const menu = document.createElement('button')
        const contact = document.createElement('button')

        home.innerText = 'Home'
        aboutUs.innerText = 'About Us'
        menu.innerText = 'Menu'
        contact.innerText = 'Contact'

        /* classes for each button so I can use JS to identify whihc page the user wants to load */
        home.classList.add('homeTab')
        aboutUs.classList.add('aboutUsTab')
        menu.classList.add('menuTab')
        contact.classList.add('contactTab')

        tabContainer.classList.add('tabContainer')

        tabContainer.appendChild(home)
        tabContainer.appendChild(aboutUs)
        tabContainer.appendChild(menu)
        tabContainer.appendChild(contact)

        content.appendChild(tabContainer)
    }
}

export { NavigationTabs } 