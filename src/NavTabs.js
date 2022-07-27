class NavigationTabs {
    static Tabs() {
        const content = document.querySelector('#content')
        const tabContainer = document.createElement('div')
        const aboutUs = document.createElement('button')
        const menu = document.createElement('button')
        const contact = document.createElement('button')

        aboutUs.innerText = 'About Us'
        menu.innerText = 'Menu'
        contact.innerText = 'Contact'
        tabContainer.classList.add('tabContainer')
        tabContainer.appendChild(aboutUs)
        tabContainer.appendChild(menu)
        tabContainer.appendChild(contact)
        content.appendChild(tabContainer)
    }
}

export { NavigationTabs } 