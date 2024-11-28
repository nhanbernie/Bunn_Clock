import express from 'express';
import { registerUser, signin } from '../controllers/userController.js';
import { checkExistingUser } from '../middleware/checkExistingUser.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
const router = express.Router();

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid data
 */
router.post('/register', checkExistingUser, registerUser);

/**
 * @swagger
 * /api/users/signin:
 *   post:
 *     summary: Sign in an existing user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User signed in successfully
 *       401:
 *         description: Invalid email or password
 */
router.post('/signin', signin);

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: `Hello, ${req.user.email}! This is a protected route.` });
});

// router.get('/verify-email', verifyEmail);

export default router;