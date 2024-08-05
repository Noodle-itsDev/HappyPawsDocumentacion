import React from 'react';
import { Container, Button } from '@mui/material';

export default function Home() {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -1,
          objectFit: 'cover',
        }}
      >
        <source src="/vid.mp4" type="video/mp4" />
      </video>

      <Container
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ backgroundColor: '#ffffff6b', padding: '2.5rem', borderRadius: '15px' }}>
          <p style={{ textAlign: 'center', fontSize: '22px', color: 'black', fontWeight: '600' }}>Developers</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', marginBottom: '2rem'}}>
            <a href="https://www.linkedin.com/in/johanalmeidacortec/"><Button variant="contained" sx={{ m: 1 , fontWeight: '600', backgroundColor: 'black', width: '100%'}}>Kelly Johana Almeida</Button></a>
            <a href="https://www.linkedin.com/in/borja-orts-lopez"><Button variant="contained" sx={{ m: 1 , fontWeight: '600', backgroundColor: 'black', width: '100%'}}>Borja Orts</Button></a>
            <a href="https://www.linkedin.com/in/jennifer-diaz-cruz/"><Button variant="contained" sx={{ m: 1 , fontWeight: '600', backgroundColor: 'black', width: '100%'}}>Jennifer Diaz</Button></a>
            <a href=""><Button variant="contained" sx={{ m: 1 , fontWeight: '600', backgroundColor: 'black', width: '100%'}}>Alejandro Agustench</Button></a>
          </div>
          <p style={{ textAlign: 'center', fontSize: '22px', color: 'black', fontWeight: '600' }}>Utils</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', columnGap: '0.5rem' }}>
            <a href="https://github.com/Noodle-itsDev/Happy-Paws-Backend-Project"><Button variant="contained" sx={{ m: 1 , fontWeight: '600', backgroundColor: 'blueviolet', width: '100%'}}>Repositorio BackEnd</Button></a>
            <a href="https://github.com/Noodle-itsDev/happypaws-app"><Button variant="contained" sx={{ m: 1 , fontWeight: '600', backgroundColor: 'blueviolet', width: '100%'}}>Repositorio FrontEnd</Button></a>
            <a href="https://drive.google.com/file/d/1xqP4blt2SoISL0OI_tOdoBCX7Yo32g7Y/view?usp=sharing"><Button variant="contained" sx={{ m: 1 , fontWeight: '600', backgroundColor: 'darkblue', width: '100%'}}>Documentación proyecto</Button></a>
            <a href=""><Button variant="contained" sx={{ m: 1 , fontWeight: '600', backgroundColor: 'darkblue', width: '100%'}}>WEB</Button></a>
          </div>
        </div>

      </Container>
    </div>
  );
}
