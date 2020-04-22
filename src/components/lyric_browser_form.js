import React, {Fragment, useState} from 'react';

const LyricBrowserForm = ({saveSearch}) => {

    const [lastSearch, saveLastSearch] = useState({
        artist:'',
        song:''
    });

    const [formDataError, onFormDataError] = useState(false);

    const { artist, song } = lastSearch; 

    const updateState = event => {
        saveLastSearch({
            ...lastSearch,
            [event.target.name] : event.target.value
        });
    };

    const findInfo = event => {
        event.preventDefault();

        if(artist.trim() === '' || song.trim() === ''){
            onFormDataError(true);
        }else{
            onFormDataError(false);
            saveSearch(lastSearch);
        }
    }

    return ( 
        <Fragment>
            <form
                onSubmit={findInfo}
            >
                <div className="field">
                    <label className="label">Song Title</label>
                    <div className="control">
                        <input 
                            className="input is-rounded" 
                            type="text" 
                            name="song"
                            placeholder="Song" 
                            onChange = { updateState }
                            value = {song}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Artist or Group</label>
                    <div className="control">
                        <input 
                            className="input is-rounded" 
                            type="text"
                            name="artist" 
                            placeholder="Artist" 
                            onChange = { updateState }
                            value = {artist}
                        />
                    </div>
                </div>
                <div className="field">
                    <button
                            className="button is-fullwidth is-danger is-outlined is-rounded"
                            type="submit"
                        >
                        Find!
                    </button>
                </div>
                { formDataError 
                    ?
                    <article className="message is-danger">
                        <div className="message-header">
                            <p>Incomplete info</p>
                        </div>
                        <div className="message-body">
                            <p>
                                To find your lyric song, is mandatory to include the name of this song and the artist or musical group
                            </p>
                        </div>
                    </article>
                    :
                    null
                }
            </form>            
        </Fragment>
    );

}
 
export default LyricBrowserForm;