import { styled } from "styled-components";
const Logo = () => {
    const Div=styled.div`
        display: flex;
        width: 32px;
        height: 32px;
        padding: 2px 4.535px 2.001px 4.53px;
        justify-content: center;
        align-items: center;
    `
    return ( 
        <Div>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
            <path d="M13.4427 15.0626L8.45185 7.78369H4.17296L8.80785 15.0626H8.84241L0.530029 27.9995H5.16492L13.4531 15.0626H13.4427Z" fill="#173057"/>
            <path d="M13.7559 15.0625L23.4646 0H19.1857L9.12096 15.0625H9.1106L13.7455 22.338H18.3804L13.7213 15.0625H13.7559Z" fill="#0065B1"/>
        </svg>

        </Div>
     );
}
 
export default Logo;