import React,{ useState} from 'react';
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const ChatBot = () => {

   
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteMe(){
        setModalIsOpen(true);

    }

    function closeModal(){
        setModalIsOpen(false);
    }


  return (
    <div>
        
            <button className="go-top-btn" onClick={deleteMe}>
                <i className="fa-solid fa-robot"></i>
            </button>
            {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}  
            {modalIsOpen && <Backdrop onCancel={closeModal} />}  
    </div>
  )
}

export default ChatBot