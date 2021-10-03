const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const authBlock = require('../utils/auth');