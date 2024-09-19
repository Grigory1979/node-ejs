const express = require('express');
const router = express.Router();
const {Book} = require('../../models');

const stor = {
    book: [],
};

[1, 2, 3].map(el => {
    const newBook = new Book(`book ${el}`, `desc book ${el}`);
    stor.book.push(newBook);
});

router.get('/', (req, res) => {
    const {book} = stor;
    res.json(book);
});

router.get('/:id', (req, res) => {
    const {book} = stor;
    const {id} = req.params;
    const idx = book.findIndex(el => el.id === id);

    if (idx !== -1) {
        res.json(book[idx]);
    } else {
        res.status(404);
        res.json("book | not found");
    }
});

router.post('/', (req, res) => {
    const {todo} = stor;
    const {title, desc} = req.body;

    const newTodo = new Todo(title, desc);
    todo.push(newTodo);

    res.json(newTodo);
});

router.put('/:id', (req, res) => {
    const {todo} = stor;
    const {title, desc} = req.body;
    const {id} = req.params;
    const idx = todo.findIndex(el => el.id === id);

    if (idx !== -1) {
        todo[idx] = {
            ...todo[idx],
            title,
            desc,
        };
        res.json(todo[idx]);
    } else {
        res.status(404);
        res.json("todo | not found");
    }
});

router.delete('/:id', (req, res) => {
    const {todo} = stor;
    const {id} = req.params;
    const idx = todo.findIndex(el => el.id === id);

    if (idx !== -1) {
        todo.splice(idx, 1);
        res.json(true);
    } else {
        res.status(404);
        res.json("todo | not found");
    }
});

module.exports = router;