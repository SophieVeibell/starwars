import React, { Component } from 'react'
import axios from 'axios'
import Planet from '../Planet.png'
import darthvader from '../darthvader.png'

class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount() {
            axios.get('https://swapi.co/api/people')
            .then(res => {
            console.log(res)
            this.setState({
                posts: res.data.results.slice(0,10)
            })
        })
    }
    render () {
        const { posts } = this.state;
        const postList = posts.length ? (
        posts.map(post => {
            return(
            <div className="cardbox">
            <div className="post card">
                <img src= { darthvader } alt=""/>
                <div className="card-content">
                    <span className="card-name">{post.name}</span>
                    <p>PP size: {post.height}cm</p>
                    <p>Height: {post.hair_color}</p>
                </div>
            </div>
            </div>
            )
        })
        ) : (
            <div className="center">You have no power here</div>
        )
        return (
            <div className="container">
            <h4 className="center">Star wars</h4>
            {postList}
            </div>
        )
    }
}

export default Home