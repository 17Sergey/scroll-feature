import { useEffect, useRef, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { useDisableBodyScroll } from './hooks/useDisableBodyScroll';
import { Content } from './components/Content';
import Popup from './components/Popup';

const StyledWrapper = styled.div`
    overflow: hidden;
`;

const StyledBlurDiv = styled.div`
    position: fixed;
    top: 20px;
    width: 80%;
    left: 10%;
    right: 10%;
    padding: 32px 16px;
    border-radius: 8px;
    z-index: 1000;

    /* Blur: */
    background-color: rgba(211, 211, 211, 0.1);
    backdrop-filter: blur(8px);
    /* box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); */
`;

function App() {
    const [count, setCount] = useState(0);

    const prevCount = useRef(0);
    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    const inputRef = useRef<HTMLInputElement>(null);

    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    useDisableBodyScroll(isPopupOpen);

    const dialogRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        dialogRef?.current?.showModal();
    };

    return (
        <>
            <StyledWrapper>
                {isPopupOpen && <Popup setIsPopupOpen={setIsPopupOpen} />}
                <Content />
                <div>
                    <button
                        onClick={() => {
                            setIsPopupOpen(true);
                        }}
                    >
                        Open modal
                    </button>
                </div>
                <div>
                    <input
                        type="text"
                        ref={inputRef}
                    />
                    <button onClick={() => inputRef?.current?.focus()}>Focus</button>
                </div>
                <div>
                    <p>
                        count: {count}, prev: {prevCount.current}
                    </p>
                    <button onClick={() => setCount((C) => C + 1)}>Count</button>
                </div>
                <div className="mt-8">
                    <dialog ref={dialogRef}>
                        <p>Greetings, one and all!</p>
                        <form method="dialog">
                            <button>OK</button>
                        </form>
                    </dialog>
                    <button onClick={openModal}>Open modal</button>
                </div>

                {/* <div className="mt-4 bg-gray-300 h-36 blur-sm"></div> */}
                <StyledBlurDiv></StyledBlurDiv>
            </StyledWrapper>
        </>
    );
}

export default App;
