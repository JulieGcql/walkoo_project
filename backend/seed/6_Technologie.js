const models = require('../models');
const Technology = models.Technology;

Technology.bulkCreate([
    {
        title: "Lien direct avec votre audience",
        mediaId: 27,
        description: "Que ce soit dans la rue ou à l’intérieur de bâtiments, la solution WALKOO permet de communiquer avec vos utilisateurs et de mieux les connaître au fil du temps. Un robot conversationnel dédié à votre application maintient un lien personnel et constant avec l’utilisateur même quand il n’utilise pas l’application.",
    },
    {
        title: "Personnalisation des contenus",
        mediaId: 28,
        description: "Grâce à l’approche contextuelle, WALKOO vous aide à déterminer le meilleur moment et le meilleur endroit pour délivrer vos contenus ou vos notifications. Ils ne seront plus jamais perçus comme indésirables ou intempestifs… Au contraire, ils seront attendus, comme on attend les conseils d’un expert ou d’un ami !",
    },
    {
        title: "Ux Design",
        mediaId: 29,
        description: "Nous vous accompagnons à chaque étape de votre projet. Co-construction du cahier des charges, prototypage, développement et phase test : notre expérience de la rédaction de contenus et du design pour l’approche contextuelle permet d’adapter vos contenus aux codes de votre audience et à ses attentes.",
    },
    {
        title: "Votre autonomie",
        mediaId: 26,
        description: "Spécialisée dans quelques secteurs d’activité qu’elle connaît en profondeur, l’équipe de WALKOO met au service de vos projets des années d’expérience, la parfaite connaissance de vos enjeux, ses compétences pluridisciplinaires et sa passion de l’innovation. Elle vous fait bénéficier d’une expertise de sa technologie et de l’approche contextuelle pour vous permettre de gérer rapidement vos contenus en toute autonomie sans surcoût.",
    },

])
    .then((technologies) => {
        console.log(technologies)
    })
    .catch((err) => console.log("Error while create technology : ", err));