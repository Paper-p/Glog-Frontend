import styled from "@emotion/styled";

export const SkeletonLayout = styled.div`
  @-webkit-keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 57px;
  border-radius: 4px;

  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
`;

export const Tag = styled.div`
  width: 100px;
  height: 37.5px;
  border-radius: 4px;
  margin-top: 16px;

  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
`;

export const InfoBox = styled.div`
  width: 100%;
  height: 37px;
  border-radius: 4px;
  margin-top: 16px;

  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
`;

export const Image = styled.div`
  width: 100%;
  height: 200px;
  margin: auto;
  border-radius: 4px;
  margin-top: 50px;

  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
`;

export const Content = styled.div`
  width: 100%;
  height: 800px;
  border-radius: 4px;
  margin-top: 50px;

  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
`;
