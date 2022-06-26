import Status from 'Status';


interface Todo<TData> {
    // <TData> is called generics
    // das ist ein Objekt den wir über interface definieren
    id: string;
    description: string;
    status: Status; // Type, den wir oben definiert haben
    assignee?: string | number | string[]; // ? means assignee muss nicht kann aber genutt werden
    data: TData; // was immer ich für TData später reingebe
}



export default Todo;
