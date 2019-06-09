import React from 'react'
import { format } from 'url';

const GetUser = ({getInfo, onSaveUser}) => {

  let userUrl = `https://github.com/${getInfo.login}`
  let userRepos = `https://github.com/${getInfo.login}?tab=repositories`
  let userFollowers = `https://github.com/${getInfo.login}?tab=followers`
  let userFollowing = `https://github.com/${getInfo.login}?tab=following`

  
  return (
    
    <>
      <div>
        {/* <div className="conatainer"> */}
          <img src={getInfo.avatar_url} /> 
        </div>
          <div >
            <span >Name: <a href={userUrl} target='_blank'> {getInfo.name} </a></span>
          </div>
          <div className="legend">
            <span >{getInfo.bio}</span>
          </div>
          <div >
            <span>Followers: <a href={userFollowers} target='_blank'>  {getInfo.followers}</a></span>
          </div>
          <div >
            <span>Following: <a href={userFollowing} target='_blank'>{getInfo.following}</a></span>
          </div>
          <div>
            <span>Repos: <a href={userRepos} target="_blank">{getInfo.public_repos}</a></span>
          </div>
        {/* </div> */}
    </>
    
  )

}

export default GetUser;