import { ComponentProps } from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.img`
    padding: 1em;
    border-radius: 50%;
    box-shadow: 1px 1px 1em 0.5em #0000006a;
`;

export const Avatar: React.FC<ComponentProps<'img'>> = (props) => {
    return <StyledAvatar {...props} />;
};
