import React, { useState, useEffect } from 'react'
import './Header.css'
import { API } from '../../config'
import img1 from '././../../component/img/1384060.png'
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import NavigationIcon from '@material-ui/icons/Navigation';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link } from 'react-router-dom'
import { AppBar, Container, IconButton, Toolbar, Typography } from '@material-ui/core';
import Search from '../Search';



export default function Header({ value, setValue, search }) {

  return (
    <div className="header">

      <AppBar className="cont" position="fixed">
        <Container position="fixed">
          <Toolbar>

            <div class="burger-menu">

              <input type="checkbox" id="menu_toogle" />
              <label for="menu_toogle" class="menu_btn">
                <span></span>
              </label>



              <ul class="menu_box">
                {/* <h6 className="imge">{<img src={img1}/>}</h6> */}
                <Link to={'/'}><li class="menu_item"><HomeIcon className="home" /><Typography className="tip" variant="p">Главная</Typography></li></Link>
                <li class="menu_item"><NavigationIcon className="home" /><Typography className="tip" variant="p">Навигатор</Typography></li>
                <li class="menu_item"><SubscriptionsIcon className="home" /><Typography className="tip" variant="p">Подписки</Typography></li>
                <hr className="hr" />
                <li class="menu_item"><VideoLibraryIcon className="home" /><Typography className="tip" variant="p">Библиотека</Typography></li>
                <li class="menu_item"><HistoryIcon className="home" /><Typography className="tip" variant="p">История</Typography></li>
                <li class="menu_item"><VideoCallIcon className="home" /><Typography className="tip" variant="p">Ваши видео</Typography></li>
                <li class="menu_item"><WatchLaterIcon className="home" /><Typography className="tip" variant="p">Смотреть позже</Typography></li>
                <li class="menu_item"><ThumbUpIcon className="home" /><Typography className="tip" variant="p">Понравившиеся</Typography></li>
                <Typography className="tipag">Подписки</Typography>
                <li class="menu_item"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /><Typography className="tip" variant="p">Владилен Минин</Typography></li>
                <li class="menu_item"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /><Typography className="tip" variant="p">Владилен Минин</Typography></li>

              </ul>

            </div>


            <Typography variant='h6'>Kyrgyz YouTube</Typography>
          </Toolbar>
        </Container>
      </AppBar>


      <Grid container spacing={3}>
        <Grid item xs>
          <h5 className="youtuber">
            <img src={img1} />
            <Typography variant="h5">youtube</Typography>
          </h5>
        </Grid>
        <Grid item xs={6}>
          <h5>
            <form onSubmit={(e) => {
              e.preventDefault()
              search()
            }
            }
              className="forme"
            >
              <input
                className="input"
                placeholder="Введите запрос"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                }}
              />
              <KeyboardIcon className="keyboard" />
              <Button onClick={search} className="search"><SearchTwoToneIcon /></Button>
              <MicIcon className="micr" />
            </form></h5>
        </Grid>
        <Grid item xs>
          <h5 className="icons">
            <VideoCallSharpIcon />
            <LiveTvIcon />
            <NotificationsIcon />
            <Avatar alt="Erlan" className="avatar" />

          </h5>
        </Grid>
      </Grid>


    </div>
  )
}






