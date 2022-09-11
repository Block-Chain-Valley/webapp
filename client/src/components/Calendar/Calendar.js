import { useState, useEffect } from 'react';
import styles from './Calendar.module.css';
import Card from '../UI/Card/Card';
import { ReactComponent as LArrow } from '../../assets/leftArrow.svg';
import { ReactComponent as RArrow } from '../../assets/rightArrow.svg';
import { getNewDateObj, getMonthDate } from './Date';
import Day from './Day';

const dateTxt = {
  weekTxt: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
  monthTxt: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

const Calendar = () => {
  const today = new Date();

  const [monthDate, setMonthDate] = useState(getMonthDate(getNewDateObj(today)));

  const monthHandler = side => {
    if (side === -1) {
      if (monthDate.month === 1) {
        setMonthDate(getMonthDate(getNewDateObj(new Date(`${monthDate.year - 1}-12`))));
        return;
      }
      setMonthDate(
        getMonthDate(getNewDateObj(new Date(`${monthDate.year}-${(monthDate.month - 1).toString().padStart(2, '0')}`)))
      );
    }

    if (side === 1) {
      if (monthDate.month === 12) {
        setMonthDate(getMonthDate(getNewDateObj(new Date(`${monthDate.year + 1}-01`))));
        return;
      }
      setMonthDate(
        getMonthDate(getNewDateObj(new Date(`${monthDate.year}-${(monthDate.month + 1).toString().padStart(2, '0')}`)))
      );
    }
  };

  const isDayInMonth = (thisMonth, currentMonth) => thisMonth === currentMonth;
  const isToday = (year, month, day) => {
    if (year !== today.getFullYear()) {
      return false;
    }

    if (month !== today.getMonth() + 1) {
      return false;
    }

    if (day !== today.getDate()) {
      return false;
    }
    return true;
  };

  return (
    <Card>
      <div className={styles.head}>
        <div className={styles.dateTxt}>{`${dateTxt.monthTxt[monthDate.month - 1]} ${monthDate.year}`} </div>
        <div className={styles.arrowContainer}>
          <LArrow className={styles.LArrow} onClick={() => monthHandler(-1)} />
          <RArrow className={styles.RArrow} onClick={() => monthHandler(+1)} />
        </div>
      </div>

      <hr className={styles.line} />

      <div className={styles.weekConatainer}>
        {dateTxt.weekTxt.map(day => (
          <div className={styles.dayOfWeekTxt} key={day}>
            {day}
          </div>
        ))}
      </div>

      {monthDate.year === NaN
        ? ''
        : monthDate.date.map((week, idx) => (
            <div className={styles.dayContainer} key={idx.toString()}>
              {week.map((date, idx) => (
                <Day
                  isThisMonth={isDayInMonth(monthDate.month, date.month)}
                  isToday={isToday(date.year, date.month, date.date)}
                  attendance={''}
                  key={idx.toString()}>
                  {date.date}
                </Day>
              ))}
            </div>
          ))}
    </Card>
  );
};

export default Calendar;
