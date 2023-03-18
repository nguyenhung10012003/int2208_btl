import { Card } from "react-bootstrap";
import Styles from './Library.module.scss';

function Sections({ data }) {
    return (
        <div className={Styles['wrapper']}>
            {data.map((sec, index) => {
                return (
                    <section key={index} title={sec.title} className={Styles['section']}>
                        <div className={Styles['section-title']}>
                            <h2>{sec.title}</h2>
                        </div>
                        <div className={Styles['card-wrapper']}>
                            {sec.cards.map((card, index) => {
                                return (
                                    <Card key={index} className={Styles['card']}>
                                        <Card.Img variant="top" src={card.img} className={Styles['c-img']} />
                                        <Card.Title className={Styles['c-title']}>{card.title} #{index}</Card.Title>
                                        <Card.Text className={Styles['c-text']}>By Me</Card.Text>
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