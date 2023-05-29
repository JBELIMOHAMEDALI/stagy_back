const express = require("express");
const router = express.Router();
const offre = require("../controllers/offreController");

router.post('/add', offre.createOffreStage);
router.get('/all', offre.getAllOffreStage);
router.get('/getone/:id', offre.getOneOffreStageByID);
router.post('/update', offre.updateOffreStage);
router.delete('/delete/:id', offre.deleteOffreStage);
// add offre to may offre 
router.post('/SaveOffreEtud/:id_u/:id_o', offre.SaveOffreEtud);
// sed deomende to entreprise 
router.post('/sanddemandeOffre/:id_u/:id_o', offre.sanddemandeOffre);//
// router.get('/getAllOffers', offre.getAllOffers);
router.get('/getOfferByStudentIdSave/:id', offre.getOfferByStudentIdSave);
router.get('/getOffreBayCompany/:id', offre.getOffreBayCompany);
//taadilha id entreprise bech trjaalik les offre anhom eli aamlou fih (tbaath id offre trjaalik les etidiont )
router.get('/getStudentsByOfferId/:id_offre', offre.getStudentsByOfferId);
//rouut add demonde 

module.exports = router;
