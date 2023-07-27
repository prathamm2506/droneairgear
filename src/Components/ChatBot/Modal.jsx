function Modal(props){

    function cancelModal(){
        props.onCancel();
    }
    function confirmModal(){
        props.onCancel();
    }

    return(
        <div className="modal">
        <h1>Have a query?</h1>
        <p>Reach out to us and our agents will assist you shortly.</p>
        <button className="btn btn--alt" onClick={cancelModal} > <i class="fa-brands fa-whatsapp"></i> Start Chat</button>
       
        </div>
    );
}

export default Modal;