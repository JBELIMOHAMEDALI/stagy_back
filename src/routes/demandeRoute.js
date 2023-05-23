const express = require("express");
const router = express.Router();
const demande = require("../controllers/demandeController");

router.post('/add', demande.createDemande);
router.get('/all', demande.getAllDemande);
router.get('/getOne/:id', demande.getOneDemandeByID);



// router.get('/getDemondeForSocite/:id', demande.getDemondeForSocite);
// router.get('/getMyDemondeForSocite/:id', demande.getMyDemondeForSocite);
// router.get('/getMydemonde/:id', demande.getMydemondeStage);
// router.post('/proposeStage', demande.proposeStage);

router.put('/update', demande.updateDemande);
router.delete('/delete/:id', demande.deleteDemande);



// router.post('/login', authController.login);  

module.exports = router;
