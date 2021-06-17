import { Router } from "express";
import jwt from "jsonwebtoken";
import SimulaBusiness, {
  actividadDiariaTipo,
} from "../business/simulaBusiness";

const router = Router();
const simulaBusiness = new SimulaBusiness();
router.post("/simular", async (req, res, next) => {
  const { peso, edad, altura, sexo, pesoObjetivo, diasCantidad } = req.body;
  const persona = req.body;
  let tmb = simulaBusiness.calcularTMB(persona);
  let result = [];
  for (let index = 1; index <= 5; index++) {
    let value = {};
    let caloriasPmantener = simulaBusiness.obtenerCaloriasDiariasParaMantenerse(
      tmb * persona.diasCantidad,
      index
    );
    let diferenciaCaloria =
      7000 * Math.abs(persona.peso - persona.pesoObjetivo);
    let consumoCaloriasTotal = Math.abs(caloriasPmantener - diferenciaCaloria);
    result.push({
      tmb,
      tmbDias: tmb * persona.diasCantidad,
      consumoCaloriasTotal,
      consumoCaloriasDiaria: consumoCaloriasTotal / persona.diasCantidad,
      actividadDescripcion: actividadDiariaTipo[index].description,
      dias: persona.diasCantidad,
      diferenciaPeso: Math.abs(persona.peso - persona.pesoObjetivo),
      urlImage: actividadDiariaTipo[index].urlImage,
    });
  }
  res.json({ result });
});

export default router;
