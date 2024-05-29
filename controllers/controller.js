import path from "path";
import {
  addRoutineQueries,
  getAllRoutines,
  updateEjercicioQuery,
  deleteRoutineQueries,
} from "../models/queries.js";

const __dirname = path.resolve();

export const home = (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
};

export const addRoutine = async (req, res) => {
  const { nombre, series, repeticiones, descanso } = req.body;
  console.log(req.body);
  const result = await addRoutineQueries({
    nombre,
    series,
    repeticiones,
    descanso,
  });
  res.send(result);
};

export const getRoutines = async (req, res) => {
  const result = await getAllRoutines();
  res.send(result);
};

export const updateEjercicio = async (req, res) => {
  const { nombre, series, repeticiones, descanso } = req.body;
  const result = await updateEjercicioQuery({
    nombre,
    series,
    repeticiones,
    descanso,
  });
  res.send(result);
};

export const deleteRoutine = async (req, res) => {
  const { nombre } = req.query;

  const result = await deleteRoutineQueries(nombre);
  res.send("hola");
};
