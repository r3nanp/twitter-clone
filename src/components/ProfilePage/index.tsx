import React from 'react';

import Feed from '../Feed';
import { 
   Container,
   Banner,
   Avatar,
   ProfileData,
   LocationIcon,
   CakeIcon,
   Followage,
   EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined> Editar perfil</EditButton>
        <h1>Renan</h1>
        <h2>@renan</h2>

        <p>
        Estudante de desenvolvimento
        </p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 4 de agosto de 2003
          </li>
        </ul>

      <Followage>
        <span>
          seguindo <strong>283 </strong>
        </span>
        <span>
          <strong>710 </strong> seguidores
        </span>  
      </Followage>  
      </ProfileData>

      <Feed />
    </Container>

  );
}

export default ProfilePage;