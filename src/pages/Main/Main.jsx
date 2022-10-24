import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap, Power3 } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

const Main = () => {
  let introText = useRef(null);

  useEffect(() => {
    gsap.to(introText, {
      duration: 3,
      text: 'Frontend Developer + UI / UX Designer',
      ease: Power3.easeInOut,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <Wrap>
      <ImageArea></ImageArea>

      <TextArea>
        안녕하세요. <br></br>
        <Text
          ref={el => {
            introText = el;
          }}
        >
          UI / UX Designer
        </Text>
        이후경입니다. <br></br>무형의 가치를 유형의 가치로 바꾸는데 관심이 있습니다.
      </TextArea>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  margin-top: -60px;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 3rem;
  width: 100%;
  height: 100vh;
`;

const ImageArea = styled.div``;
const TextArea = styled.div`
  white-space: pre-line;
  line-height: 3.2rem;
  font-size: 2rem;
  font-weight: 600;
`;
const Text = styled.p`
  filter: blur(0.8px);
`;

// const texts = ['Frontend Devleop', 'UI/UX Designer'];
export default Main;
