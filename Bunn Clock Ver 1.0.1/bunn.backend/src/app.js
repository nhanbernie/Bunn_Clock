import express from 'express';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import { swaggerSpec, swaggerUi } from './config/swagger.js';

const app = express();

// Middleware to parse JSON and use CORS
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('Server is running...');
});

export default app;