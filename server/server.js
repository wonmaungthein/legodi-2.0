"use strict";

const Hapi = require("hapi");

// Create a server with a host and port
const server = Hapi.server({
  host: "localhost",
  port: 8000
});

// Add the route
server.route({
  method: "GET",
  path: "/",
  handler: function(request, h) {
    return "Legodi server"
  }
});

// Add Categories route

server.route({
  method: "GET",
  path: "/categories",
  handler: function(request, h) {
    return [
      { name: "Sport" },
      { name: "Parks" },
      { name: "Food" },
      { name: "Shopping" },
      { name: "Welcome" },
      { name: "Asylum" }
    ];
  }
});

// Start the server
async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
}

start()

module.exports = server;