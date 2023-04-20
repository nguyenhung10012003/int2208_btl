import Styles from "./Postcard.module.scss";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function Postcard({id, img, description}) {
    return(
            <Card className={Styles['card']}>
                <Card.Img variant="top" src={img} className={Styles['c-image']}/>
                <Card.Text className={Styles['c-title']}>
                    <Link to={`/album/${id}`} className={Styles['title']}>{description}</Link>
                </Card.Text>
            </Card>
    )
}

export default Postcard;