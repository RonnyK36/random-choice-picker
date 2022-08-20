const tagsEl = document.getElementById("tags")
const textArea = document.getElementById("textarea")



textArea.focus()
textArea.addEventListener('keyup', (event) => {
    createTags(event.target.value)

    if (event.key == 'Enter') {
        console.log("Enter pressed");
        setTimeout(() => {

            event.target.value = ''
        }, 100);
        randomSelect();

    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== "").map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {

        const tagEl = document.createElement('span')
        tagEl.innerText = tag
        tagEl.classList.add('tag')
        tagsEl.appendChild(tagEl)

    })


}

function randomSelect() {

    const times = 30;
    const interval = setInterval(() => {

        const randomTag = pickRandomTag()
        highLightTag(randomTag)
        setTimeout(() => {
            unHighLightTag(randomTag)
        }, 100);

    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highLightTag(randomTag)
        }, 100);
    }, times * 100);

}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')

    return tags[Math.floor(Math.random() * tags.length)]

}

function highLightTag(tag) {
    tag.classList.add("highlight")
}

function unHighLightTag(tag) {
    tag.classList.remove("highlight")
}