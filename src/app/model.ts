export interface TodoItem {
    id: number;
    name: string;
    complete: boolean;
}

export interface TodoCreateUpdateDto {
    name: string;
    complete: boolean;
}

export type TodoUpdateDto2 = Omit<TodoItem, 'id'>;
