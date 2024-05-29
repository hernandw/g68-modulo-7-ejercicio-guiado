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

export { addRoutineQueries, getAllRoutines };
