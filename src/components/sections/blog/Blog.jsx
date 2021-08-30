

import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Darkmode from 'darkmode-js';
import axios from 'axios'
new Darkmode().showWidget();

const photos = [
  'https://source.unsplash.com/featured/?{horizon}',
  'https://source.unsplash.com/featured/?{nature}',
  'https://source.unsplash.com/featured/?{mountain}',
  'https://source.unsplash.com/featured/?{bird}',
  'https://source.unsplash.com/featured/?{valley}',
  'https://source.unsplash.com/featured/?{sky}',
  'https://source.unsplash.com/featured/?{desert}',
  'https://source.unsplash.com/featured/?{forrest}',
  'https://source.unsplash.com/featured/?{grass}',
  'https://source.unsplash.com/featured/?{sunset}',
];

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          title: 'Intro',
          content:
            'Pachachaca is a project for educational guidance and a community center located in the Andes of Calca, Peru, a region that for many is an experience of extreme poverty. Through a preventive, multidimensional  approach...',
          date: '22/7/2018',
          readingCount: '219',
        },
        {
          title: 'Pachachaca Family Home',
          content:
            'Children who are no longer safe will first be removed from the household by the juvenile judge and placed into temporary housing. Unfortunately, the children who grow up in these juvenile facilities in Peru are generally very poor off. Pachachaca wants to show that...',
          date: '27/10/2018',
          readingCount: '89',
        },
        {
          title: 'Educational Community Center',
          content:
            'Every Saturday Pachachaca opens its doors to around 50 children from the neighborhood. In the summer holidays (January-February in the Southern Hemisphere of Peru) 80 children take part actively in our workshops every year. Often, these children cannot go home during the day and they...',
          date: '02/01/2019',
          readingCount: '119',
        },
        {
          title: 'Developing Life',
          content:
            'Every Saturday Pachachaca opens its doors to around 50 children from the neighborhood. In the summer holidays (January-February in the Southern Hemisphere of Peru) 80 children take part actively in our workshops every year. Often, these children cannot go home during the day and...',
          date: '17/02/2019',
          readingCount: '52',
        },
        {
          title: 'Starting New Programme',
          content:
            'We want to provide intensive guidance to the 30 most vulnerable families known to us, some 120 people in total. In addition to activities for children from the neighborhood, we actively assist the parents in raising their children and involve...',
          date: '01/04/2019',
          readingCount: '21',
        },
        {
          title: 'Sustainability in Pachachaca Mission',
          content:
            'In 2018, together with the Dutch-Peruvian development organization Por Eso!, we wrote a plan to build an ecologically aware vegetable garden and drying cabinet for use in 2019. In 2019 we started growing and preserving our own vegetables, herbs and...',
          date: '27/07/2019',
          readingCount: '110',
        },
        {
          title: 'Monitoring and Evaluation in Pachachaca Mission',
          content:
            'All activities within the various program highlights are systematically monitored. Participant lists are kept along with meeting reports, home visits and related conversations are well recorded. The results are evaluated every six months. This concerns...',
          date: '12/10/2019',
          readingCount: '33',
        },
      ],
    };
  }
  componentDidMount(){
    this.get_backend()
}   

  get_backend=()=>{
    axios.get('http://localhost:9000/blog')
    .then((res)=>{ 
    console.log(res) })
    .catch((error)=>{
        console.log(error)
    }) 
}
  render() {
    return (
      <div className='divBlog'>
        <h1 > Our Blog Posts <hr /> </h1>
        <br />
        <div> 
          {this.state.posts.map((post, index) => {
            return ( 
              <div key={post.date}>
                  <Grid className='gridBlog'>
                      <Grid.Column width={4}>
                        <img className='imgBlog' alt='blog' src={photos[index]} />
                      </Grid.Column>
                  <Grid.Column width={10}>
                    <Header
                      as='h2'
                      style={{
                        fontFamily: 'sans-serif',
                        paddingLeft: '15%',
                      }}
                    >
                      {post.title}
                    </Header>
                    <p className='pBlog'>
                      {post.content}
                      <br />
                      <br />
                      Written on: {post.date} by Daphne
                    </p>
                  </Grid.Column>
                </Grid>
              </div>
              
            );
          })}
        </div>
      </div>
    );
  }
}
export default Blog;
