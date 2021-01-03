import { PropsChildren } from '../../interfaces/props';

const ModalFooter = (props: PropsChildren) => {
    return (
        <footer className="modal-footer">
            {props.children}
        </footer>
    )
}

export default ModalFooter;