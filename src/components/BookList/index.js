import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../features/books/booksSlice';
import { editBook } from "../../features/form/formSlice";
import OneBook from "./OneBook"
import bookInputData from "../../data/bookInputData";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.items);

  return(
    <div className="container-lg px-3 px-md-5 px-lg-0 book-list">
      {
        books.length ?
        <>
          <div className="border rounded-3 shadow-sm table-responsive">
            <table className="table bg-blue-100 table-spaced border-rounded mb-0">
              <thead>
                  <tr>
                    {bookInputData.map(({label})=>{
                        return (
                          <th className="text-light-theme px-lg-3 px-2 py-2 no-wrap" scope="col" key={label}>
                            {label}
                          </th>
                        )
                    })}
                    <th scope="col" className="text-light-theme px-3 py-2">Actions</th>
                  </tr>
              </thead>
              <tbody className="rounded text-theme">
              {books.map((book)=>{
                return (
                  <OneBook 
                      key={book.id} 
                      book={book}
                      handleDelete={(book)=>dispatch(removeItem(book))}
                      editBook={(book)=>dispatch(editBook(book))}
                  />)
              })}
              </tbody>
            </table>
          </div>
        </>
        :
        <h3 className="text-center my-5 fs-4">No books currently in your bookstore.</h3>
      }
    </div>
  )
}

export default BookList;