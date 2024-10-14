import React from 'react';
import './Teams.css'

const Teams = () => {
  const teamMembers = [
    {
      name: 'Sudesh Gowda',
      title: 'director of houskeeping',
      image: 'https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ca1AFfPfzOPtHZdAwa7QtCD1TFDws7PG9t_rqSibdC0=',
       
    },
    {
      name: 'Vijay Tripathi',
      title: 'Cleaning Dep Mgr ',
      image: 'https://media.istockphoto.com/id/1315976553/photo/portrait-of-a-smiling-man-of-indian-origin.jpg?s=612x612&w=0&k=20&c=0N93El-QxguVn9whsAiVvsSNYiscqbsucWlQE9i84co=',
      
    },
   
    {
      name: 'Prasad Chaughule',
      title: 'Assistant',
      image: 'https://i.imgur.com/0Cdlenp.jpg',
      
    },
    {
      name: 'shinchan wu',
      title: 'Desk Control Supervisor ',
      image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=',
      
    },
    {
      name: 'monkey d lufi',
      title: 'Business Analyst',
      image: 'https://media.istockphoto.com/id/1464547965/photo/worker-thinking-or-typing-on-laptop-in-cafe-coffee-shop-or-restaurant-on-startup-ideas-vision.jpg?s=612x612&w=0&k=20&c=nliib6Ff071jQkwFLjExWcdiyxC8NwUDUBsgUaHdT74=',
      
    },
    {
      name: 'roro nova zoro',
      title: 'StoreKeeper',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
      
    },
    {
      name: 'nami Thakur',
      title: 'Linen Room Maid',
      image: 'https://media.istockphoto.com/id/1482886552/photo/portrait-of-happy-indian-young-teacher-holding-book-looking-at-camera-in-isolated-white.jpg?s=612x612&w=0&k=20&c=dgQfJRa4SlYTWRt4nAbIX1sXCSh_47In8qF0fQkyQjs=',
       
    },
    {
      name: 'Aman Mourya',
      title: 'Public Area Supervisor',
      image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww',
       
    },
  ];

  return (
    <div>
      <div className="team-grid">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Meet Our Team</h2>
            
          </div>
          <div className="row people d-flex justify-content-center">
            {teamMembers.map((member, index) => (
              <div className="col-md-4 col-lg-3 item" key={index}>
                <div className="box" style={{ backgroundImage: `url(${member.image})` }}>
                  <div className="cover">
                    <h3 className="name">{member.name}</h3>
                    <p className="title">{member.title}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
