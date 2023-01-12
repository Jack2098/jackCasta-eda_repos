import { Router } from 'express';
import { getRepositoryCtrl } from '../controllers/repository.controllers';

const route = Router();

route.get('/repository/:id', getRepositoryCtrl)

export {
  route
}