import { Router } from 'express';
import orders from './orders';

const router = Router({ mergeParams: true });

router.use('/orders', orders);

export default router;
