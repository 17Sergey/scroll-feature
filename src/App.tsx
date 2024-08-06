import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import styled from 'styled-components';
import { useDisableBodyScroll } from './hooks/useDisableBodyScroll';

function App() {
    const [count, setCount] = useState(0);

    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

    useDisableBodyScroll(isPopupOpen);

    const StyledWrapper = styled.div`
        overflow: hidden;
    `;

    const StyledPopup = styled.div`
        background-color: lightblue;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & > ul {
            overflow: auto;
        }
        /* width: 100%; */
        /* height: 100%; */
        z-index: 1001;

        & > footer {
        }
    `;

    return (
        <>
            <StyledWrapper>
                {isPopupOpen && (
                    <>
                        <StyledPopup>
                            <ul
                                onClick={() => {
                                    setIsPopupOpen(false);
                                }}
                            >
                                <li style={{ marginBottom: '15em' }}>
                                    Fist menu item
                                </li>
                                <li style={{ marginBottom: '15em' }}>
                                    Second menu item
                                </li>
                                <li style={{ marginBottom: '15em' }}>
                                    Third menu item
                                </li>
                                <li style={{ marginBottom: '15em' }}>
                                    Fourth menu item
                                </li>
                                <li style={{ marginBottom: '15em' }}>
                                    Fifth menu item
                                </li>
                            </ul>
                            <button
                                onClick={() => {
                                    setIsPopupOpen(false);
                                }}
                            >
                                Close
                            </button>
                            <footer>Bottom footer</footer>
                        </StyledPopup>
                    </>
                )}

                <div>
                    <button
                        onClick={() => {
                            setIsPopupOpen(true);
                        }}
                    >
                        Open
                    </button>
                    <a
                        href="https://vitejs.dev"
                        target="_blank"
                    >
                        <img
                            src={viteLogo}
                            className="logo"
                            alt="Vite logo"
                        />
                    </a>
                    <a
                        href="https://react.dev"
                        target="_blank"
                    >
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <button
                    onClick={() => {
                        setIsPopupOpen(true);
                    }}
                >
                    Open
                </button>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </StyledWrapper>
        </>
    );
}

export default App;
