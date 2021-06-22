import React from 'react'
import './Navigator.css'
import HomeIcon from '@material-ui/icons/Home';
import NavigationIcon from '@material-ui/icons/Navigation';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core';


export default function Novigator() {
    return (
        <div style={{ position: 'fixed', left: 0, top: '100px' }}>
            <Grid container spacing={2}>
                <Grid item xs>
                    <ul class="menu">
                        <Link to={'/'}>   <li class="menu_no"><HomeIcon className="navi" /><Typography className="tipa" variant="p">Главная</Typography></li></Link>
                        <li class="menu_no"><NavigationIcon className="navi" /><Typography className="tipa" variant="p">Навигатор</Typography></li>
                        <li class="menu_no"><SubscriptionsIcon className="navi" /><Typography className="tipa" variant="p">Подписки</Typography></li>
                        <li class="menu_no"><VideoLibraryIcon className="navi" /><Typography className="tipa" variant="p">Библиотека</Typography></li>
                    </ul>
                </Grid>
            </Grid>

        </div>
    )
}
