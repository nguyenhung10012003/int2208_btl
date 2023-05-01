import {useState, createContext, useContext} from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({children}) => {

    const [listTrack, setListTrack] = useState([]);
    const [nowSong, setNowSong] = useState(-1);

    return (
        <PlayerContext.Provider value={{ listTrack, nowSong, setNowSong, setListTrack}}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayer = () => {
    return (useContext(PlayerContext));
}
