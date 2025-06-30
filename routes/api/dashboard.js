const express = require('express');
const router = express.Router();
const dashboardController = require('../../controllers/dashboardController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

const {
    getProgramDetailsByProgramId,
    enterProgramDetails,
    editProgramDetails,
    deleteProgramDetails,
    getAllActivists,
    getAllPrograms,
    getActivistById,
} = dashboardController;

// req.roles=
//for admin to get all activists
router.route('/activists')
    .get(verifyRoles(ROLES_LIST.ADMIN), getAllActivists);

//for admin to get an activist by id
router.route('/activist/:id')
    .get(verifyRoles(ROLES_LIST.ADMIN), getActivistById);

//for admin to get all programs and for editor to enter a program
router.route('/program')
    .get(verifyRoles(ROLES_LIST.ADMIN), getAllPrograms)
    .post(verifyRoles(ROLES_LIST.EDITOR), enterProgramDetails);

//To get a program by activist id (For activist dashboard)
//To get a program by program id (For admin dashboard)
//To edit a program by program id (For admin/editor dashboard)
//To delete a program by program id
router.route('/program/:id')
    .get(verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.EDITOR), getProgramDetailsByProgramId)
    .put(verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.EDITOR), editProgramDetails)
    .delete(verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.EDITOR), deleteProgramDetails);

module.exports = router;


// frontend call dashboard -- 2 -Admin/Activitst
// Admin dashboard - get all activists