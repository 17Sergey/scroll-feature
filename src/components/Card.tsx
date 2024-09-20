import styled from 'styled-components';

const StyledCard = styled.div`
    padding: 3em;
    border: 2px solid fuchsia;
    border-radius: 0.25em;
    background-color: #fff;
    color: #121212;
    box-sizing: border-box !important;
`;

type CardProps = React.PropsWithChildren;

export const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <>
            <StyledCard>{children}</StyledCard>
        </>
    );
};
