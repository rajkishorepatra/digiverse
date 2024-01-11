import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box,Container,Grid} from '@material-ui/core';
import Rating from '@mui/material/Rating';

const testimonials = [
  {
    id: 1,
    name: 'Krishna Sarangi',
    photo: 'https://i.postimg.cc/bNw4CDjk/student1.jpg', // Replace with the actual URL or path to the photo
    rating: 5,
    testimonial: "I enrolled in DigiVerse360's digital marketing course and it exceeded my expectations! The comprehensive curriculum and hands-on projects provided a solid foundation. I now feel confident in navigating the dynamic world of digital marketing",
  },
  {
    id: 2,
    name: 'Shweta Shaw',
    photo: 'https://i.postimg.cc/9XRxgv8X/student2.jpg', // Replace with the actual URL or path to the photo
    rating: 5,
    testimonial: "Choosing DigiVerse360 for my digital marketing education was a game-changer! The engaging classes, under the guidance of Ceo - Mr. Shubham Pani, and practical insights made learning enjoyable. I've acquired valuable skills that are already making a difference in my career.",
  },
];

const StudentTestimonial = () => {
    return (
        <>
        <h1 className="text-center text-white"> 
        <strong>      
      Student Testimonials</strong></h1>
      <p className="text-center text-secondary">Discover what students say about our Courses. 
      From personalized guidance to impactful strategies, our support empowers them.</p>
      <Container className='stu-testimonial-container' maxWidth="md" style={{ padding: '20px', height: '100vh' }}>
        <Grid container spacing={2} justifyContent="center">
          {testimonials.map((testimonial) => (
            <Grid item key={testimonial.id} xs={12} sm={6} md={6} lg={6}>
              <Card className='stu-testimonial-card' style={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  alt={testimonial.name}
                  style={{ objectFit: 'cover' }}
                  image={testimonial.photo}
                />
                <CardContent>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography className='text-white' variant="h6" gutterBottom>
                      {testimonial.name}
                    </Typography>
                    <Rating name={`rating-${testimonial.id}`} value={testimonial.rating} readOnly />
                  </Box>
                  <Typography className='text-secondary' variant="body2" color="textSecondary" component="p">
                    {testimonial.testimonial}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container> 
      </>
    );
  };
  
  export default StudentTestimonial;