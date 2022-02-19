import { setupServer } from "msw/node";
import handlers from "./handlers";

// With this line the server can use the handler
// to manage the false  requests of the tests

export const server = setupServer(...handlers);
