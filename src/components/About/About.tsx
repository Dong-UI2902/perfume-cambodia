import React from 'react';

const About = () => {
  return (
    <div className="bg-about">
      <section className="about section container" id="about">
        <div className="about__container grid">
          <img src="assets/img/su-nhon-mui.jpg" alt="" className="about__img" />

          <div className="about__data">
            <h2 className="section__title about__title">
              អំពីយើង <br /> ហេតុអ្វីបានជាជ្រើសរើសយើង?
            </h2>

            <p className="about__description">
              <strong>PERFUME FOR YOU</strong> មានការពិនិត្យពិតប្រាកដជាង 4000+
              និងទទួលបានការជឿទុកចិត្តពីអតិថិជន។ យើងតែងតែព្យាយាមកែលម្អគុណភាពនៃផលិតផល
              និងសេវាកម្មដើម្បីឱ្យអតិថិជនមានបទពិសោធន៍ល្អបំផុត។
            </p>

            <div className="about__details">
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                ផលិតផលពិតប្រាកដ, ប្រភពដើមធានា។
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                តម្លៃល្អបំផុតនៅលើទីផ្សារគ្រប់ពេលវេលា។
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                ការដឹកជញ្ជូនប្រកបដោយសុវត្ថិភាព និងរហ័ស។
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                សំណង 200% ប្រសិនបើទំនិញក្លែងក្លាយត្រូវបានរកឃើញ។
              </p>
            </div>

            <a href="#products" className="button--link button--flex">
              ទិញឥឡូវ <i className="ri-arrow-right-down-line button__icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
