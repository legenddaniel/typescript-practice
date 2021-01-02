import Props from '../../interfaces/props';

const ModalFooter = (props: Props) => {
    return (
        <footer className="modal-footer">
            {props.children}
        </footer>
    )
}

export default ModalFooter;