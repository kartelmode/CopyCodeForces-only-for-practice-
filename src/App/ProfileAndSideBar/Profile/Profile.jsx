import React from 'react';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchUserInfo from './fetchUserInfo';
import {useParams} from 'react-router-dom';
import Avatar from './Avatar/Avatar.jsx';
import ProfileStyle from './Profile.module.css'
import UserInfo from './UserInfo/UserInfo.jsx';

export default function Profile() {
    const {loading, error, userInfo} = useSelector(state => state.profile);
    const nickname = useParams();
    const urlAPI = "https://codeforces.com/api/user.info?handles=" + (nickname.user !== undefined ? nickname.user : "kartel");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserInfo({urlAPI, nickname}))
    }, [nickname]);

    return (
        <div className={ProfileStyle.profile}>
            <UserInfo userInfo = {userInfo} />
            <Avatar imageSrc = {userInfo.titlePhoto}/>
        </div>
    )
}
