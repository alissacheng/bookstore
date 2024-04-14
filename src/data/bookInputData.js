import categoryList from "./cateogryList"

const bookInputData = [
    {
        name: "name",
        label: "Book Name",
        type: "text"
    },
    {
        name: "price",
        label: "Price ($)",
        type: "number"
    },
    {
        name: "category",
        label: "Category",
        type: "select",
        options: categoryList
    },
    {
        name: "description",
        label: "Description",
        type: "text"
    },
] 

export default bookInputData