import fastify from "fastify";
import { userRouter } from "./routes/user-router.js";
import { bookRouter } from "./routes/book-router.js";

const server = fastify()

server.register(userRouter)
server.register(bookRouter)

server.get('/', async (request, reply) => {
    return {

        "users": `${request.protocol}://${request.hostname}:${request.port}/users`,
        "books": `${request.protocol}://${request.hostname}:${request.port}/books`,
    }

});



server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server running`);
});

