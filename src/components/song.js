import React from 'react';

const Song = ({title, lyric}) => {

    if(lyric.length === 0) return null;

    return ( 
        <div className="tile is-parent">
            <article className="tile is-child notification is-success">
            <div className="content">
                <p className="title">{title}</p>
                <div className="content">
                    <p>{lyric}</p>
                </div>
            </div>
            </article>
        </div>
    );
}
 
export default Song;