const DB = require('./db.json')
const {saveToDatabase} = require("./utils")

const getAllWorkouts = () =>{
    return DB.workouts
}

const createNeWorkout = (newWorkout) =>{
    const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    console.log("entro al error")
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout

}


module.exports = {
    getAllWorkouts,
    createNeWorkout,
}