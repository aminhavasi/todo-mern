import React from 'react';
import Todo from './components/todo';
import { useDispatch, useSelector } from 'react-redux';
import { show } from './redux/actions/showEvents';
const App = () => {
    const showEvent = useSelector((state) => state.showEvent);
    const dispatch = useDispatch();

    return (
        <div className="main">
            <Todo />
        </div>
    );
};

export default App;
