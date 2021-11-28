import PostController from '../controller/postController';
import { Router } from 'express';

const router = Router();

router.post('/post', PostController.postPost);
router.get('/post', PostController.getPost);
router.get('/post/:id', PostController.getOne);
router.put('/post/:id', PostController.updatePost);
router.delete('/post/:id', PostController.deletePost);


export default router;