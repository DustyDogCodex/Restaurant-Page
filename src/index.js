class LoadPage {
    static WelcomeHeading() {
        const content = document.querySelector('#content')
        const title = document.createElement('h1')
        const titleTagline = document.createElement('h3')
        const para1 = document.createElement('p')
        const para2 = document.createElement('p')
        const para3 = document.createElement('p')
        title.innerText = 'Welcome to the Jade Peacock'
        titleTagline.innerText = 'Where Love can be tasted'
        para1.innerText = 'At the Jade Peacock, our mission is to recreate Indian cuisine far away from home. Our kitchen is lucid, light and dynamic and aims to create meals that restore,challenge and enrich all your senses.'
        para2.innerText = 'We are constantly searching for the aromas and flavors of India. By using freshly sourced quality ingredients and tirelessly perfecting our craft, we aim to represent the best of our country\'s harvest, heritage and love in one plate.'
        para3.innerText = 'Come join us at the Jade Peacock, to share our passion and experience the very best that India has to offer.'
        content.appendChild(title)
        content.appendChild(titleTagline)
        content.appendChild(para1)
        content.appendChild(para2)
        content.appendChild(para3)
    }
}

document.addEventListener('DOMContentLoaded', function () {
        LoadPage.WelcomeHeading()
    })