import { Card } from "react-bootstrap";
import Styles from './Home.module.scss';

function Sections({ data }) {
    return (
        <div className={Styles['wrapper']}>
            {data.map((sec, index) => {
                return (
                    <section key={index} title={sec.title} className={Styles['section']}>
                        <div className={Styles['section-title']}>
                            <h2>{sec.title}</h2>
                            <a>Show all</a>
                        </div>
                        <div className={Styles['card-wrapper']}>
                            {sec.cards.map((card, index) => {
                                return (
                                    <Card key={index} className={Styles['card']}>
                                        <Card.Img variant="top" src={card.img} className={Styles['c-img']} />
                                        <Card.Title className={Styles['c-title']}>{card.title}</Card.Title>
                                    </Card>

                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}

export default Sections;