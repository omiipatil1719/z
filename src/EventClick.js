import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selector,editItem } from './slice';

function EventClick({show, onHide,editTitle,edittextId,seteditTitle}) {
   
const [editinput,seteditinput]=useState('');

const todo = useSelector(selector)
const dispatch = useDispatch()
console.log(todo,'todo')

const getinputData=(e)=>{
    console.log(e.target.value,'value')
    seteditTitle(e.target.value)
}

const Saveclick=()=>{
dispatch(editItem({id:edittextId,title:editTitle}))
onHide()
}
console.log(editTitle,'editinput')
  return (
    <>
     
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit toDo_list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <input  value={editTitle}   onChange={getinputData} className="editInput"/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={Saveclick}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventClick;