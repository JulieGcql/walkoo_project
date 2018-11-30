const models = require('./models');
const Media = models.Media;
const Card = models.Card;
const Section = models.Section;
const Subscriber = models.Subscriber
const Configuration = models.Configuration


// Subscriber.bulkCreate([
//   {
//   firstName: 'Patrick',
//   companyName: 'PoleLemploupe',
//   email: 'letoile@deleau.com',
//   phone: '0987654321',
//   activitySector: 'Chomdu',
//   requestDemo: false,
//   message: "Hello i'm Patrick ! Fuck your demo !"
//   },
//   {
//   firstName: 'Bob',
//   companyName: 'CroustyCrab',
//   email: 'jeponge@deleau.com',
//   phone: '0123456789',
//   activitySector: 'Restauration',
//   requestDemo: true,
//   message: "Hello i'm Bob ! I want your demo !"
//   },
//   {
//   firstName: 'Carlo',
//   companyName: 'CroustyCrab',
//   email: 'poulpy@poulpa.com',
//   phone: '012121212',
//   activitySector: 'Restauration',
//   requestDemo: false,
//   message: "Hello i'm Carlo !"
//   }
// ])
// .then((subscribers) => {
//   console.log(subscribers)
// })
// .catch((err) => console.log("Error while Subscribers creation", err))
