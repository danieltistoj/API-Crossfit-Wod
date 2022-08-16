const {v4:uuid} = require('uuid')
const Workout = require('../database/Workout')

const getAllWorkouts = ()=>{
    const allWorkouts = Workout.getAllWorkouts()
    return allWorkouts
}

const getOneWorkout= ()=>{
    return;
}

const createNeWorkout = (newWorkout)=>{
    const workoutToInsert = {
        ...newWorkout,
        id:uuid(),
        createAt: new Date().toLocaleDateString("en-US",{timeZone : "UTC"}),
        updateAt: new Date().toLocaleDateString("en-US",{timeZone: "UTC"}),    
    }
    console.log("workoutToInsert",workoutToInsert)
    const createdWorkout = Workout.createNeWorkout(workoutToInsert)
    return createdWorkout
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
    createNeWorkout,
    updateOneWorko,
    deleteOneWorko,
}