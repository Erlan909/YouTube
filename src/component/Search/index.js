import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { API } from '../../config'
import Grid from '@material-ui/core/Grid';
import './search.css'
import { CardMedia, Container } from '@material-ui/core';


function RenderVideos({ video }) {
    return (
        <>
        <div style={{flex: '0 1 30%'}}>

                <Link to={'/detail/' + video.id.videoId}>

                    <img src={video.snippet.thumbnails.high.url}
                        style={{
                            width: '304px',
                            height: '200px'
                        }}
                    />
                </Link>

            {/* <span>{video.snippet.title.length > 21 ? video.snippet.title.slice(0, 21) : video.snippet.title}</span> */}



            <div className="text">
                <h4 className="title">{video.snippet.title.length > 21 ? video.snippet.title.slice(0, 21) : video.snippet.title}</h4>
                <p className="Mvideo">{video.snippet.publishTime} {video.snippet.timestamp}</p>
                <p className="Mvideo">{video.snippet.description.length > 21 ? video.snippet.description.slice(0, 21) : video.snippet.description}</p>
            </div>
            </div>
        </>

    )
}

export default function Search({videos}) {
// 
    // const [val, setVal] = useState('')
    // const [videos, setVideos] = useState()
    // const search = async (e) => {
    //     e.preventDefault()
    //     let resp = await fetch(API + 'q=' + val)
    //     let data = await resp.json()
    //     console.log(data);
    //     setVideos(data.items)
    // }
    // useEffect(() => {
    //     videoVs()
    // }, [])


    // const videoVs = async (name) => {
    //     let resp = await fetch(API + 'q=' + name)
    //     let data = await resp.json()
    //     console.log(data);
    //     setVideos(data.items)
    // }


    return (
        <>

            {/* <form onSubmit

                ={
                    search
                }
                className="forme"
            >
                <input
                    className="input"
                    value={val}
                    onChange={(e) => {
                        setVal(e.target.value)
                    }}
                />
                <button>Search</button>
            </form> */}
        
                <div className="videos">
                    {
                        videos &&
                        videos.map(video => {
                            return (

                                <RenderVideos video={video} />

                            )
                        })

                    }
                </div>

        </>
    )
}