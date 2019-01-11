const models = require('../models');
const Event = models.Event;

Event.bulkCreate([
    {
        type:"salon",
        title:"Forum national RESET, Marseille, 2017",
        description:"",
    },
    {
        type:"salon",
        title:"DLD Innovation Festival, Tel Aviv, 2017 ",
        description:"",
    },
    {
        type:"salon",
        title:"CES Las Vegas, 2018",
        description:"",
    },
    {
        type:"media",
        title:"La Provence, Trophée Médias et Santé, 2016",
        description:"",
    },
    {
        type:"media",
        title:"Azur TV, 2017 ",
        description:"",
    },
    {
        type:"media",
        title:"La Tribune, 2018",
        description:"",
    },
    {
        type:"media",
        title:"French Web, 2018",
        description:"",
    },
])
.then((event) => {
    console.log(event)
})
.catch((err) => console.log("Error while create events : ", err));