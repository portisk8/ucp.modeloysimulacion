export const actividadDiariaTipo = {
  1: {
    value: 1.2,
    description: "Poco o ningún ejercicio",
  },
  2: {
    value: 1.375,
    description: "Ejercicio ligero (1 a 3 días a la semana)",
  },
  3: {
    value: 1.55,
    description: "Ejercicio moderado (3 a 5 días a la semana)",
  },
  4: {
    value: 1.72,
    description: "Deportista (6 -7 días a la semana)",
  },
  5: {
    value: 1.9,
    description: "Atleta (Entrenamientos mañana y tarde)",
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
