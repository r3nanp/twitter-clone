import React from 'react';

import { 
   Container,
   Retweeted,
   RocketseatIcon,
   Body,
   Avatar,
   Content,
   Header,
   Dot,
   Description,
   ImageContent,
   Icons,
   Status,
   CommentIcon,
   RetweetIcon,
   LikeIcon
  } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Renan</strong>
            <span>@renan</span>
            <Dot />
            <time> 25 de jul</time>
          </Header>

          <Description>Testando...</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              20
              <RetweetIcon />
              20
              <LikeIcon />
              150
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;