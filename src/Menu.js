class Options {
    static Menu() {
        const content = document.querySelector('#content')
        const menuDiv = document.createElement('div')
        const appetizers = document.createElement('div')
        const drinks = document.createElement('div')
        const entrees = document.createElement('div')
        const sweets = document.createElement('div')
        
        appetizers.innerHTML = '<h1>Appetizers</h1> <span>Samosas   $5</span> <span>Bhel Puri   $5</span> <span>Dahi Batata Puri    $5</span>'
        drinks.innerHTML = '<h1>Drinks</h1> <span>Lassi     $5</span> <span>Mango Lassi     $5</span> <span>Soft drink      $3</span>'
        entrees.innerHTML = '<h1>Entrees</h1> <span>Butter Chicken   $15</span> <span>Korma      $15</span> <span>Chana Masala       $15</span> <span>Chole Bhature      $10</span> <span>Dosa   $10</span>'
        sweets.innerHTML = '<h1>Sweets</h1> <span>Gulab Jamun   $5</span> <span>Kheer   $5</span>'

        menuDiv.classList.add('menu')
        menuDiv.appendChild(appetizers)
        menuDiv.appendChild(drinks)
        menuDiv.appendChild(entrees)
        menuDiv.appendChild(sweets)

        content.appendChild(menuDiv)
    }
}

export { Options }