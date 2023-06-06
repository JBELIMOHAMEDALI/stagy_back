const express = require("express");
const router = express.Router();
const adminroot = require("../controllers/adminController");


router.post('/addAdmin', adminroot.createAdmin);
router.get('/getAllUsersBayAuthority/:authority', adminroot.getAllUsersBayAuthority);
router.get('/getAllUsersBayAuthorityAndValide/:authority/:valid', adminroot.getAllUsersBayAuthorityAndValide);
router.post('/updateStatusStudentOrCopmny', adminroot.updateStatusStudentOrCopmny);


router.get('/countAccountByValid/:valid', adminroot.countAccountByValid);
router.get('/countAllDemande', adminroot.countAllDemande);
router.get('/countAllOffre', adminroot.countAllOffre);
router.get('/countAllSuggestion', adminroot.countAllSuggestion);

module.exports = router;
