const express = require("express");
const router = express.Router();
const dashbooard = require("../controllers/dashboardController");
router.get('/countDemandeStudent/:id', dashbooard.countDemandeStudent);
router.get('/countSuggestionStudent/:id', dashbooard.countSuggestionStudent);
router.get('/countSuggestionCompny/:id', dashbooard.countSuggestionCompny);
router.get('/countDemandeCompny/:id', dashbooard.countDemandeCompny);
router.get('/countOffreCompny/:id', dashbooard.countOffreCompny);
module.exports = router;
 