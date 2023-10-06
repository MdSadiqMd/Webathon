const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Define routes for admin-related actions
router.post('/addDepartment', adminController.addDepartment);
router.get('/manageFaculty', adminController.manageFaculty);
router.get('/collectAbsenteeRoomWise/:roomId', adminController.collectAbsenteeRoomWise);
router.get('/collectAbsenteeCourseWise/:courseId', adminController.collectAbsenteeCourseWise);

module.exports = router;
