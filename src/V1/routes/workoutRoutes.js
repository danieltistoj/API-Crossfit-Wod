const express = require("express")
const router = express.Router()
const workoutController = require("../../controllers/workoutController")
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID.
 *           example: 0
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Leanne Graham
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router
    .get("/",workoutController.getAllWorkouts)
    .get("/:workoutId",workoutController.getOneWorkout)
    .post("/",workoutController.createNeWorkout)
    .patch("/:workoutId",workoutController.updateOneWorkout)
    .delete("/:workoutId",workoutController.deleteOneWorkout)

module.exports = router