import { PropsChildren } from '../../interfaces/props';

const ModalBody = (props: PropsChildren) => {
    return (
        <section className="modal-body">
            {props.children}
        </section>
    )
}

export default ModalBody;