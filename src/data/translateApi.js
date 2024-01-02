const data = () => {
    fetch('https://api.sandbox.translated.com/v2/translate')
        .then(res => res.json)
        .then(res => console.log(res))
}

export default data