import {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./redux";
import { styled } from "styled-components";
import { Card } from "antd";
const Tablediv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
const CardsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 25px;
`;
const CardDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  height: 100%;
`;
function AgentsCard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const Data = useSelector((state) => state?.tiersdata.data.data);
  const Error = useSelector((state)=> state?.tiersdata.error)
  const agents = Data?.tier?.agents;
  
    if(Error !== null)
    { 
        return   <h1>Sorry there is sokme issue from our side</h1>;
    }
    else {
  return (
    <Tablediv>
      <h2>Sample Organization</h2>
      <HeaderDiv>
        <h4>Active agents : {Data?.tier?.active_agent}</h4>
        <h4>total_agent : {Data?.tier?.total_agent}</h4>
        <h4>Total Verified Agents : {Data?.tier?.verified_agent}</h4>
      </HeaderDiv>
      <Container>
        <h2>Agents</h2>
        <CardsDiv>
          {

          }
          {agents?.map((data) => {
            return (
              <Card title={data?.name} style={{ width: 550 }}>
                <CardDiv>
                  <img
                    src="https://www.pngkey.com/png/full/22-223848_businessman-vector-person-logo-png.png"
                    width={100}
                    alt="person"
                  ></img>
                  <div>
                    <p>User Id : {data?.user_id}</p>
                    <p>Position : {data?.title}</p>
                    <p>Mail Id : {data?.email}</p>
                    <p>Slug : {data?.slug}</p>
                  </div>
                </CardDiv>
              </Card>
            );
          })}
        </CardsDiv>
      </Container>
    </Tablediv>
  );
}
}
export default AgentsCard;
