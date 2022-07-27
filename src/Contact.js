class Contact {
    static contactUs() {
        const content = document.querySelector('#content')
        const contactDiv = document.createElement('div')
        const contactInfo = document.createElement('div')
        const socials = document.createElement('div')
        const locationHours = document.createElement('div')

        contactInfo.innerHTML = '<span><em>Telephone:</em> 123-456-7890</span> <span><em>Email:</em> thisisareal@emailaddress.com</span> <span><em>Fax:</em> 098-765-4321</span>'
        socials.innerHTML = '<a href=\'https://www.instagram.com/\' class ="fa fa-instagram"> </a> <a href=\'https://www.twitter.com/\' class ="fa fa-twitter"></a> <a href=\'https://www.facebook.com/\' class ="fa fa-facebook"> </a>'
        locationHours.innerHTML = '<span><em>Address:</em> Street Name, City Name, Zip Code</span> <span><em>Hours:</em> 11am to 8pm</span>'

        contactDiv.appendChild(contactInfo)
        contactDiv.appendChild(locationHours)
        contactDiv.appendChild(socials)

        contactDiv.classList.add('contact')
        socials.setAttribute('id','socials')
        content.appendChild(contactDiv)
    }
}

export { Contact }