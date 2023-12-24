const express = require('express');
const router = express.Router();
const passport  = require('passport');
const userController = require('../controllers/userController');

router.get('/login',userController.login);
router.get('/logout',userController.signOut);
router.get('/logged-in',userController.loggedIn);
router.get('/sign-up',userController.signUp);
router.get('/auth/google' , passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/user/login'}),userController.createSession);
router.post('/create',userController.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/user/login'}),userController.createSession);

module.exports = router;
