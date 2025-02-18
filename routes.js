import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from "./controllers/booksController.js";

export async function routes(fastify, options) {
    fastify.post("/books", createBook);
    fastify.get("/books", getAllBooks);
    fastify.get("/books/:id", getBookById);
    fastify.put("/books/:id", updateBook);
    fastify.delete("/books/:id", deleteBook);
}

