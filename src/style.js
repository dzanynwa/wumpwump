import styled from 'styled-components';

export const Container = styled.div`
    max-width: 550px; 
    text-align: center; 
    margin: 0 auto; 
    padding-top: 25px;
`;

export const TileContainer = styled.div`
    background-color: #f8ca73;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23300000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23400000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%2331000b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%233d000d' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23320014' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23390015' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%2331001c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%2333001b' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%232f0023' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%232c0020' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%232b002b' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23240024' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    padding: 0;
    height: 110vh;
    margin-top: -25px;
`;

export const Button = styled.button`
    padding: 10px 30px; 
    background-color: transparent;
    border: 4px solid #5f3d43;
    color: #5f3d43;
    margin-right: 10px;

    &:hover{
        color: #f8ca73;
        background-color: #5f3d43;
        transition: 0.2s ease-in;
    }
`;

export const ButtonContainer = styled.div`
    margin: 40px 0px;
`;

export const Score = styled.h1`
    color: #5f3d43;
    font-size: 36px;
    margin: 5px 0px;
`;
export const Title = styled.h1`
    color: #5f3d43;
    font-size: 66px;
    margin: 5px 0px;
`;
export const ImageContainer = styled.div`
    display: inline-block;
`;
export const Image = styled.img`
    width: 130px;
    height: 130px;
    margin-right: 5px;
    border-radius: 10px;
`;