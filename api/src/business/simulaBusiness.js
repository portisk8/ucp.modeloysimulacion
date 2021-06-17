export const actividadDiariaTipo = {
  1: {
    value: 1.2,
    description: "Poco o ningún ejercicio",
    urlImage:
      "https://image.shutterstock.com/image-photo/handsome-stylish-young-man-sitting-260nw-792091585.jpg",
  },
  2: {
    value: 1.375,
    description: "Ejercicio ligero (1 a 3 días a la semana)",
    urlImage:
      "https://st4.depositphotos.com/1007919/25366/i/600/depositphotos_253663300-stock-photo-hipster-man-walking-in-the.jpg",
  },
  3: {
    value: 1.55,
    description: "Ejercicio moderado (3 a 5 días a la semana)",
    urlImage:
      "https://images-ext-2.discordapp.net/external/WealoyxLfJpAhZhOjdN6S_0Y_4csdFl_I8UZH7IMQls/https/fotos02.noticiasdenavarra.com/2020/03/16/690x278/cosas-1.jpg",
  },
  4: {
    value: 1.72,
    description: "Deportista (6 -7 días a la semana)",
    urlImage:
      "https://images-ext-2.discordapp.net/external/JIn45Nle7tjXfe8Vqkbu1MDi377cMXLR7Al1jTXE58Y/https/st.depositphotos.com/1224365/1395/i/600/depositphotos_13956462-stock-photo-sport-man-starting-running.jpg",
  },
  5: {
    value: 1.9,
    description: "Atleta (Entrenamientos mañana y tarde)",
    urlImage:
      "https://images-ext-2.discordapp.net/external/yb-PcPtyxpjsHzz89Upe9rxj-oyK2D-6QxAWxjgwMH8/%3Fresize%3D480%3A%2A/https/hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/powerlifter-with-strong-arms-lifting-weights-royalty-free-image-595768514-1546267269.jpg",
  },
};

export default class SimulaBusiness {
  constructor() {}

  calcularTMB(persona) {
    //Mujeres: TMB = 655 + (9,6 x peso en kg) + (1.8 x altura en cm) - (4,7 x edad en años)
    //Hombres: TMB = 66 + (13,7 x peso en kg) + (5 x altura en cm) - (6,75 x edad en años)
    let tmb = 0;
    if (persona.sexo == "F") {
      tmb =
        655 + 9.6 * persona.peso + 1.8 * persona.altura - 4.7 * persona.edad;
    } else {
      tmb = 66 + 13.7 * persona.peso + 5 * persona.altura - 6.75 * persona.edad;
    }
    return tmb;
  }

  obtenerCaloriasDiariasParaMantenerse(tmb, actividadDiariaTipoId) {
    return tmb * actividadDiariaTipo[actividadDiariaTipoId].value;
  }
}
