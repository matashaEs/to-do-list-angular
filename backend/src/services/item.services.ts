import { Item } from "../models/Item";
import { User } from "../models/User";

export async function getAllItems(userId: number) {
    const items = await Item.findAll({
        where: {
            userId
        },
        order: [
            ['createdAt', 'DESC']
        ]
    });

    return items
}

export async function getItemBySlug(slug: string) {
    const item = await Item.findOne({
        where: {
            slug
        }
    });

    return item;
}

export async function addItem(title: string, slug: string, userId: number){
    const item = new Item();
    item.title = title;
    item.userId = userId;
    item.slug = slug;

    await item.save();

    return item;
}

export async function getItemById(id: number){
    const item = await Item.findByPk(id);
    return item;
}

export async function updateItem(id: number, title: string, slug: string, status: "ToDo" | "In Progress" | "Done") {
    const item = await Item.findByPk(id);
    if(!item) {
        throw new Error('Item not found');
    }
    if(title) item.title = title;
    if(slug) item.slug = slug;
    if(status) item.status = status;
    await item.save();

    return item;
}

export async function deleteItem(id: number) {
    const item = await Item.findByPk(id);

    if(!item) {
        throw new Error('Item not found');
    }

    await item.destroy();
    return item;
}
