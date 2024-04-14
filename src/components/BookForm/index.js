import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeForm } from "../../features/form/formSlice"
import { updateItem, addItem } from "../../features/books/booksSlice"
import bookInputData from "../../data/bookInputData"
import TextInput from "./TextInput"
import SelectInput from "./SelectInput"
import validateForm from "../../utils/validateForm"

const BookForm = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.items);
    const form = useSelector((state) => state.form.value);
    const formValue = form === true ? {} : form

    const [formData, setFormData] = useState(formValue)
    const [formErr, setFormErr] = useState({})
    const [firstSubmit, setFirstSubmit] = useState(false)

    const handleChange = (e) => {
        //Update formData object
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        }
        setFormData(newFormData);
        // Validate form if user has already clicked submit once
        if(firstSubmit) validateForm(newFormData, setFormErr);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!firstSubmit) setFirstSubmit(true)

        if(validateForm(formData, setFormErr)){
            let id = form.id ? form.id : "";
            const updatedBook = { ...formData, id }
            // Add new or update book to state and clear all data from component before exiting
            if(form === true) {
                // Get the latest id and add one for new book id
                const maxId = books.reduce((max, obj) => Math.max(max, parseInt(obj.id)), -Infinity);
                updatedBook.id = maxId ? parseInt(maxId) + 1 : 1;
                dispatch(addItem(updatedBook))
            } else {
                dispatch(updateItem(updatedBook))
            }
            setFormData({});
            setFormErr({});
            setFirstSubmit(false);
            dispatch(closeForm())
        }
    }

    return(
        <div className="container bg-white">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-12 my-sm-4 my-2">
                    <button
                        className="bg-white border-0 mb-2"
                        onClick={()=>dispatch(closeForm())}
                    >
                        <img src="/images/left-arrow.svg" alt="Left arrow icon" className="me-2" />
                        Back to Bookstore
                    </button>
                    <form 
                        noValidate={true} 
                        id="book-form" 
                        className="border shadow-sm p-sm-4 p-2 rounded-2 bg-white"
                    >
                        <h1 className="pb-3 text-center fs-3 fw-bold">{typeof form === "object" ? "Edit" : "New"} Book</h1>
                        {bookInputData.map(input => (
                            input.type === "select" ?
                                <SelectInput
                                    options={input.options}
                                    name={input.name}
                                    label={input.label}
                                    handleChange={handleChange}
                                    key={input.name}
                                    value={formData[input.name] ?? ""}
                                    error={formErr[input.name] ?? ""}
                                />
                                :
                                <TextInput
                                    key={input.name}
                                    name={input.name}
                                    label={input.label}
                                    type={input.type}
                                    prefix={input.prefix ?? false}
                                    handleChange={handleChange}
                                    value={formData[input.name] ?? ""}
                                    error={formErr[input.name] ?? ""}
                                />
                        ))}
                        <div className="mb-4">
                            <button
                                className="btn btn-dark"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                {typeof form === "object" ? "Update" : "Add"} Book
                            </button>
                            <button
                                className="btn btn-light border mx-2"
                                onClick={()=>dispatch(closeForm())}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default BookForm;