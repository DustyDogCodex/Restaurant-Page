class ResetContent {
    static ClearDiv() {
        const content = document.querySelector('#content')
        content.innerHTML = ''
    }
}

export { ResetContent }