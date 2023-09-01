import React from "react";
import ScoreSection from "./RankSection/ScoreSection";
import JourneySection from "./JourneySection/JournerSection";
import { styled } from "styled-components";
import ReviewOverview from "./ReviewOverview/ReviewOverview";
import Headermain from "./HeaderSection/Header";
import Review from "./RecentReviews/Review";
import Overview from "./Overview/Overview";
import { Provider } from "react-redux";
import Footer from "./Footer/Footer";
import store from "./redux/Store";
import AgentsCard from "./AgentsCard";

const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: rgb(251, 252, 252);
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
`;

const Dashboard = () => {
  
  return (
    <Provider store={store}>
        <BodyDiv>
              <Headermain></Headermain>
              <ScoreSection></ScoreSection>
              <JourneySection></JourneySection>
              <ReviewOverview></ReviewOverview>
              <Overview></Overview>
              <Review></Review>
              <Footer></Footer>
              <AgentsCard></AgentsCard>
        </BodyDiv>
    </Provider>
  );
};

export default Dashboard;
