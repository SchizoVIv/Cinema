import './Popup.css'
import React, { useState, useEffect } from 'react';
import Timing from './Timing/Timing'

export default function Popup(props) {
    const [selectedTimes, setSelectedTimes] = useState({});
    const [activeSlide, setActiveSlide] = useState(0);
    const [formData, setFormData] = useState({});
    const [dis, setDis] = useState(true);


    function handleChange(event) {
        const { checked, name, value, id } = event.target;
        setSelectedTimes(id)
        if(checked) {
          console.log('hi')
          setFormData({
            ...formData,
            date: name,
            session: value
          })
          setDis(true)
        }
    }

    const popupClass = !props.isClose ? 'popup visually-hidden' : 'popup'

    function handleClose() {
      props.setClose(false)
      setActiveSlide(0)
    }

    function handleNextSlide(e) {
      e.preventDefault();
      setActiveSlide(activeSlide + 1)

      console.log(formData)
    }

    return(
        <section className={popupClass}>
            <div className='popup__conteiner'></div>
            <div className='popup__box'>
                <button className={activeSlide === 0 ? 'visually-hidden' : 'popup__button-back'}>Назад</button>
                <button
                    className='popup__button-close'
                    onClick={handleClose}
                >Закрыть</button>
                <h3 className='popup__title'>{props.activeCard.nameRU}</h3>
                <form class="popup__form">
                    <Timing
                        handleChange={handleChange}
                        selectedTimes={selectedTimes}
                        activeSlide={activeSlide}
                    />
                <button
                  type='submit'
                  className='popup__button-next'
                  onClick={handleNextSlide}
                  disabled={!formData.date}
                >Далее</button>
                </form>
            </div>
        </section>
    )
}

