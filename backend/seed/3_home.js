const models = require('../models');
const Home = models.Home;



Home.create({
    
    subtitle: "Walkoo combine la géolocalisation et les sciences du comportement pour renforcer l’engagement de l’utilisateur en maîtrisant le sens du contexte"
})
.then((createdHome) => console.log(createdHome))
.catch((err) => console.log(err))