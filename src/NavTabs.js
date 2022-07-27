class NavigationTabs {
    static Tabs() {
        const content = document.querySelector('#content')
        const tabContainer = document.createElement('div')
        const home = document.createElement('button')
        const aboutUs = document.createElement('button')
        const menu = document.createElement('button')
        const contact = document.createElement('button')

        home.innerText = 'Home'
        aboutUs.innerText = 'About Us'
        menu.innerText = 'Menu'
        contact.innerText = 'Contact'
        tabContainer.classList.add('tabContainer')
        tabContainer.appendChild(home)
        tabContainer.appendChild(aboutUs)
        tabContainer.appendChild(menu)
        tabContainer.appendChild(contact)
        content.appendChild(tabContainer)
    }
}

export { NavigationTabs } 