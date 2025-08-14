import styled from "styled-components";

export const CardHolder = styled.div`
    border-radius: 8px;
    transition: 0.2s all;
    display: flex;
    justify-content: center;

    > img {
        transition: 0.2s all;
        border-radius: 8px;
        object-fit: cover;
        cursor: pointer;
    }

    :hover {
        transform: scale(1.5)
    }
`;