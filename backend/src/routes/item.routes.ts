import { Router } from "express";
import { addItemController, deleteItemController, getItemBySlugController, getItemsController, updateItemController } from "../controllers/item.controller";
import { authenticateJWT } from "../shared/auth.util";

 const router = Router();

 router.get('/', authenticateJWT, getItemsController);
 router.post('/', authenticateJWT, addItemController);
 router.put('/', authenticateJWT, updateItemController);
 router.delete('/', authenticateJWT, deleteItemController);
 router.get('/slug/:slug', getItemBySlugController)

 export default router;
