import { Avatar } from './Avatar';
import { Button } from './Button';
import { Card } from './Card';

export const CardsList: React.FC = () => {
    return (
        <>
            <Card>
                <Avatar
                    src={
                        'https://ih1.redbubble.net/image.5374702437.3975/raf,360x360,075,t,fafafa:ca443f4786.jpg'
                    }
                    width={'200rem'}
                />
                <h2>Cute Corgi</h2>
                <h4>19.99$</h4>
                <Button>Buy!</Button>
            </Card>
        </>
    );
};
