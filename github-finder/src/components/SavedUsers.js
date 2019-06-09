import React from 'react'

const SavedUsers = ({ savedUsers, onDeleteSavedUser }) => {
  return (
    <>
      {
        savedUsers.map( (savedUser) => {
          let userUrl = `https://github.com/${savedUser.login}`
          return (
            <div >
              <span  className="container zoom">
                <img className="savedImg" src={savedUser.avatar_url} />
                <a href={userUrl} target="_blank" className="textSaved"> {savedUser.login}</a>
                <button onClick={() => onDeleteSavedUser(savedUser.id)} > Delete </button> 
              </span>
            </div>
          )
        })
      }
    </>
  )
}

export default SavedUsers;