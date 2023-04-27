import './Notification.css';
import NotificationCard from './NotificationCard';
const Notification = ({ cardList, removeElNotification }) => {
    const hendeleClickClose = (elCard) => {
        removeElNotification(elCard);
    }

    return (
        <section className="notification">
            <ul className='notification__list'>
                {
                    cardList && cardList
                    .map((card) =>{
                        return(
                            <li className='notification__el' key={card.id}>
                                <NotificationCard dataCard={card} onClickClose={hendeleClickClose}/>
                            </li> 
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Notification;