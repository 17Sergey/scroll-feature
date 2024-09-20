// import React, { useState } from 'react';
// import { useDisableBodyScroll } from '../hooks/useDisableBodyScroll';
import styled from 'styled-components';

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

export default function Popup({ setIsPopupOpen }: { setIsPopupOpen: (a: boolean) => void }) {
    return (
        <>
            <StyledPopup>
                <ul
                    onClick={() => {
                        setIsPopupOpen(false);
                    }}
                >
                    <li style={{ marginBottom: '15em' }}>Fist menu item</li>
                    <li style={{ marginBottom: '15em' }}>Second menu item</li>
                    <li style={{ marginBottom: '15em' }}>Third menu item</li>
                    <li style={{ marginBottom: '15em' }}>Fourth menu item</li>
                    <li style={{ marginBottom: '15em' }}>Fifth menu item</li>
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
    );
}
