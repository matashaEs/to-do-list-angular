export interface ItemInterface {
    id: number;
    title: string;
    status: 'todo' | 'done';
    userId: number;
    createdAt: string;
    updatedAt: string;
}
