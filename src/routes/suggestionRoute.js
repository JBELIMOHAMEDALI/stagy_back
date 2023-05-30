const express = require("express");
const router = express.Router();
const suggestion = require("../controllers/suggestionController");
router.post('/add', suggestion.createSuggestion);
router.get('/getAllCompny', suggestion.getAllCompny);

router.get('/getoneAllbayIdSuggestion/:id', suggestion.getOneSuggestionByidAndStudentidEnterpriseidall);
router.get('/getoneForStudent/:id', suggestion.getOneSuggestionByidAndStudentid);
router.get('/getAllSuggestionForCompny/:id', suggestion.getAllforCompny);
router.get('/getAllSuggestionForStudent/:id', suggestion.getAllforStudents);
router.put('/updateSuggestion', suggestion.updateSuggestion);
router.delete('/delete/:id', suggestion.deleteSuggestion);

// getAllCompny
module.exports = router;
