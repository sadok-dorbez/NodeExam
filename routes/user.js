
const express = require("express");

const router = express.Router();



const {
    add,
  
    modify,
    remove,
 
    getOne,
    getByEmail,
    getByCin,
    getById,
    getByName,
    getAll

} = require("../services/user");

router.post("/add", add);
router.get("/get", getOne);
router.put("/modify/:id", modify);
router.delete("/remove/:id", remove);
router.get("/getbyid/:id", getById);
router.get("/getbyname/:name", getByName);
router.get("/getbyemail/:email", getByEmail);
router.get("/getbycin/:cin", getByCin);
router.get("/", getAll);

module.exports = router;