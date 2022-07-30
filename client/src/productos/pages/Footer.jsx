import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
  } from 'mdb-react-ui-kit';


export const Footer = () => {
  const tg="_blank";
  return (
    <>
    <MDBFooter className='bg-dark text-center text-white mt-3'>
      <MDBContainer className='p-2 pb-0'>
        <section className='mb-2'>
          <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/' target={tg} role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://twitter.com/?lang=es' target={tg} role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1'  href='https://www.google.com/intl/es/gmail/about/' target={tg} role='button'>
            <MDBIcon fab icon='google' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/' target={tg} role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://sv.linkedin.com/' target={tg} role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Design by:
        <a className='text-white' href='#!'>
        Jocelyn Aguilar and Xenia Flores.
        </a>
      </div>
    </MDBFooter>
 
    </>
  )
}
