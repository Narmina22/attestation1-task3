class Message {
    constructor(author, time, text) {
        this.author = author;
        this.time = time;
        this.text = text;
    }
    toHtml () {
        return `<p>${this.time} ${this.author} : ${this.text}</p>`;
    }
}
class Messenger {
    constructor() {
        this.history = [];
    }
    show_history() {
        this.history.forEach( item => {
            return(item.toHtml());
        })
    }
    send(author, text) {

        let line = new Message(author, gettime(), text);
        this.history.push(line);
    }
}

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
document.querySelector('.btn btn-send').addEventListener('click', event => {
    messenger.send()
})

document.querySelector('.btn btn-show').addEventListener('click', event => {
    messenger.show_history()
})

let messenger = new Messenger()

messenger.show_history()