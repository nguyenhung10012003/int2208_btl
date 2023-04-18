import {Card, Col, Row} from "react-bootstrap";
import Styles from './Home.module.scss';
import {useEffect, useState} from "react";
import postcardApi from "../../api/PostcardApi";
import { Link } from "react-router-dom";

function Sections() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchNewRealease = async () => {
            try {
                const response = await postcardApi.getNewRelease({});
                setData(response.albums.items);
            } catch(err) {
                console.log(err);
            }
        }

        fetchNewRealease();
    }, []);
    return (
        <div className={Styles['wrapper']}>
            <h2>New Release</h2>
            <Row xs={"auto"} md={"auto"} className='g-4'>
            {data.map((item, index) => {
                let img = item.images[0].url;
                let name = item.name;
                let id = item.id;
                return (
                    <Col key={id} className={Styles['card-wrapper']}>
                    <Card className={Styles['card']}>
                        <Card.Img  variant="top" src={img} className={Styles['c-image']}/>
                        <Card.Text className={Styles['c-title']}>
                            <Link to = {{
                                pathname: `album/${id}`
                            }} className={Styles['title']}>{name}</Link>
                        </Card.Text>
                    </Card>
                    </Col>
                )
            })}
            </Row>
        </div>
    )
}

export default Sections;