import express from 'express'

import {
    validataUserData,
    hashPassword
} from './user.middleware'
import * as userController from './user.controller'
const router = express.Router()
/**
 *创建用户
 */
router.post('/users',validataUserData,hashPassword, userController.store)

export default router