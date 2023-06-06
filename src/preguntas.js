//En esto vamos a crear un quiz de preguntas vamos a crear un array de preguntas

const preguntas = [
  {
    titulo: "¿Cual es el mejor lenguaje de programacion?",
    opciones: [
      { textoRespuesta: "Javascript", isCorrect: true },
      { textoRespuesta: "PHP", isCorrect: false },
      { textoRespuesta: "C++", isCorrect: false },
      { textoRespuesta: "Kotlin", isCorrect: false },
    ],
  },
  {
    titulo: "¿Cual es la capital de colombia ??",
    opciones: [
      { textoRespuesta: "Bogota", isCorrect: true },
      { textoRespuesta: "Armenia", isCorrect: false },
      { textoRespuesta: "Choco", isCorrect: false },
      { textoRespuesta: "Sevilla", isCorrect: false },
    ],
  },

  {
    titulo: "¿Como se llama mi perra ??",
    opciones: [
      { textoRespuesta: "Kaira", isCorrect: true },
      { textoRespuesta: "Chaqui", isCorrect: false },
      { textoRespuesta: "Coco", isCorrect: false },
      { textoRespuesta: "seli", isCorrect: false },
    ],
  },

  {
    titulo: "¿Como se llama mi madre ??",
    opciones: [
      { textoRespuesta: "Adriana", isCorrect: true },
      { textoRespuesta: "Marina", isCorrect: false },
      { textoRespuesta: "Gloria", isCorrect: false },
      { textoRespuesta: "Maria", isCorrect: false },
    ],
  },
];
export default preguntas;
