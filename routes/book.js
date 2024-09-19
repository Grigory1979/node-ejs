const express = require('express');
const router = express.Router();
const {Book} = require('../models');

const stor = {
    book: [],
};

[1, 2, 3].map(el => {
    const newBook = new Book(`book ${el}`, `desc book ${el}`);
    stor.book.push(newBook);
});

router.get('/', (req, res) => {
    const {book} = stor;
    res.render("book/index", {
        title: "BOOK",
        todos: book,
    });
});

router.get('/create', (req, res) => {
    res.render("book/create", {
        title: "BOOK | create",
        book: {},
    });
});

router.post('/create', (req, res) => {
    const {book} = stor;
    const {title, desc} = req.body;

    const newBook = new Book(title, desc);
    todo.push(newBook);

    res.redirect('/book')
});

router.get('/:id', (req, res) => {
    const {book} = stor;
    const {id} = req.params;
    const idx = book.findIndex(el => el.id === id);

    if (idx !== -1) {
        res.render("book/view", {
            title: "BOOK | view",
            todo: book[idx],
        });
    } else {
        res.status(404).redirect('/404');
    }
});

router.get('/update/:id', (req, res) => {
    const {book} = stor;
    const {id} = req.params;
    const idx = book.findIndex(el => el.id === id);

    if (idx !== -1) {
        res.render("book/update", {
            title: "BOOK | view",
            book: book[idx],
        });
    } else {
        res.status(404).redirect('/404');
    }
});

router.post('/update/:id', (req, res) => {
    const {book} = stor;
    const {id} = req.params;
    const {title, desc} = req.body;
    const idx = book.findIndex(el => el.id === id);

    if (idx !== -1) {
        book[idx] = {
            ...book[idx],
            title,
            desc,
        };
        res.redirect(`/book/${id}`);
    } else {
        res.status(404).redirect('/404');
    }
});

router.post('/delete/:id', (req, res) => {
    const {book} = stor;
    const {id} = req.params;
    const idx = book.findIndex(el => el.id === id);

    if (idx !== -1) {
        book.splice(idx, 1);
        res.redirect(`/book`);
    } else {
        res.status(404).redirect('/404');
    }
});

module.exports = router;