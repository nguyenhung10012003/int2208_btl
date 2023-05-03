import SongCard from "../../components/SongCard/SongCard"

function Section({data}) {
    if(data.items !== undefined) {
        return ( 
            data.items.map((item, index) => {
                let title = item.title;
                let id = item.encodeId;
                let img = item.thumbnailM;
                let artist = {
                    id: item.artists[0].id,
                    name: item.artists[0].name,
                    img: item.artists[0].thumbnailM
                }
                let duration = item.duration;
                let album = {};
                if(item.hasOwnProperty('album')) {
                    album =  {
                        id: item.album.encodeId === undefined ? '' : item.album.encodeId,
                        name: item.album.title,
                    }
                }
                
                // const dataSubmit = {
                //     id: id,
                //     name: title,
                //     img: img,
                //     duration: duration,
                //     artist: {
                //         id: item.artists[0].id,
                //         name: item.artists[0].name,
                //         img: item.artists[0].thumbnailM
                //     },
                //     album: album,
                // }

                return (                 
                   <SongCard index={index} id={id}
                             title={title} img={img}
                            artist = {artist} duration = {duration}
                            album = {album}
                   />
                )
            })
         );
    }
}

export default Section;

