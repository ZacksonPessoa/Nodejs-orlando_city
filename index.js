//importando express
const express = require("express");
//instânciando o express
const app = express();
//integrando o ejs ao express
app.set("view engine","ejs");
//informando ao express onde estão o arquivos estáticos(css,html,etc..)
app.use(express.static("public"));

//intanciando rota principal
app.get("/",(req,res)=>{
    res.render("index")
})



//instanciando servidor
app.listen(4000,(req,res)=>{
    console.log("Servido ativado!")
});