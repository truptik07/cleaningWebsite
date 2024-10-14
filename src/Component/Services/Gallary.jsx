import React from 'react';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';
import Typography from "@mui/material/Typography";


const Gallary = () => {
  const imageUrls = [


    "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img3.jpg",

    "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img5.jpg",
    "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img1.jpg",
    "  https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img4.jpg",
    " https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img6.jpg",

    "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img5.jpg",
    "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img3.jpg",

    "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img5.jpg",
    "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img1.jpg",
    "  https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img4.jpg",



  ];
  const imageStyle = {
    width: '300px',
    height: 'auto',
    borderRadius: "5px",
    transition: 'transform .2s'
  };

  return (


    <MDBFooter className='footer' style={{ margin: '20px', borderRadius: '5px', color: 'grey' }}>
      <section>
        <MDBContainer className='text-center text-md-start  '>
          <Typography
            variant="h4"
            color="black"
            gutterBottom
            style={{ marginLeft: "450px", marginTop: "10px", fontFamily: "serif" }}
          >
            GALLARY
          </Typography>

        </MDBContainer>

        <MDBContainer className='text-center text-md-start mt-5' >
          <MDBRow className='mt-3' >
            {imageUrls.map((imageUrl, index) => (
              <MDBCol key={index} md='4' lg='4' xl='4' className='mx-auto mb-4'>
                <img src={imageUrl} alt={`Image ${index + 1}`} style={imageStyle} className='gallary' />
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
};

export default Gallary;
