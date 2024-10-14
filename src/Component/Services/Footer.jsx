import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

export default function Footer() {
  return (
    <MDBFooter className='footer' style={{ margin: "20px", border: "2px solid rgba(0, 0, 0, 0.05)", borderRadius: "5px", backgroundColor: "black", color: "grey" }}>


      <section >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: "white", fontFamily: "serif" }}>

                Genei Facility Management Services Pvt Ltd
              </h6>
              <h6 style={{ color: "white" }}>
                Genei Facility Management Services is a fully integrated cleaning services company that provides comprehensive, high quality, reliable cleaning solutions to Residential and Corporate clients in Pune.
              </h6>
            </MDBCol>


            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: "white" }}>Quick links</h6>
              <h5 className='txt'>
                Home

              </h5>
              <h5>

                Service
              </h5>
              <h5>

                About

              </h5>
              <h5>

                Login
              </h5>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: "white" }}>Contact</h6>
              <h5>
                <MDBIcon icon="home" className="me-2" />
                Viman Nagar, Pune
              </h5>
              <h5>
                <a href='mailto:geneicareer@gmail.com' >
                  <MDBIcon icon="envelope" className="me-3" />
                  geneicareer@gmail.com


                </a>
              </h5>
              <h5>
                <MDBIcon icon="phone" className="me-3" />
                + 0123456788
              </h5>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>


    </MDBFooter>
  );
}


