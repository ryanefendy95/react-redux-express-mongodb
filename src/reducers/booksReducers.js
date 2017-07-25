// STEP 3 define reducers
export function booksReducers (state={books:[]}, action) {
    switch (action.type) {
        // case "POST_BOOK":
        //     return {books: [...state.books, ...action.payload]};
        case "GET_BOOK":
            debugger;
            return {...state, books: [...action.payload]};
        case "DELETE_BOOK":
            // Create a copy of the current array of books
            const currentBookToDelete = [...state.books];
            // Determine at which index in books array is the book to be deleted
            const indexToDelete = currentBookToDelete.findIndex(book => book.id === action.payload.id);
            //use slice to remove the book at the specified index
            return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete+1)]};
        case "UPDATE_BOOK":
            // Create a copy of the current array of books
            const copy = [...state.books];
            // Determine at which index in books array is the book to be deleted
            const index = copy.findIndex(book => book.id === action.payload.id);
            // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methos too
            const newBook = {...copy[index], title: action.payload.title, description: action.payload.description};
            // This Log has the purpose to show you how newBookToUpdate looks like
            console.log('newBookToUpdate', newBook);
            //use slice to remove the book at the specified index, replace with the new object and concatenate witht he rest of items in the array
            return {books: [...copy.slice(0, index), newBook, ...copy.slice(index+1)]};
        default:
            return state;
    }
    return state;
};