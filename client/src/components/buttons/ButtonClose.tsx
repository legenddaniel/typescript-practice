import styled from 'styled-components';

const ButtonCloseWrapper = styled.div`
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    width: 1.5em;
    height: 1.5em;
    font-size: 1.5em;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: blue;
        border-radius: 50%;
    }
`;

const ButtonClose = () : JSX.Element => {
    return (
        <ButtonCloseWrapper>
            <a>×</a>
        </ButtonCloseWrapper>
    )
};

export default ButtonClose;