const Workout = require('../database/Workout')

const getAllWorkouts = ()=>{
    const allWorkouts = Workout.getAllWorkouts()
    return allWorkouts
}

const getOneWorkout= ()=>{
    return;
}

const createNeWorkou = ()=>{
    return;
}

const updateOneWorko = ()=>{
    return;
}

const deleteOneWorko = ()=>{
    return;
}
module.exports ={
    getAllWorkouts,
    getOneWorkout,
    createNeWorkou,
    updateOneWorko,
    deleteOneWorko,
}