let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("a user connected");

  socket.on("message", function(msg) {
    if (msg === "") return;
    io.emit("message", msg);
  });

  socket.on("disconnect", function() {
    console.log("a user disconnected");
  });
});

http.listen(8080, function() {
  console.log("listening on *:8080");
});
