const express = require("express");
const app = express();
const PORT = 8080;

// MIDDLEWARE
app.use(express.json());

kumar = { power: "karuppu", kumar: "segappu" };

app.listen(PORT, () => console.log(`Running on localhost:${PORT}`));

app.get("/", (req, res) => {
  res.status(200).send({
    kumar,
  });
});

app.post("/add", (req, res) => {
  const id = req.params.q;
  const name = req.body;

  console.log(name, id);
  if (!name) {
    res.status(418).send({ message: "Send a name" });
  }

  res.send({
    data: `Added user to strings ${name.toString()}: ${id}`,
  });
});
