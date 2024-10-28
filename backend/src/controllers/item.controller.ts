import { Request, Response } from "express";
import { z } from "zod";
import { User } from "../models/User";
import { addItem, deleteItem, getAllItems, getItem, getItemById, updateItem } from "../services/item.services";

  

export const getItemsController = async(req: Request, res: Response) => {
    const user = (req as any).user as User;
    const userId = user.get('id');

    const items = await getAllItems(userId);

    res.json(items);
}

export const addItemController = async(req: Request, res: Response): Promise<void> =>{
    const schema = z.object({
        title: z.string()
    });

    const schemaValidator = schema.safeParse(req.body);
    if(!schemaValidator.success){
        res.status(400).json({message: 'Invalid data', errors: schemaValidator.error});
        return
    }

    const {title} = req.body;  
    const user = (req as any).user as User;
    const userId = user.get('id');

    const itemTitle = await getItem(title);

    if(itemTitle) {
        res.status(400).json({message: 'Item already exists'});
        return
    }

    const item = await addItem(title, userId);

    res.json(item);
}

export const updateItemController = async(req: Request, res: Response) => {

    const schema = z.object({
        title: z.string(),
        id: z.number()
    });

    const schemaValidator = schema.safeParse(req.body);
    if(!schemaValidator.success){
        res.status(400).json({message: 'Invalid data', errors: schemaValidator.error});
        return
    }

    let {title, id} = req.body;

    const itemTitle = await getItem(title);

    if(itemTitle) {
        res.status(400).json({message: 'Item already exists'});
        return
    }

    let dbItem = await getItemById(id);

    if(!dbItem) {
        res.status(400). json({message: 'Item not found'});
        return
    }

    let updatedItem = await updateItem(title, id);

    res.json(updatedItem);
}

export const deleteItemController = async(req: Request, res: Response) =>  {

    const schema = z.object({
        id: z.number()
    });

    const schemaValidator = schema.safeParse(req.body);
    if(!schemaValidator.success){
        res.status(400).json({message: 'Invalid data', errors: schemaValidator.error});
        return 
    }

    const {id} = req.body;

    const item = await getItemById(id);

    if(!item) {
        res.status(404). json({message: 'Item not found'});
        return
    }

    await deleteItem(id);

    res.json({item})
}
