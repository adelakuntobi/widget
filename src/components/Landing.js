import React from 'react'
import styled from 'styled-components'
import BgImg from "../images/bgImg3.jpg"


const BgImgDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: #f5f6fa;
  /* background: lightblue url(${BgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative; */


  .text-holder{
    background-color: #fff;

  }
  .overlay{
    /* background: rgba(0, 0, 0, 0.7); */
    background: linear-gradient(#8080805e, rgba(0, 0, 0, 0.7));
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 10;
  }
`;

export const DefaultBtn = styled.button`

background-color: #245b5f;
      color: white;
      border-color: #245b5f;
      padding: .75rem 3.5rem;
      border-radius: 0.25rem;
      width: 100%;`;

const Landing = () => {
  return (
    <div className="transition duration-1000 ease-in-out transform">
      {/* Start Modal */}
      <BgImgDiv>
        {/* <div className="overlay"></div> */}
        <div className="bg-white rounded-lg z-20 px-8 py-12 text-holder">
          <h2 className="text-3xl font-semibold">Online <span>KYC</span> like no other</h2>
          <p className="my-6 text-sm">Verify your identity to access financial<br /> services in less than 30 seconds</p>
          <DefaultBtn>Start Now</DefaultBtn>
        </div>
        {/* <div className="overlay"></div> */}
      </BgImgDiv>

    </div>
  )
}

export default Landing
