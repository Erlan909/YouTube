import React, { useState, useEffect } from 'react'
import { API } from '../../config'
import './detail.css'
import { Link } from 'react-router-dom'

function RenderVideos({ video }) {
    return (
        <>
            <div style={{ flex: '0 1 30%' }}>

                <Link to={'/detail/' + video.id.videoId}>

                    <img src={video.snippet.thumbnails.high.url}
                        style={{
                            width: '250px',
                            height: '150px'
                        }}
                    />
                </Link>

                <span>{video.snippet.title.length > 21 ? video.snippet.title.slice(0, 21) : video.snippet.title}</span>



                <div className="text">
                    <h4 className="title">{video.snippet.title.length > 21 ? video.snippet.title.slice(0, 21) : video.snippet.title}</h4>
                    <p className="Mvideo">{video.snippet.publishTime} {video.snippet.timestamp}</p>
                    <p className="Mvideo">{video.snippet.description.length > 21 ? video.snippet.description.slice(0, 21) : video.snippet.description}</p>
                </div>
            </div>
        </>

    )
}

export default function Detail(props) {
    const { videoId } = props.match.params
    const fullVideo = 'https://www.youtube.com/embed/' + videoId

    const [videos, setVideos] = useState([])

    useEffect(() => {
        videoVs()
    }, [])


    const videoVs = async (e) => {
        let res = await fetch(API + 'q=')
        let data = await res.json()
        console.log(data);
        setVideos(data.items)
    }
    return (
        <div className="lenovo">
            <div className="ifr">
                <iframe
                    className="ifram"
                    width="744"
                    height="480"
                    src={fullVideo}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >

                </iframe>
                {/* <h5 className="titlem">{video.snippet.title}</h5> */}

            </div>
            <div className="randomVideo">
                {
                    videos &&
                    videos.map(video => {
                        return (

                            <RenderVideos video={video} />

                        )
                    })

                }
            </div>

        </div>

    )
}