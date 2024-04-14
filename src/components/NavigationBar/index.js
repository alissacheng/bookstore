import { useDispatch } from 'react-redux';
import { addBook } from '../../features/form/formSlice';

const NavigationBar = () => {
  const dispatch = useDispatch();

  return(
    <nav className="navbar py-3 container-lg px-3 px-md-5 px-lg-0 bg-white d-flex justify-content-between">
      <div className='w-lg-75 w-50'>
        <h1 className="fs-3 fw-bold m-0">Bookstore</h1>
        <p className='m-0'>View and manage books in your store</p>
      </div>
      <div className={`bg-white d-flex justify-content-end py-lg-0 py-4 px-lg-0 px-3 px-md-5`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button 
              className='btn btn-dark me-2' 
              onClick={()=>dispatch(addBook())}
            >
              Add Book
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;