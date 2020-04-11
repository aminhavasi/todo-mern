import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWork, radiobox } from './../redux/actions/work';
import './../css/style.css';
import { addWorks, deleteWork, updateWork } from '../redux/actions/works';
import { show } from './../redux/actions/showEvents';
const handleSubmit = (e) => {
    e.preventDefault();
};

const handle = (e) => {
    const result = document.querySelector('input[type="radio"]:checked');
    console.log(result.value);
};
const Todo = () => {
    const work = useSelector((state) => state.work);
    const works = useSelector((state) => state.works);
    const showEvent = useSelector((state) => state.showEvent);
    const statusx = useSelector((state) => state.radio);
    const dispatch = useDispatch();
    let count = 1;
    return (
        <div
            className="todo w-50"
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            <div class="card bg-info text-white text-center mb-2">
                <div class="card-body">Personal Manager</div>
                <span>
                    works:{' '}
                    <span className="badge badge-pill bg-dark">
                        {works.length}
                    </span>
                </span>
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
                    <div
                        style={{ display: 'flex' }}
                        onChange={(e) =>
                            dispatch(
                                radiobox(
                                    document.querySelector(
                                        'input[type="radio"]:checked'
                                    ).value
                                )
                            )
                        }
                    >
                        <div class="form-check mx-1">
                            <label class="form-check-label">
                                <input
                                    type="radio"
                                    class="form-check-input"
                                    name="optradio"
                                    value="normal"
                                />
                                Normal
                            </label>
                        </div>
                        <div class="form-check mx-1">
                            <label class="form-check-label">
                                <input
                                    type="radio"
                                    class="form-check-input"
                                    name="optradio"
                                    value="important"
                                />
                                Importent
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        class="btn btn-primary mb-2"
                        onClick={() => dispatch(addWorks(work, statusx))}
                    >
                        Submit
                    </button>
                </form>
            </div>
            {showEvent
                ? works.map((w) => (
                      <div
                          className={
                              w.status !== 'normal'
                                  ? 'card bg-primary text-white text-center borderC'
                                  : 'card bg-primary text-white text-center BB'
                          }
                          key={w.id}
                      >
                          <div class="card-body ">
                              <p style={{ float: 'right' }}>{`:${count++}`}</p>
                              <input
                                  type="text"
                                  className="form-control w-25"
                                  style={{ float: 'right' }}
                                  placeholder={w.name}
                                  onChange={(e) =>
                                      dispatch(updateWork(e, w.id))
                                  }
                              />
                              <a>waiting</a>
                              <i
                                  onClick={() => dispatch(deleteWork(w.id))}
                                  className="fa fa-trash"
                                  style={{
                                      float: 'left',
                                      fontSize: '25px',
                                      cursor: 'pointer',
                                  }}
                              ></i>
                          </div>
                      </div>
                  ))
                : null}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    className="btn btn-info mt-1"
                    style={{ width: '25%' }}
                    onClick={() => dispatch(show())}
                >
                    show/hide
                </button>
            </div>
        </div>
    );
};
export default Todo;
