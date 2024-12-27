"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hono_1 = require("hono");
var node_server_1 = require("@hono/node-server");
var next_1 = require("next");
var server = new hono_1.Hono();
var app = (0, next_1.default)({ dev: process.env.NODE_ENV !== 'production' });
var handle = app.getRequestHandler();
app.prepare().then(function () {
    server.get('*', function (c) { return handle(c.env.incoming, c.env.outgoing); });
});
(0, node_server_1.serve)({
    hostname: "localhost",
    port: 9000,
    fetch: server.fetch,
}, function (info) {
    console.log("Listening on http://".concat(info.address, ":").concat(info.port));
});
