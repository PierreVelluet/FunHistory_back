const express = require("express");
const router = express.Router();

const usersRoute = require("./user");
const authRoute = require("./auth")
const countriesRoute = require("./countries")
const ques = require("./countries")

router.use('/user', usersRoute)
router.use('/auth', authRoute)
router.use('/countries', countriesRoute)
router.use('/questions', countriesRoute)

module.exports = router;