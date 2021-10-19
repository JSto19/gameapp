import React from "react";

// objects: JSON.stringify({"id": data.id, "title": data.title, "thumbnail": data.thumbnail, 
//             "developer": data.developer, "freetogame_profile_url": data.freetogame_profile_url, "game_url": data.game_url, 
//             "genre": data.genre, "platform": data.platform, "publisher": data.publisher, "release_date": data.release_date, 
//             "short_description": data.short_description})

const GameListing = ({item}) => (
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src={item.thumbnail} alt={item.title}/>
          <span className="card-title">{item.title}</span>
        </div>
        <div className="card-content">
          <p>{item.short_description}</p>
        </div>
        <div className="card-action">
          <a href={item.game_url} target="_blank">Description</a>
        </div>
      </div>
    </div>
    
);

export default GameListing;
