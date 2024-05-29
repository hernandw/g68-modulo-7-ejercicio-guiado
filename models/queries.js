import { pool } from "../config/db.js";

const addRoutineQueries = async ({
  nombre,
  series,
  repeticiones,
  descanso,
}) => {
  try {
    const sql = {
      text: "INSERT INTO ejercicios (nombre, series, repeticiones, descanso) VALUES ($1, $2, $3, $4)  RETURNING *",
      values: [nombre, series, repeticiones, descanso],
    };

    const result = await pool.query(sql);
    if (result.rowCount > 0) {
      return result.rows[0];
    } else {
      return new Error("No se inserto la rutina");
    }
  } catch (error) {
    console.log("Error code: ", error.code, "\nError message: ", error.message);
  }
};

const getAllRoutines = async () => {
  try {
    const sql = "SELECT * FROM ejercicios";
    const result = await pool.query(sql);
    if (result.rowCount > 0) {
      return result.rows;
    } else {
      return new Error("No se encontraron ejercicios");
    }
  } catch (error) {
    console.log("Error code: ", error.code, "\nError message: ", error.message);
  }
};

const updateEjercicioQuery = async ({
  nombre,
  series,
  repeticiones,
  descanso,
}) => {
  try {
    const sql = {
      text: "UPDATE ejercicios SET nombre = $1, series = $2, repeticiones = $3, descanso = $4 WHERE nombre = $1 returning *",
      values: [nombre, series, repeticiones, descanso],
    };
    const response = await pool.query(sql);
    if (response.rowCount > 0) {
      return response.rows;
    } else {
      return new Error("No se actualizo el ejercicio");
    }
  } catch (error) {
    console.log("Error code: ", error.code, "Error message: ", error.message);
  }
};

const deleteRoutineQueries = async (nombre) => {
  try {
    const sql = {
      text: "DELETE FROM ejercicios WHERE nombre = $1 returning *",
      values: [nombre],
    };

    const result = await pool.query(sql);
    if (result.rowCount > 0) {
      return result.rows[0];
    } else {
      return new Error("No se pudo eliminar el ejercicio");
    }
  } catch (error) {
    console.log("Error code: ", error.code, "Error message: ", error.message);
  }
};

export {
  addRoutineQueries,
  getAllRoutines,
  updateEjercicioQuery,
  deleteRoutineQueries,
};
