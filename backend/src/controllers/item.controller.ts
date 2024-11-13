import { Request, Response } from "express";
import { generateSlug } from "../shared/general.util";
import { z } from "zod";
import { User } from "../models/User";
import { addItem, deleteItem, getAllItems, getItemBySlug, getItemById, updateItem } from "../services/item.services";

  

export const getItemsController = async(req: Request, res: Response) => {
    const user = (req as any).user as User;
    const userId = user.get('id');

    const items = await getAllItems(userId);

    res.json(items);
}

export const getItemBySlugController = async (req: Request, res: Response) => {
    const slug = req.params.slug;
    const item = await getItemBySlug(slug);

    if(!item) {
        res.status(404).json({message: 'Task not found'})
    }

    res.json(item);
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
    let slug = generateSlug(title);

    const itemBySlug = await getItemBySlug(slug);

    if(itemBySlug) {
        slug = generateSlug(title, true);
    }

    const item = await addItem(title, slug, userId);

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

    let slug = generateSlug(title);

    const itemBySlug = await getItemBySlug(slug);
  
    if(itemBySlug) {
        res.status(400). json({message: 'Item already exists'})
    }

    let dbItem = await getItemById(id);

    if(!dbItem) {
        res.status(400). json({message: 'Item not found'});
        return
    }

    let updatedItem = await updateItem(title, slug, id);

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
