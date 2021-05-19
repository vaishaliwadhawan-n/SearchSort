import React from 'react';
import ReactPlayer from 'react-player';
//import AudioPlayer from 'react-audio-player';




const UserItem = ({ name, photo, video_url, age,asset_type,discription ,pic})=>
{
  return (

 
   <div>
    <div className={"photo-item"}>
    <div className={"showed"}>
      <div >
      <img src={photo}  alt=""  width="15%" variant="top" />
       <b align="center"> &nbsp; {name}</b> 
       &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; {age} year
       <p className="discription"><i>{discription}</i> </p>
       

      <div>
       {asset_type==="pic"? (<img className={"user__pic"}  src={pic}  alt="pic" height="50%" 
       width="80%" />): 
      (<ReactPlayer className={"user__video"}  url={video_url} height="50%" 
         width="80%" />)}
         </div>
          </div>
    </div>
    </div>
    </div>
    
  )
}

  

export default UserItem;
/*({ name, photo, video_url, age,asset_type,discription ,pic,audio_url}) => {
  return (
    
    <Card className="user">
      <div>
     <img variant="top" src={photo} className="user__image" />
      <span className="user__name"> {name} </span>
      <strong>Age:</strong> {age}
    </div>
      <Card.Body>
        <Card.Text className="user__details">
          <p>
          <h3>{discription}</h3>
          </p>
          <span>
           
             {asset_type==="pic"? (<img src={pic} height="200px" 
             width="200px" margin="10px" padding="2px 5px 2px 5px"/>): 
           (<ReactPlayer className="user__video" url={video_url} height="200px" 
          width="200px" margin="10px" padding="2px 5px 2px 5px" />) }
          
          </span>
        </Card.Text>
      </Card.Body>
    </Card>*/