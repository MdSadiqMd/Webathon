const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

router.get('/viewSchedules', departmentController.viewSchedules);
router.post('/requestAdjustment', departmentController.requestAdjustment);
router.get('/viewAdjustmentStatus', departmentController.viewAdjustmentStatus);

module.exports = router;
