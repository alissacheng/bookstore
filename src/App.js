import './styles/style.css'
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import NavigationBar from './components/NavigationBar';
import { useSelector } from 'react-redux';

function App() {
  const form = useSelector((state) => state.form.value);

  return (
    <div className='overflow-hidden'>
      {form && <BookForm />}
      <div className={`${form ? 'd-none' : ''}`}>
          <NavigationBar />
          <BookList />
      </div>
    </div>
  );
}

export default App;
