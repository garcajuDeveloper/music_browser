import React from 'react';

const ArtistInfo = ({artistName, artistStyle, artistBiography}) => {

    if(artistName === undefined) return null;

    return ( 
        <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
                <p class="title">{artistName}</p>
                <p class="subtitle">{artistStyle}</p>
                <div class="content">
                    <p>{artistBiography}</p>
                </div>
            </article>
        </div>
      );
}
 
export default ArtistInfo;