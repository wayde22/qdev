

export const saveplayList = () => {
  localStorage.setItem("playList", JSON.stringify(this.state.playList));
};

export const handleGetStorage = () => {
  let playList = [];
  
  if (localStorage.getItem("playList") === null) {
    playList = [];
  } else {
    playList = JSON.parse(localStorage.getItem("playList"));
  }
  return playList;
};