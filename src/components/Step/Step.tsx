import React from 'react';
import { gotoFB } from '../Question/Questions';

const Step = () => {
  return (
    <div>
      <section className="steps section container">
        <div className="steps__bg">
          <h2 className="section__title-center steps__title">
            ជំហានទិញទំនិញ <br />
          </h2>

          <div className="steps__container grid">
            <div className="steps__card">
              <div className="steps__card-number">01</div>
              <h3 className="steps__card-title">ជ្រើសរើសផលិតផល</h3>
              <p className="steps__card-description">
                ជ្រើសរើសម៉ាក ឬប្រភេទ (ទឹកអប់បុរស ទឹកអប់ស្ត្រី…) ពីម៉ឺនុយនៃគេហទំព័រ
                ឬប្រើប្រអប់ស្វែងរកដើម្បីស្វែងរកដបទឹកអប់ជាក់លាក់ដែលអ្នកកំពុងស្វែងរក។
              </p>
            </div>

            <div className="steps__card">
              <div className="steps__card-number">02</div>
              <h3 className="steps__card-title">កម្ម៉ង់ទំនិញ</h3>
              <p className="steps__card-description">
                បន្ទាប់ពីជ្រើសរើសផលិតផល និងទំហំដែលអ្នកចង់ទិញ។ សូមកម្ម៉ង់ទំនិញដោយផ្ទាល់នៅលើគេហទំព័រ
                ឬផ្ញើសារទៅកាន់ Messenger នៅលើគេហទំព័រ ឬចូលទៅកាន់អាសយដ្ឋាន{' '}
                <span style={{ fontWeight: '600', textDecoration: 'underLine' }} onClick={gotoFB}>
                  Fanpage Facebook
                </span>{' '}
                ដើម្បីទទួលបានការគាំទ្រ និងការប្រឹក្សា ព្រមទាំងកម្ម៉ង់ទំនិញ។
              </p>
            </div>

            <div className="steps__card">
              <div className="steps__card-number">03</div>
              <h3 className="steps__card-title">បញ្ជាក់ការកម្ម៉ង់ទំនិញ</h3>
              <p className="steps__card-description">
                នៅពេលអ្នកកម្ម៉ង់ទំនិញជោគជ័យ
                ផ្នែកបម្រើអតិថិជនរបស់យើងនឹងទាក់ទងបញ្ជាក់ការកម្ម៉ង់ទំនិញជាមួយអ្នកឱ្យបានឆាប់បំផុត
                (ម៉ោង ៩ ព្រឹក – ២១ យប់) មុនពេលការកម្ម៉ង់ទំនិញត្រូវបានដឹកជញ្ជូន។
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Step;
