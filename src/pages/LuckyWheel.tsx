import Roulette from 'components/Wheel/Roulette';
import React, { useEffect } from 'react';
import '../styles/Roulette.scss';

const LuckyWheel = () => {
  useEffect(() => {
    const footer = document.getElementById('footer');
    // @ts-ignore: Object is possibly 'null'.
    footer.style.display = 'none';
  }, []);

  return (
    <div className="wheel">
      <div style={{ backgroundImage: 'url(./assets/img/lucky/background.jpg)' }}>
        <div className="wheel__container">
          <Roulette />
          <a className="wheel_btn animation" href="/vong-quay-may-man/sukienuudai">
            Săn ưu đãi 50%
          </a>
        </div>
      </div>
    </div>
  );
};

export default LuckyWheel;
