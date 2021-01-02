import Props from '../../interfaces/props';

const ModalBody = (props: Props) => {
    return (
        <section className="modal-body">
            {props.children}
        </section>
    )
}

export default ModalBody;