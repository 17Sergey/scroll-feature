import styled from 'styled-components';

const StyledButton = styled.div`
    margin-top: 1em;
    padding: 0.5em 1em;
    font-size: 1.5em;
    font-weight: 600;

    background-color: fuchsia;
    color: #fff;
    border-radius: 0.5em;
`;

type ButtonProps = React.PropsWithChildren;

export const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <>
            <StyledButton>{children}</StyledButton>
        </>
    );
};
