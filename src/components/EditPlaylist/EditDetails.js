import styles from './EditDetails.module.scss';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import playlistApi from '../../api/PlaylistApi'

function EditDetails(props) {
    
    const dataInput = props.data;

    const [formData, setFormData] = useState({
        user_id: 'user',
        name: 'playlist',
        description: '',
        image: 'https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg',
    });

    useEffect(() => {
        setFormData(
            {
                name: dataInput.name,
                description: dataInput.description,
                image: dataInput.image,
            }
        )
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: formData.name,
            description: formData.description,
            image: formData.image,
        }
        playlistApi.editDetails(dataInput.id, data);

        props.onClick(false);
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleChangeImage = async (event) => {
        const input = event.target;

        const file2 = await resizeImage(input.files[0], 160, 160);

        const base64 = await convertToBase64(file2);

        if (input.files && input.files[0]) {
            setFormData({ ...formData, image: base64 });
        }

    }

    const handleClickClose = () => {
        props.onClick(false);
    }


    return (
        <div className={styles['modal']}>
            <header>
                <h3>Edit details</h3>
                <Link onClick={handleClickClose} className={styles['close-icon']}>
                    <i className="fa-solid fa-xmark"></i>
                </Link>
            </header>
            <div className={styles['body-form']}>
                <div className={styles['image-playlist']}>
                    <img className={styles['image-create']} src={formData.image} alt='' width='160' height='160'></img>
                    <input type="file"
                        accept=".jpeg, .png, .jpg"
                        onChange={handleChangeImage}
                        className={styles['input-image-create']} >
                    </input>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles['input-playlist']}>
                        <label>Name</label>
                        <input className={styles["input-name"]} type={'text'} name='name' required
                            onChange={handleChange} value={formData.name}>
                        </input>
                    </div>
                    <div className={styles['input-playlist']}>
                        <label>Description</label>
                        <textarea className={styles["input-description"]} type={'text'} name='description'
                            onChange={handleChange} value={formData.description}>
                        </textarea>
                    </div>
                    <button className={styles["submit"]} type="submit" >Save</button>
                </form>
            </div>
        </div>
    )
}

export default EditDetails;

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

function resizeImage(file, maxWidth, maxHeight) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            let width = img.width;
            let height = img.height;

            // Tính toán kích thước mới của hình ảnh
            if (width > maxWidth) {
                height *= maxWidth / width;
                width = maxWidth;
            }
            if (height > maxHeight) {
                width *= maxHeight / height;
                height = maxHeight;
            }

            // Thiết lập kích thước của canvas
            canvas.width = width;
            canvas.height = height;

            // Vẽ hình ảnh mới lên canvas
            ctx.drawImage(img, 0, 0, width, height);

            // Chuyển canvas thành file và resolve
            canvas.toBlob((blob) => {
                resolve(blob);
            }, file.type || 'image/jpeg');
        };
        img.onerror = (error) => {
            reject(error);
        };
    });
}