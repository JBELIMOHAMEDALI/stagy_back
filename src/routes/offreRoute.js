const express = require("express");
const router = express.Router();
const offre = require("../controllers/offreController");

router.post('/add', offre.createOffreStage);
router.get('/all', offre.getAllOffreStage);
router.get('/getone/:id', offre.getOneOffreStageByID);
router.post('/update', offre.updateOffreStage);
router.delete('/delete/:id', offre.deleteOffreStage);
// add offre to may offre 
router.post('/SaveOffreEtud', offre.SaveOffreEtud);
// sed deomende to entreprise 
router.post('/sanddemandeOffre', offre.sanddemandeOffre);//
// router.get('/getAllOffers', offre.getAllOffers);
router.get('/getOfferByStudentIdSave/:id', offre.getOfferByStudentIdSave);
router.get('/getOfferByStudentIdDemonde/:id', offre.getOfferByStudentIdDemonde);
router.get('/getOffreBayCompany/:id', offre.getOffreBayCompany);
//taadilha id entreprise bech trjaalik les offre anhom eli aamlou fih (tbaath id offre trjaalik les etidiont )
router.get('/getStudentsByOfferId/:id_offre', offre.getStudentsByOfferId);
//rouut add demonde 
// RemoveSavedOffre
router.delete('/removeSavedOffre/:user_id/:offre_Id', offre.RemoveSavedOffre);
router.put('/updateDemondeStatus', offre.updateDemondeStatus);


//
module.exports = router;
