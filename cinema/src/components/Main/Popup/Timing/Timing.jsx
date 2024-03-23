import './Timing.css'
import {timeList,placesList} from '../../../../utils/constants'

export default function Timing(props) {

  if(props.activeSlide === 0) {
    return(
      <>
        <div class="popup__table ">
            {
              timeList.map((element, index) => {
                return(
                  <div className='popup__table-box'>
                    <p>{element.date}</p>
                    {
                      element.sessions.map((time,i) => {
                        return(
                          <>
                            <input
                              className='visually-hidden'
                              type="radio"
                              id={`time${index}${i}`}
                              name={`${element.date}`}
                              value={time}
                              checked={props.selectedTimes === `time${index}${i}`}
                              onChange={props.handleChange}
                            />
                            <label
                               className={props.selectedTimes === `time${index}${i}` ? 'popup__label popup__label_selected' : 'popup__label'}
                              htmlFor={`time${index}${i}`}
                            >
                              {time}
                            </label>
                          </>
                        )
                      })
                    }
                  </div>
                )
              })
            }
        </div>
      </>
    )
  } else if(props.activeSlide === 1) {
    return(
      <>
        <div class="popup__table popup__table_column">
            {
              timeList.map((element, index) => {
                return(
                  <div className='popup__table-box popup__table-box_row'>
                    <p>{element.date}</p>
                    {
                      element.sessions.map((time,i) => {
                        return(
                          <>
                            <input
                              className='visually-hidden'
                              type="checkbox"
                              id={`time${index}${i}`}
                              name={`time${index}${i}`}
                              value={time}
                              onChange={props.handleChange}
                            />
                            <label
                              className={props.selectedTimes[`time${index}${i}`] ? 'popup__label popup__label_selected' : 'popup__label'}
                              htmlFor={`time${index}${i}`}
                            >
                              {time}
                            </label>
                          </>
                        )
                      })
                    }
                  </div>
                )
              })
            }
        </div>
      </>
    )
  }
}

