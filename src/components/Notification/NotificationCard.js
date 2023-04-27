import sucsesIcon from '../../images/nitification/success.svg';
import errorIcon from '../../images/nitification/error.svg';
import warningIcon from '../../images/nitification/info.svg';
import { useEffect } from 'react';

const  NotificationCard = ({ dataCard, onClickClose }) => {
    useEffect(() => {
        setTimeout(()=> onClickClose(dataCard), 3000)
    }, [onClickClose, dataCard])

    const CurrentDateTime = () => {
        const date = new Date();
        const options = {
          year: '2-digit',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        };

        const formattedDate = date.toLocaleString('ru', options).replace(',', '');

        return formattedDate;
      }

    const type = (type) => {
        switch (type) {
            case 'success':
                return (
                    <div className="notification__card-container">
                       <img src={sucsesIcon} alt="Иконка успешного запроса"/>
                       <h3 className='notification__card-title'>{dataCard.title}</h3>
                    </div>
                )
            case 'error':
                return (
                    <div className="notification__card-container">
                        <img src={errorIcon} alt="Иконка ошибки"/>
                        <h3 className='notification__card-title'>{dataCard.title}</h3>
                    </div>
                );
            case 'warning':
                return (
                    <div className="notification__card-container">
                        <img src={warningIcon} alt="Иконка информирования"/>
                        <h3 className='notification__card-title'>{dataCard.title}</h3>
                    </div>
                );
            default:
                return console.log('Некорректный тип сообщения');
        }
    }

    return(
        <div className="notification__card">
            { type(dataCard.type) }
            
            <p className='notification__card-text'>{dataCard.message}</p>
            <span className='notification__card-time'>{CurrentDateTime()}</span>
            <button onClick={()=> onClickClose(dataCard)} className='notification__btn-exit hover-opacity'/>
        </div>
    )
}

export default NotificationCard;