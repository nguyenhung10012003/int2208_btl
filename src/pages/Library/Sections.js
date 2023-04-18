import { Card } from "react-bootstrap";
import Styles from './Library.module.scss';
import { Link } from "react-router-dom";

function Sections({ data }) {
    return (
        <div className={Styles['card-wrapper']}>
            {data.map((item, index) => {
                return (
                    <Card key={index} className={Styles['card']}>
                        <Card.Img variant="top" src={item.image} className={Styles['c-img']} />
                        <Card.Title className={Styles['c-title']}>
                            <Link to={{
                                    pathname: `/playlist/${item._id}`
                                }} className={Styles['link-playlist']}>
                            {item.name}
                            </Link>
                        </Card.Title>
                        <Card.Text className={Styles['c-text']}>By me</Card.Text>
                    </Card>
                )
            })}
        </div>
    )
}

export default Sections;