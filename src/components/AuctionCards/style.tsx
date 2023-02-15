import { display } from "@mui/system";
import styled from "styled-components";


export const AuctionContainer = styled.div`
    
`

export const AuctionArticle = styled.article`
    width: 33%;
    border-radius: 5px;
    

    `

export const AuctionImage = styled.section`
    
   

    img{
        position: absolute;
        width: 26%;
    }
    
    `

export const AuctionTime = styled.div` 
    background-color: white;
    color: blue;
    width: 123px;
    padding: .6rem;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: space-around
    `


export const AuctionText = styled.div`

    position: relative;
    z-index: 99;
    color: white;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    display: flex;
    gap: 1.2rem;
    flex-direction: column;

    .avatar{
        display: flex;
        align-items: center;
    }


    .price{
        display: flex;
        justify-content: space-between;
    }

    .price>div{
        display: flex;
        gap: 1.2rem;
    }
    .price>div p{
        color: black;
        padding: 0.6rem 0.7rem;
        background-color: white;
    } 
`

export const AuctionFooter = styled.div`
    display: flex;
    padding: 0 2rem 0 1.2rem;
    justify-content: space-between;
    align-items: center;
    color: white;
    width: 100%;
    height: 62px;
    background-color: #4529E6
`
