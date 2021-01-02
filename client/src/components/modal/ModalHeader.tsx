import Props from '../../interfaces/props';

const ModalHeader = (props: Props) => {
    return (
        <header className="modal-header">
            {props.children}
        </header>
    )
}

export default ModalHeader;