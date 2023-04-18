import { useState } from "react";
import styles from './createPlaylist.module.scss'
import { Link, useNavigate } from "react-router-dom";
import playlistApi from "../../../api/playlistApi";
function Create() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        user_id: 'user',
        name: 'playlist',
        description: '',
        image: 'https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg',
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            user_id: formData.user_id,
            name: formData.name,
            description: formData.description,
            image: formData.image,
        }

        playlistApi.createNewPlaylist(data);
        navigate('/library')
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleChangeImage = (event) => {
        const input = event.target;

        const selectedFile = input.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            setFormData({ ...formData, image: URL.createObjectURL(input.files[0]) });
        };
      
        reader.readAsDataURL(selectedFile);

        // if (input.files && input.files[0] && input.files[0].type.startsWith("image/")) {
        // setFormData({ ...formData, image: URL.createObjectURL(input.files[0]) });
        // }
        
    }

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className={styles['modal']}>
            <header>
                <h3>New playlist</h3>
                <Link  onClick={goBack} className={styles['close-icon']}>
                    <i className="fa-solid fa-xmark"></i>
                </Link>
            </header>
            <body>
                <div className={styles['image-playlist']}>
                    <img className={styles['image-create']} src={formData.image} alt='' width='160' height='160'></img>
                    <input type="file"
                            accept=".jpeg, .png, .jpg"
                     className={styles['input-image-create']} onChange={handleChangeImage}></input>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles['input-playlist']}>
                        <label>Name</label>
                        <input className={styles["input-name"]} type={'text'} name='name' required
                            onChange={handleChange}>
                        </input>
                    </div>
                    <div className={styles['input-playlist']}>
                        <label>Description</label>
                        <textarea className={styles["input-description"]} type={'text'} name='description'
                            onChange={handleChange}>
                        </textarea>
                    </div>
                    <button className={styles["submit"]} type="submit" >Save</button>
                </form>
            </body>
        </div>
    )
}

export default Create;