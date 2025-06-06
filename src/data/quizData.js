// Funcionamiento del JS, para el "Cuestionario de preguntas":

// Este archivo contiene las preguntas del quiz, las opciones de respuesta y los resultados basados en las puntuaciones obtenidas.

export const questions = [
    {
        id: 1,
        question: "Estás en un asado y se arma el karaoke. ¿Tu momento es...?",
        options: [
            { text: "Canto bajito un 'Tralala', que no me escuche nadie.", score: 1 },
            { text: "¡Me sumo con un grito tipo 'Bombardinooo!', pura potencia.", score: 2 },
            { text: "Elijo un tema melódico, un 'Lirili Larila' para los dolidos.", score: 3 },
            { text: "Clavo un hitazo con pasito incluido, modo 'Tung Tung Sahur' activado.", score: 4 },
            { text: "Pongo un remix de cumbia y trap, ¡el show tiene que empezar!", score: 5 }
        ]
    },
    {
        id: 2,
        question: "Te toca ponerle música a una mateada con amigos. ¿Qué suena?",
        options: [
            { text: "¿Música? Prefiero el silencio, o el cantito de los pájaros. Un 'tralala' natural.", score: 1 },
            { text: "Cumbia de la buena, bien fuerte, que se escuche hasta en la casa del vecino.", score: 2 },
            { text: "Indie nacional, algo tranqui pero con onda, que invite a la charla.", score: 3 },
            { text: "El último remix viral que está rompiéndola, bien arriba.", score: 4 },
            { text: "Una playlist de cuarteto que levante hasta el más empanado.", score: 5 }
        ]
    },
    {
        id: 3,
        question: "Vas a la cancha a ver a tu equipo. ¿Cuál es tu cábala principal?",
        options: [
            { text: "Ir con la misma remera desgastada de hace 20 años.", score: 1 },
            { text: "Llevar una corneta que suene más fuerte que la hinchada visitante.", score: 2 },
            { text: "Repetir mentalmente una canción que nos dio suerte una vez.", score: 3 },
            { text: "Inventar un nuevo cántico cada partido, con un ritmo que contagie.", score: 4 },
            { text: "Hacer una performance con banderas y bengalas (¡con cuidado!) antes de que empiece el partido.", score: 5 }
        ]
    },
    {
        id: 4,
        question: "Te encontrás $20000 en la calle. ¿Qué es lo primero que se te cruza por la cabeza?",
        options: [
            { text: "Upa, para la sube y un pancho.", score: 1 },
            { text: "¡Asado improvisado con los pibes esta noche!", score: 2 },
            { text: "Podría comprarme ese libro que vengo ojeando.", score: 3 },
            { text: "Lo invierto en alguna memecoin a ver si se va a la luna.", score: 4 },
            { text: "Lo pongo en ahorros, y la otra para ir al casino a jugármela.", score: 5 }
        ]
    },
    {
        id: 5,
        question: "Llega la hora de la siesta en un día de calor y... ¿qué haces?",
        options: [
            { text: "Me pongo unos auriculares y escucho ASMR de grillos para relajarme.", score: 1 },
            { text: "Un partido de truco virtual o una partida rápida al PES con los pibes.", score: 2 },
            { text: "Agarro la criolla y me pongo a zapar unos acordes, tranqui, para no molestar.", score: 3 },
            { text: "Me armo un TikTok de esos que te hacen reír solo, con un filtro bizarro y música pegadiza.", score: 4 },
            { text: "¡Cierro los ojos y me imagino que estoy en la cancha, gritando un gol al ritmo del bombo!", score: 5 }
        ]
    }
];

// Funcionamiento del JS, para el "Resultados del cuestionario":
// Este archivo contiene los resultados del quiz, que se muestran al usuario según la puntuación obtenida en las respuestas.
export const results = [
    {
        minScore: 21,
        maxScore: 25,
        name: "Tung Tung Tung Tung Sahur",
        description: "¡Sos pura energía y vibración! Donde llegás, se arma la fiesta. Te encanta estar en el centro de la atención y contagiar tu entusiasmo. Tu ritmo es imparable y tu presencia, inconfundible.",
        imagePath: "/images/tung-tung.jpg" 
    },
    {
        minScore: 16,
        maxScore: 20,
        name: "Balerina Capuchina",
        description: "Tenés una onda única, una mezcla de elegancia y un toque de excentricidad. Sos creativo, te gusta lo viral y sabes cómo llamar la atención de una manera original y divertida. Nunca pasas desapercibido.",
        imagePath: "/images/ballerina.jpg" 
    },
    {
        minScore: 11,
        maxScore: 15,
        name: "Lirili Larila",
        description: "Tu onda es más tranqui, melódica y profunda. Disfrutás de las conversaciones con sustancia y los momentos de conexión real. Sos el amigo que siempre tiene una buena playlist o una reflexión interesante.",
        imagePath: "/images/lirili.jpg" 
    },
    {
        minScore: 6,
        maxScore: 10,
        name: "Bombardino Cocodrilo",
        description: "Sos el que le mete potencia y volumen a todo. No te andás con chiquitas, cuando te prendés, se nota. Tu entusiasmo es ruidoso y directo, te gusta ir al frente y que tu presencia se haga sentir.",
        imagePath: "/images/bombardino.jpg" 
    },
    {
        minScore: 5,
        maxScore: 5,
        name: "Tralalero Tralala",
        description: "Sos el más discreto, el que prefiere pasar desapercibido. Disfrutás de la calma, la naturaleza y los momentos de paz. Tu presencia es sutil, pero esencial para el equilibrio del grupo. Sos el oasis en medio del bullicio.",
        imagePath: "/images/tralala.jpg" 
    }
];