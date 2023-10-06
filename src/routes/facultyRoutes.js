const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/facultyController');

router.get('/viewAssignedDuties', facultyController.viewAssignedDuties);
router.post('/requestAdjustment', facultyController.requestAdjustment);
router.post('/reportAbsentees', facultyController.reportAbsentees);

module.exports = router;
