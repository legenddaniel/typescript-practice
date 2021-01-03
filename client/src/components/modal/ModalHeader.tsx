import { PropsChildren } from '../../interfaces/props';

const ModalHeader = (props: PropsChildren) => {
    return (
        <header className="modal-header">
            {props.children}
        </header>
    )
}

export default ModalHeader;