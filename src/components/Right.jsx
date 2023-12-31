import styled from "styled-components";
import React from "react";

function RightSide() {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <Follow>
            <li>
              <a>
                <Avatar />
              </a>
              <div>
                <span>#LinkedIn</span>
                <button>Follow</button>
              </div>
            </li>
            <li>
              <a>
                <Avatar />
              </a>
              <div>
                <span>#Video</span>
                <button>Follow</button>
              </div>
            </li>
          </Follow>
        </FeedList>
        <Recommendation>
          view all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img src="images/dream.jpg" alt="" />
      </BannerCard>
    </Container>
  );
}

const Container = styled.div`
  grid-area: rightside;
`;
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  margin: 12px 0;
  position: relative;
  font-size: 14px;
  div {
    display: flex;
    flex-direction: column;
  }
  button {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.6);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
    padding: 10px;
    text-align: center;
    border-radius: 15px;
    box-sizing: border-box;
    font-weight: 600;
    max-height: 32px;
    max-width: 480px;
  }
  li {
    list-style-type: none;
    display: flex;
    margin: 5px;
  }
`;
const Follow = styled.div`
  display: flex;
`;
const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default RightSide;
