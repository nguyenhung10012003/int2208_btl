import Sections from "./Sections";

function Library() {
    const data = [
        {
            title: 'Playlist',
            cards:
                [
                    { title: 'My Playlist', img: 'holder.js/100px160' },
                    { title: 'My Playlist', img: 'holder.js/100px160' },
                    { title: 'My Playlist', img: 'holder.js/100px160' },
                    { title: 'My Playlist', img: 'holder.js/100px160' },
                ]
        }
    ];

    return (
        <Sections data={data} />
    );
}

export default Library;