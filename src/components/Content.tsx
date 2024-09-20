import { ButtonState } from './ButtonState';
import { CardsList } from './CardsList';
import Toolbar from './Toolbar';

export const Content: React.FC = () => {
    return (
        <>
            <CardsList />
            <Toolbar />
            <ButtonState />
        </>
    );
};
