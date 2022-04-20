const express = require ('express');
const app = express();

const db = require("./src/lib/db")

const {authHandler} = require("./src/middlewares/authHandlers")

const port = 8000

//const productsRouter = require("./src/routes/products")

const apiRouter = require("./src/routes");

app.use(express.json());

//app.use(authHandler);

apiRouter(app);

//app.use("/products", productsRouter)

// app.post("/", (req, res) => {
//     console.log(req.body);

//     res.json({
//         message: "Objeto creado",
//         succes: true,
//         payload: req.body
//     });
// });

// app.get("/", (req, res) => {
//     res.json({
//         message:"Hello",
//         status:"ok",
//         data:{
//             name:"Gustavo"
//         }
//     })
// });

// app.get("/home", (req, res) => {
//     res.send("Hello Home")
// });

app.listen(port, () => {
    console.log("Listening on port: 8000");
  
    db.connect()
      .then(() => {
        console.log("DB connected");
      })
      .catch((err) => {
        console.log("Connection refused:", err);
      });
  });