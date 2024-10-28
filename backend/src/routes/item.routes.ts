import { Router } from "express";
import { addItemController, deleteItemController, getItemsController, updateItemController } from "../controllers/item.controller";
import { authenticateJWT } from "../shared/auth.util";

 const router = Router();

 router.get('/', authenticateJWT, getItemsController);
 router.post('/', authenticateJWT, addItemController);
 router.put('/', authenticateJWT, updateItemController);
 router.delete('/', authenticateJWT, deleteItemController);

 export default router;
