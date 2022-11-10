// import { React, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { add, selector ,deleteItem} from './slice';

// function App(){
//   const [curr, setCurr] = useState('');
//   const dispatch = useDispatch();
//   const todo = useSelector(selector);



//   return (
//     <>
//        <input onChange={e => setCurr(e.target.value)} value={curr}  placeholder='Add_a_Items'  />
//        <button
//         onClick={() => {
//           dispatch(add(curr));
//           setCurr('');
//         }}
//        >Add</button>
//        <ul>
//        {
//         todo.map((item) => {
//           return (
// <>
// <li key={item.id}>{item.title}</li>
// <span><button onClick={()=>{dispatch(deleteItem(item.id))}}>delete</button></span>


// </>            
//           )
//         })
//        }
//        </ul>

//     </>
//   );
// }

// export default App;


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selector, add, deleteItem } from './slice';
import EventClick from './EventClick';

const App = () => {
  const [inputval, setinputval] = useState('')
  const [popup, setpopup] = useState(false)
  const [edittextId, setedittextId] = useState()
  const [editTitle, seteditTitle] = useState()

  const dispatch = useDispatch();
  const todo = useSelector(selector)
  console.log(todo, 'todotodo')


  const getvalue = (e) => {
    setinputval(e.target.value);
  }

  const Showpopup = (id, title) => {
    setpopup(true);
    setedittextId(id);
    seteditTitle(title)
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo list</h1>
          <br />
          <input type="text" id='inputval' value={inputval} onChange={getvalue} />

          <button className='add' onClick={() => {
            dispatch(add(inputval));
            setinputval('')
          }}>+</button>

          {
            todo.map((itemval) => {
              return (
                <>
                
                <ol>
                  <div className='itembox'>
                    <button className='deletebtn' onClick={() => { dispatch(deleteItem(itemval.id)) }}></button>
                    <li key={itemval.id}>{itemval.title} </li>
                      <button className='editbtn' onClick={() => Showpopup(itemval.id, itemval.title)}></button>
                  </div>
                  </ol>
                </>
              )
            })
          }
        </div>

      </div>

      {
        popup && (
          <EventClick
            show={popup}
            onHide={() => setpopup(false)}
            edittextId={edittextId}
            editTitle={editTitle}
            seteditTitle={seteditTitle}
          />
        )

      }
    </>

  )
}

export default App

