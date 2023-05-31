const express = require("express");
const router = express.Router();
const demonde = require("../controllers/demondeController");
router.post('/add', demonde.createDemonde);
router.get('/getDemondeForCompny/:id', demonde.getDemondeForCompny);
router.get('/getDemondeForStudent/:id', demonde.getDemondeForStudent);
router.post('/updateStatusDemonde', demonde.updateStatusDemonde);
router.delete('/delete/:id', demonde.deleteDemonde);



// 
module.exports = router;
