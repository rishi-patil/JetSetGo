import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Login Successful!")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Login Successful! You can delete your account!")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Admin Login Successful! You can delete all accounts!")
// })

//UPDATE 
router.put('/:id', verifyUser, updateUser)

//DELETE
router.delete('/:id', verifyUser, deleteUser)

//GET 
router.get('/:id', verifyUser, getUser)

//GET ALL
router.get('/', verifyAdmin, getUsers)


export default router;