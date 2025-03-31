import React, { useRef } from 'react';

export const gotoFB = () => {
  window.open('https://www.facebook.com/perfumeforyouvn.q9');
};

const Questions = () => {
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);
  const myRef5 = useRef(null);
  const myRef6 = useRef(null);

  const handleClick = (ref: any) => {
    const item = ref.current;
    // @ts-ignore
    const content = item.querySelector('.questions__content');

    // @ts-ignore
    if (item.classList.contains('accordion-open')) {
      // @ts-ignore
      item.classList.remove('accordion-open');
      content.removeAttribute('style');
    } else {
      // @ts-ignore
      item.classList.add('accordion-open');
      content.style.height = content.scrollHeight + 'px';
    }
  };

  return (
    <div>
      <section className="questions section" id="faqs">
        <h2 className="section__title-center questions__title container">
          សំនួរ & ចម្លើយដែលតែងតែកើតមាន
        </h2>

        <div className="questions__container container grid">
          <div className="questions__group">
            <div className="questions__item" ref={myRef1} onClick={() => handleClick(myRef1)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">តើខ្ញុំត្រូវការគណនីដើម្បីកម្ម៉ង់ទំនិញទេ?</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  ទេ អ្វីដែលអ្នកត្រូវការគឺអាសយដ្ឋានអ៊ីមែល និងលេខទូរស័ព្ទប៉ុណ្ណោះ។
                  គ្រាន់តែធ្វើតាមជំហានកម្ម៉ង់ទំនិញនៅលើអេក្រង់ជាការស្រេច។
                  <br />
                  អ្នកក៏អាចកម្ម៉ង់ទំនិញ និងតាមដានការកម្ម៉ង់ទំនិញដោយផ្ញើសារទៅកាន់ FANPAGE FACEBOOK
                  ផងដែរ។ រាល់ព័ត៌មានការកម្ម៉ង់ទំនិញនឹងត្រូវបានជូនដំណឹងដល់អ្នក។
                </p>
              </div>
            </div>
            <div className="questions__item" ref={myRef3} onClick={() => handleClick(myRef3)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">ទំនិញនេះជាទំនិញផ្លូវការដែរឬទេ?</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  យើងសន្យាថាផលិតផលទាំងអស់ដែលយើងលក់គឺជាផលិតផលផ្លូវការ ១០០% និង Authentic ១០០%។
                  ដៃគូរបស់យើងគឺជាអ្នកចែកចាយផ្លូវការទាំងក្នុង និងក្រៅប្រទេស
                  ក្រុមហ៊ុនដឹកជញ្ជូនប្រកបដោយវិជ្ជាជីវៈ យើងធ្វើការជាមួយតែក្រុមហ៊ុនល្អបំផុត
                  និងឆ្នើមបំផុតក្នុងអាជីវកម្ម ហើយតែងតែដាក់អតិថិជនជាចំណុចស្នូលដើម្បីអភិវឌ្ឍ។
                  ជាមួយនឹងការខិតខំប្រឹងប្រែងរបស់ក្រុមការងារយើង
                  ធានាឱ្យអ្នកនូវកន្លែងទិញទំនិញដែលអាចទុកចិត្តបាន
                  ដែលអ្នកមិនអាចរកបាននៅកន្លែងណាផ្សេងទៀតឡើយ។
                </p>
              </div>
            </div>

            <div className="questions__item" ref={myRef2} onClick={() => handleClick(myRef2)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  ផលិតផលដែលទទួលបានមិនដូចរូបភាពនៅលើគេហទំព័រទេ?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  ក្នុងករណីអតិថិជនទទួលបានផលិតផលមិនដូចរូបភាពនៅលើគេហទំព័រ សូមទាក់ទងជាបន្ទាន់ទៅកាន់
                  Perfume For You យើងនឹងដោះស្រាយជូនអតិថិជនភ្លាមៗ។
                  ប្រសិនបើអតិថិជនមិនទាន់អាចកម្ម៉ង់ទំនិញតាមអនឡាញបានដោយសារហេតុផលណាមួយ
                  សូមកុំស្ទាក់ស្ទើរក្នុងការទាក់ទងជាមួយមជ្ឈមណ្ឌលបម្រើអតិថិជនរបស់ Perfume For You
                  ដើម្បីកម្ម៉ង់ទំនិញ និងទទួលបានការប្រឹក្សាផលិតផល។
                </p>
              </div>
            </div>
          </div>

          <div className="questions__group">
            <div className="questions__item" ref={myRef4} onClick={() => handleClick(myRef4)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">គោលការណ៏ប្រល់ទំនិញមកវិញ</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  ទំនិញ Perfume For You ដែលលក់ចេញធានាថាជាទំនិញផ្លូវការ ១០០%។
                  យើងសន្យាថាមិនលក់ទំនិញក្លែងក្លាយ ទំនិញចម្លង ឬទំនិញដែលមិនធានាគុណភាព។
                  ករណីដែលអាចប្តូរទំនិញវិញបាន៖
                  <br />
                  - ចំពោះផលិតផលដែលមានបញ្ហាក្នុងរចនាសម្ព័ន្ធផលិតផលដោយសារដំណើរការផលិតរបស់ក្រុមហ៊ុន
                  ឬកំហុសដោយសារការដឹកជញ្ជូន ដែលធ្វើឱ្យផលិតផលខូចទ្រង់ទ្រាយ ផ្លាស់ប្តូររូបរាង
                  ខូចផ្នែកក្បាលបាញ់ បំពង់បាញ់ បែក ឬប្រេះ។
                  <br />
                  - ចំពោះផលិតផលដែលប្តូរដោយសារហេតុផលផ្ទាល់ខ្លួន (ធ្វើជាកាដូ ឬត្រូវបានគេឱ្យជាកាដូ)
                  ផលិតផលដែលប្តូរនឹងអនុវត្តបានត្រឹមតែក្នុងរយៈពេល ១០ ថ្ងៃ
                  គិតចាប់ពីថ្ងៃដែលផលិតផលត្រូវបានលក់ចេញ។
                  ផលិតផលដែលប្តូរត្រូវធានាថាមិនទាន់ត្រូវបានជួសជុល។
                  <br />
                  - ចំពោះទំនិញ Full Seal ត្រូវនៅដដែល Seal ដើម ចំពោះផលិតផល Giftset ឬ Tester
                  ត្រូវធានាថានៅដដែលប្រអប់ដើម ផលិតផលមិនទាន់ត្រូវបានគេរំខាន ឬប្រើប្រាស់។
                  <br />- ផលិតផលនឹងត្រូវបានយើងពិនិត្យឡើងវិញដើម្បីធានាថាផលិតផលនោះជាទំនិញដែលយើងចែកចាយ។
                </p>
              </div>
            </div>

            <div className="questions__item" ref={myRef5} onClick={() => handleClick(myRef5)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">របៀបដឹកជញ្ជូនយ៉ាងដូចម្តេច?</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  ការកម្ម៉ង់ទំនិញអាចជ្រើសរើសវិធីបង់ប្រាក់ COD ឬផ្ទេរប្រាក់ Perfume For You
                  នឹងផ្ញើទំនិញទៅអ្នកតាមរយៈអង្គភាពដឹកជញ្ជូន។
                  ប្រសិនបើអ្នកមានបញ្ហាអ្វីមួយទាក់ទងនឹងការកម្ម៉ង់ទំនិញ សូមផ្ញើសារភ្លាមៗទៅកាន់{' '}
                  <span style={{ fontWeight: '600', textDecoration: 'underLine' }} onClick={gotoFB}>
                    fangape facebook
                  </span>{' '}
                  របស់យើងដើម្បីទទួលបានការគាំទ្រ។
                  <br />
                  <br />
                  បន្ទាប់ពីយើងបញ្ជាក់ការកម្ម៉ង់ទំនិញរបស់អ្នក វានឹងត្រូវបានវេចខ្ចប់
                  និងដឹកជញ្ជូនក្នុងរយៈពេល ២-៤ ថ្ងៃ (មិនរាប់បញ្ចូលថ្ងៃបុណ្យ)។
                </p>
              </div>
            </div>

            <div className="questions__item" ref={myRef6} onClick={() => handleClick(myRef6)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">តើផលិតផលមានស្រាប់ឬទេ?</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  ផលិតផលដែលមានទំហំត្រូវបានគូសបន្ទាត់ និងប៊ូតុងទិញទំនិញមិនដំណើរការ
                  មានន័យថាផលិតផលនោះអស់ស្តុក។ យើងតែងតែបង្ហាញចំនួនផលិតផលដោយតម្លាភាព
                  និងផ្តល់ជម្រើសចម្រុះនៃផលិតផលដែលមានស្រាប់
                  ដើម្បីឱ្យអតិថិជនអាចទទួលបានបទពិសោធន៍ទិញទំនិញប្រកបដោយសុវត្ថិភាព និងភាពងាយស្រួល។
                  អ្នកក៏អាចទាក់ទងមកយើងអំពីផលិតផលដែលអ្នកកំពុងស្វែងរកផងដែរ។
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questions;
