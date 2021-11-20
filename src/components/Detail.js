import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/poster-bao.jpg" alt="background" />
      </Background>

      <ImageTitle>
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/bao_logo_41274152.png?region=0%2C0%2C2048%2C1024&lossy=true&width=650"
          alt="poster"
        />
      </ImageTitle>

      <Controls>
        <PlayButton>
            <img src="/images/play-icon-black.png" alt="play" />
            <span>PLAY</span>
        </PlayButton>

        <TrailerButton>
        <img src="/images/play-icon-white.png" alt="play" />
            <span>TRAILER</span>

        </TrailerButton>

        <AddButton>
            <span>+</span>
            </AddButton>

        <GroupButton><img src="/images/group-icon.png" alt="play" />
            
            </GroupButton>
      </Controls>

      <SubTitle>
2018 • 7m • Family, Fantasy, Kids, Animation
      </SubTitle>

      <Description>
      A Chinese mom who's sad when her grown son leaves home gets another
chance at motherhood when one of her dumplings spring to life, But she finds
that nothing stays cute and small forever.

      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
min-height= calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position: relative;



`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    fit-content: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-left: -80px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    fit-content: cover;
  }
`;


const Controls = styled.div`
display: flex;
align-items: center;


`


const PlayButton = styled.button`
cursor: pointer;
border-radius: 4px;
border: none;
display: flex;
align-items: center;
padding: 0 24px;
margin-right: 22px;
background: rbg(249, 249, 249);
height: 56px;

// transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


span{
    letter-spacing: 1.8px;
    font-size: 15px;
    // font-weight: bold;
}

&:hover{
    background: rgb(198, 198, 198);
    // transform: scale(1.2);
}
`

const TrailerButton = styled(PlayButton)`


border: 1px solid white;
background: rgba(0, 0, 0, 0.2);
color: white;

&:hover{
    background: rgba(198, 198, 198, 0.1);
    
}

`


const AddButton = styled.button`

border: 1px solid white;
border-radius: 50%;
width:44px;
height:44px;
background: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
margin-right: 16px;

span{
    font-size: 30px;
    color: white;
    
}
&:hover{
    transform: scale(1.4);

}


`

const GroupButton = styled(AddButton)`
background-color: rgb(0, 0, 0)
`


const SubTitle = styled.div`
margin-top: 16px;
font-size: 15px;
`

const Description = styled(SubTitle)`
font-size: 20px;
line-height: 1.4;
max-width: 760px;
 

`