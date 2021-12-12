import './App.css';
import Lesson02ExampleList from './components/Lesson02ExampleList';
import Lesson03ExampleList from './components/Lesson03ExampleList';

function App() {
    return (
        <div className='App'>
            <h1 className='pageTitle'>Practice Examples</h1>
            <Lesson02ExampleList />
            <Lesson03ExampleList />
        </div>
    );
}

export default App;
