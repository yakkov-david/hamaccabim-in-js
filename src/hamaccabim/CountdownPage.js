
// CountdownPage.js
import React from 'react';
import CountdownTimer from './CountdownTimer';
import './CountdownLayout.css';

const CountdownPage = () => {
  const eventDate = new Date('2023-12-14T22:00:00');

  return (
    <div className="countdown-page">
      <div className="header" dir="rtl">
        <h1>המכבים - "מעטים מול רבים."</h1>
      </div>
      <div className="main-content" dir='rtl'>
        <p>
          עם ישראל היקר,<br />
          אנו עושים מאמצים רבים בהסברה ברשתות החברתיות<br />
          לצערנו מכיון שאנו היהודים מיעוט זניח ביחס לעולם, קולנו בקושי נשמע ונבלע באוקיינוס האיסלאם<br />
          עלינו להתאחד ולייצר כוח שאיתו נוכל לנצח
        </p>
        <div dir='ltr'>
          <CountdownTimer targetDate={eventDate} />
          <hr className="horizontal-line" />
        </div>
        <div dir='rtl'>
          <p>
            השבוע נתאחד כולנו ונחסום את החשבון טוויטר<br />
            של צורר היהודים ושונא ישראל, הלא הוא:<br />
            Jackson Hinkle
          </p>
        </div>
        <img src="https://www.figma.com/file/KnweM39a6TvLjZDQSs5Qbe/%D7%94%D7%9E%D7%9B%D7%91%D7%99%D7%9D?type=design&node-id=0-1&mode=design" alt="Event" />
        <a href="https://twitter.com/jacksonhinklle" className="red-button">REPORT</a>

      </div>

      <div className="footer" dir='rtl'>
        <p>
          מדובר באזרח אמריקאי צעיר עם כמות מאוד גדולה של עוקבים בטוויטר. <br />
          אל תתנו לשם האמריקאי להטעות אתכם, אדם זה מעלה פוסט בטוויטר כל עשר <br />
          דקות - רבע שעה בו הוא תוקף את ישראל בצורה ארסית ומפיץ ידיעות כוזבות ולועג<br />
          לחיילי צה"ל
        </p>
      </div>
    </div>
  );
};


export default CountdownPage;
