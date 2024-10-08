const uidGenerator = require('node-unique-id-generator');

class Book {
    constructor(title = "", desc = "", id = uidGenerator.generateUniqueId()) {
        this.title = title;
        this.desc = desc;
        this.id = id;
    }
}

module.exports = Book;