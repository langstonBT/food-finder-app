import styled from "styled-components";
 
export const Box = styled.div`
    padding: 5% 2.5%;
    background-color: rgba(33, 35, 38, 0.2);
    bottom: 0;

    @media (max-width: 1000px) {
        // padding: 70px 30px;
    }
`;
 
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;
 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    
`;
 
export const Row = styled.div`
    display: flex;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    justify-content: space-around;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;
 
export const FooterLink = styled.a`
    color:black;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;
    &:hover{
      color:rgb(27, 106, 252);
    }
    
`;
 
export const Heading = styled.p`
    font-size: 22px;
    color:black;
    margin-bottom: 40px;
    font-weight: bold;
`;