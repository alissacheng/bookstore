const OneBook = ({ book, handleDelete, editBook }) => {
    return(
        <tr>
            <td className="col p-lg-3 p-2 align-middle no-wrap cursor-pointer">
                <button onClick={()=>editBook(book)} className="border-0 rounded-2 py-1 px-2 btn underline">
                    <u>{book.name}</u>
                </button>
            </td>
            <td className="col p-lg-3 p-2 align-middle">
                {parseFloat(book.price).toLocaleString()}
            </td>
            <td className="col p-lg-3 p-2 align-middle">
                {book.category}
            </td>
            <td className="col p-lg-3 p-2 align-middle min-w-200">
                {book.description}
            </td>
            <td className="col p-lg-3 p-2 align-middle">
                <span className="d-flex">
                    <button
                        className="rounded-circle border-0 delete-btn d-inline"
                        type="button"
                        onClick={()=>{editBook(book)}}
                        aria-label="Edit"
                    >
                        <img 
                            src="/images/edit.svg" 
                            alt="Edit icon"
                            className="py-2 px-1"
                        />
                    </button>
                    <button
                        className="rounded-circle border-0 delete-btn d-inline"
                        type="button"
                        onClick={()=>{handleDelete(book)}}
                        aria-label="Delete"
                    >
                        <img 
                            src="/images/trash.svg" 
                            alt="Trash can icon"
                            className="py-2 px-1"
                        />
                    </button>
                </span>
            </td>
        </tr>
    )
};

export default OneBook;