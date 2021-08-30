

import React, { Component } from 'react'
import axios from 'axios'
import {Image, Grid,  Card} from 'semantic-ui-react'
import a from '../../images/a.jpg';

class Activities extends Component {
    constructor(){
        super()
        this.state = {
            posts : [],
            photos: [],
            test:[]
        }
    }
    componentDidMount(){
        this.get_backend()
        this.getphoto()
        this.getdata()
    }   

    get_backend=()=>{
        axios.get('http://localhost:9000/')
        .then((res)=>{ 
        console.log(res) })
        .catch((error)=>{
            console.log(error)
        }) 
    }

    getphoto=()=>{ 
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=7')
        .then((res)=>{ 
            this.setState({photos:res.data})
        // console.log(res) 
        })
        .catch((error)=>{
            console.log(error)
        }) 
    }
    getdata=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=7')
        .then((res)=> {
             // console.log(res)
            this.setState({posts:res.data})
            this.getTest()
        })
        .catch((error)=>{
            console.log(error)
        }) 
    }   
    getTest = e => {
        let i;
        let arrTest = [];
        for(i=0; i<this.state.posts.length; i++){
            for(var j=0; j<this.state.photos.length; j++){
                if (j === i){
                    let testObj = {
                        post: this.state.posts[i],
                        photo:  this.state.photos[i]
                    }
                    arrTest.push(testObj)
                }
            }
        }
        this.setState({test: arrTest})
    } 
    render() {
        // console.log(this.state.posts)
        // console.log(this.state.test)
        // console.log(this.state.photos)
        return (
                <div  className='div_Activities'>
                    <h1>Current Activities</h1>
                    <hr/>
                    <br/>
                    <div className='grid_div' >
                        { this.state.test && this.state.test.map(val=>{
                                // let theclassname = val.post.id %2 !==1?  'leftdiv': 'rightdiv';
                                return(
                                    <div className='date' >
                                        <Card fluid className='date_grid'>
                                            <Grid>
                                                <Grid.Column width={10}>
                                                    <h2> {val.post.title}</h2>
                                                    <Card.Meta> in 2020</Card.Meta>
                                                    <p> {val.post.body}{val.post.body}{val.post.body}</p>
                                                </Grid.Column>
                                                <Grid.Column width={6}>
                                                    <Image  floated='right' height='250px'  src={val.photo.url}/>
                                                </Grid.Column>
                                            </Grid>
                                        </Card>
                                    </div>    
                                )
                            })
                        }
                    </div>
                </div>
        );
    }
}
export default Activities;
