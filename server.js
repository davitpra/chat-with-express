const express = require ("express")
const router = express.Router();

const app = express ()
app.use(express.json());
app.use(router);

app.use("/", (res,req) => {
    res.send ("hola ")
})

router.get("/", function(req, res){
    res.send("peticion de get");
  });

router.post("/", function(req, res){
    res.send("peticion de post");
  });

router.patch("/",function(req, res){
    res.send("peticion de patch");
  });

router.delete("/",function(req, res){
    res.send("peticion de delete");
  });

app.listen(3000);
console.log(" la aplication esta escuchando en el port http://localhost::3000");