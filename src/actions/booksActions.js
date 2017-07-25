// // POST A BOOK
// export function postBooks(book) {
//     return {
//         type: "POST_BOOK",
//         payload: book
//     }
// }

// GET BOOKS
export function getBooks(books) {
    return {
        type: "GET_BOOK",
        payload: books
    }
}

// DELETE A BOOK
export function deleteBooks(id) {
    return {
        type: "DELETE_BOOK",
        payload: id
    }
}

// UPDATE A BOOK
export function updateBooks(book) {
    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}