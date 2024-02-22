const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.json());

kumar = { power: "karuppu", kumar: "segappu" };

app.listen(PORT, () => console.log(`Running on localhost:${PORT}`));

app.get("/", (req, res) => {
  res.status(200).send({
    kumar,
  });
});

app.get("/healthz", (req, res) => {
  res.status(200).send("Server Is Up and Running.")
})

app.get("/kumar", (req, res) => {
  res.status(200).send("Nee yaaruda komali")
})

app.post("/add/:id", (req, res) => {
  const id = req.params;
  const name = req.body.name;

  console.log(name, id);
  if (!name) {
    res.status(418).send({ message: "Send a name" });
  }

  res.send({
    data: `Added user to strings ${name.toString()}: ${id}`,
  });
});
