import React from 'react';

const ArtistImage = ({artistImage, artistName}) => {

    if(artistImage === undefined) return null;

    return ( 
        <div className="tile is-parent">
            <article className="tile is-child notification is-info">
            <figure className="image is-4by3">
                <img src={artistImage} className="is-vcentered" alt={artistName} />
            </figure>
            </article>
        </div>
     );
}
 
export default ArtistImage;