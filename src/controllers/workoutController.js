const workoutService = require("../services/workoutService")

const getAllWorkouts = (req,res) =>{
    const allWorkouts = workoutService.getAllWorkouts()
    //las funciones de express usan la informacion del serevicio
    res.send({
        status:'OK',
        data:allWorkouts
    })
}

const getOneWorkout = (req,res) =>{
    const oneWorkout = workoutService.getOneWorkout(req.params.workoutId)
    res.send(`Get workout ${req.params.workoutId}`)
}

const createNeWorkout = (req,res) => {
    const {body} = req
    if(
        !body.name || 
        !body.mode || 
        !body.equipment || 
        !body.exercises || 
        !body.trainerTips){
            return
    }
    const newWorkout ={
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    }
    console.log("newWorkout",newWorkout)
    const createNeWorkout = workoutService.createNeWorkout(newWorkout)
    res.status(201).send({status:"OK",data:createNeWorkout})


}

const updateOneWorkout = (req,res) =>{
    const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId)
    res.send(`Update workout ${res.params.workoutId}`)
}

const deleteOneWorkout = (req,res)=>{
    workoutService.deleteOneWorkout(req.params.workoutId)
    res.send(`Delete workout ${req.params.workoutId}`)
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNeWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}