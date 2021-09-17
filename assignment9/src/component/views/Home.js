import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../apis/getUserProfile';
import "../css/Home.css";
const Home = () => {
    const [inputValue, setinputValue] = useState('');
    const [inputSubmit, setinputSubmit] = useState('');
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const inputOnchange = (e) => {
        setinputValue(e.target.value);
    }

    const inputSubmitValue = () => {
        setinputSubmit(inputValue);
    }



    useEffect(() => {
        if (inputSubmit) {
            const fetchUsers = async () => {
                setLoading(true);
                const { error, data } = await getUserProfile(inputSubmit);
                setLoading(false);

                if (error) {
                    return setError(error);
                }

                return setUsers(data);
            };
            fetchUsers();
        }

    }, [inputSubmit]);


    if (loading) {
        return <div>Loading.......</div>;
    }



    return (
        <div className="background_warp">
            <section className="profile_generate_wrap">
                <div className="profile_name">
                    <h2>Github Profile</h2>
                    <p>Generate your Github Profile</p>
                </div>

                <div className="profile_username_input_wrap">
                    <p>Github Username {inputValue}</p>
                    <p>Submited {inputSubmit}</p>
                    <div className="user_form" >
                        <input type="text" value={inputValue} onChange={inputOnchange} className="user_name" />
                        <button className="generate_profile_btn" onClick={inputSubmitValue} >Generate</button>
                    </div>
                </div>

            </section>


            <section className="profile_details_wrap">
                <div className="profile_image_container">
                    <img src={users.avatar_url} alt="img" />
                </div>
                <div className="name_username_container">
                    <p>{users.name}</p>
                    <p>@{users.login}</p>
                </div>

                <div className="follower_following_repo_conatiner">
                    <div className="follwer_conatiner">
                        <p>{users.followers}</p>
                        <button>Followers</button>
                    </div>
                    <div className="follwer_conatiner">
                        <p>{users.following}</p>
                        <button>Following</button>
                    </div>
                    <div className="follwer_conatiner">
                        <p>{users.public_repos}</p>
                        <button>Repositories</button>
                    </div>
                </div>

                <div className="info_wraper">
                    <div className="personal_info_wrap">
                        <div className="info_container">
                            <div className="user_info_wrap">
                                <p><span></span>Email</p>
                                <p>{users.email}</p>
                            </div>
                            <div className="user_info_wrap">
                                <p><span></span>Organization</p>
                                <p>{users.company}</p>
                            </div>
                        </div>

                        <div className="info_container">
                            <div className="user_info_wrap">
                                <p><span></span>Location</p>
                                <p>{users.location}</p>
                            </div>
                            <div className="user_info_wrap">
                                <p><span></span>Joined Date</p>
                                <p>{users.created_at}</p>
                            </div>
                        </div>

                        <div className="info_container">
                            <div className="user_info_wrap">
                                <p><span></span>Twitter</p>
                                <p>{users.twitter_username}</p>
                            </div>
                            <div className="user_info_wrap">
                                <p><span></span>Website</p>
                                <p><a href={users.html_url}>{users.login}</a></p>
                            </div>
                        </div>

                    </div>
                    <div className="bio_info_wrap">
                        <p>Bio</p>
                        <p>{users.bio}</p>

                    </div>
                </div>


            </section>
        </div>
    )
}
export default Home
