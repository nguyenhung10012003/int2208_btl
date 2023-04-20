import styles from './Banner.module.scss';
import Slider from "react-slick";
import {useEffect, useState} from "react";
import {useWindow} from "../../hooks/WindowContext";

const Banner = ({items}) => {

    // Number slide to display
    const [num, setNum] = useState(3);

    const {windowWidth} = useWindow();
    useEffect(() => {
        console.log()
        if (windowWidth < 700) {
            setNum(1);
        } else if (windowWidth < 1200) {
            setNum(2);
        }
        else {
            setNum(3);
        }
    }, [windowWidth]);

    const settings = {
        dots: true,
        autoPlay: true,
        autoplaySpeed: 3000,
        className: styles['slider'],
        infinite: true,
        speed: 500,
        slidesToShow: num,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings} >
            {items.map((item, index) => {
                let img = item.banner;
                return (
                    <div key={index} className={styles['banner']}>
                        <img src={img} alt={''} className={styles['image']}/>
                    </div>
                )
            })}

        </Slider>
    );
};

export default Banner;