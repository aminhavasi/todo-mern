import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWork } from './../redux/actions/work';
import './../css/style.css';
import { addWorks } from '../redux/actions/works';
const handleSubmit = (e) => {
    e.preventDefault();
};
const Todo = () => {
    const work = useSelector((state) => state.work);
    const works = useSelector((state) => state.works);
    const dispatch = useDispatch();
    let count = 1;
    return (
        <div
            className="todo w-50"
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            <div class="card bg-info text-white text-center mb-2">
                <div class="card-body">Personal Manager</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form class="form-inline" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="work" class="mb-2 mr-sm-2">
                        Work:
                    </label>
                    <input
                        type="text"
                        class="form-control mb-2 mr-sm-2"
                        id="work"
                        placeholder="Enter work"
                        name="work"
                        onChange={(e) => dispatch(setWork(e))}
                        value={work}
                    />

                    <button
                        type="submit"
                        class="btn btn-primary mb-2"
                        onClick={() => dispatch(addWorks(work))}
                    >
                        Submit
                    </button>
                </form>
            </div>
            {works.map((w) => (
                <div
                    class="card bg-primary text-white text-center borderC"
                    key={w.id}
                >
                    <div class="card-body ">
                        <p style={{ float: 'right' }}>{`:${count++}`}</p>
                        <p style={{ float: 'right' }}>{w.name}</p>
                        <a>status</a>
                        <i
                            className="fa fa-trash"
                            style={{
                                float: 'left',
                                fontSize: '25px',
                            }}
                        ></i>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Todo;
