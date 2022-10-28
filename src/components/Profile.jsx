import React from 'react';
import c from './Profile.module.css'


const Profile = () => {
    return <div className={c.content}>
        <img id="img2" src='https://image.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg' />
    

    <div>ava + description</div>
    <div>
        My posts
        <div>
            New post
            </div>
            <div className='posts'>
            <div className={c.item}>
                Post 1
                </div>
                <div className={c.item}>
                Post 2
            </div>
        </div>
    </div>
</div>
}

export default Profile;