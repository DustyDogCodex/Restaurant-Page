class HomePage {
    static Home() {
        const content = document.querySelector('#content')
        const homeDiv = document.createElement('div')
        const homeHeading = document.createElement('h1')
        const tagline = document.createElement('h3')

        homeHeading.innerText = 'Welcome to the Jade Peacock'
        tagline.innerText = 'A taste of home, far away from home'

        homeHeading.classList.add('home')
        tagline.classList.add('homeTagline')

        homeDiv.appendChild(homeHeading)
        homeDiv.appendChild(tagline)

        content.appendChild(homeDiv)
    }
}

export { HomePage }