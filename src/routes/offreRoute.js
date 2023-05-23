const express = require("express");
const router = express.Router();
const offre = require("../controllers/offreController");

router.post('/add', offre.createOffreStage);
router.get('/all', offre.getAllOffreStage);
router.get('/getone/:id', offre.getOneOffreStageByID);
router.put('/update', offre.updateOffreStage);
router.delete('/delete/:id', offre.deleteOffreStage);

router.post('/SaveOffreEtud/:id_u/:id_o', offre.SaveOffreEtud);
// router.get('/getAllOffers', offre.getAllOffers);
router.get('/getOfferByStudentIdSave/:id', offre.getOfferByStudentIdSave);
//rouut add demonde 

module.exports = router;
