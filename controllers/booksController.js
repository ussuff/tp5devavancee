import {Book} from "../models/book.js";

export const createBook = async (req, reply) => {
    try {
        const book = new Book(req.body);
        await book.save();
        reply.code(201).send(book);
    } catch (error) {
        reply.code(400).send(error);
    }
};

export const getAllBooks = async (req, reply) => {
    try {
        const books = await Book.find();
        reply.send(books);
    } catch (error) {
        reply.code(500).send(error);
    }
};

export const getBookById = async (req, reply) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return reply.code(404).send({ message: "Livre pas trouvé" });
        reply.send(book);
    } catch (error) {
        reply.code(500).send(error);
    }
};

export const updateBook = async (req, reply) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) return reply.code(404).send({ message: "Livre pas trouvé" });
        reply.send(book);
    } catch (error) {
        reply.code(400).send(error);
    }
};

export const deleteBook = async (req, reply) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return reply.code(404).send({ message: "Livre pas trouvé" });
        reply.send({ message: "Livre supprimé !" });
    } catch (error) {
        reply.code(500).send(error);
    }
};
