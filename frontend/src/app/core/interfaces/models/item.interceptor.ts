export interface ItemInterface {
    id: number;
    title: string;
    status: 'Todo' | 'In Progress' | "Done";
    userId: number;
    createdAt: string;
    updatedAt: string;
}
