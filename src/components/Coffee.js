import React from 'react';
import Chemex from './coffeetips/Chemex';
import Aeropress from './coffeetips/Aeropress';
import Espresso from './coffeetips/Espresso';
import Grinder from './coffeetips/Grinder';

let randomCoffeeTip;
const getRandomValue = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default class Coffee extends React.Component {
	componentWillMount() {
    switch (getRandomValue(1, 4)) {
      case 1:
        randomCoffeeTip = <Chemex />;
        break;
      case 2:
        randomCoffeeTip = <Aeropress />;
        break;
      case 3:
        randomCoffeeTip = <Espresso />;
        break;
      case 4:
        randomCoffeeTip = <Grinder />;
        break;
    }
	}
  render() {
		const { closeCoffeeTip } = this.props;

    return (
      <div className="coffee-tip">
				<div className="coffee-tip-close" onClick={closeCoffeeTip}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFF" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.6L15.6 17 12 13.4 8.4 17 7 15.6l3.6-3.6L7 8.4 8.4 7l3.6 3.6L15.6 7 17 8.4 13.4 12l3.6 3.6z"/><path fill="none" d="M0 0h24v24H0z"/></svg></div>
				{randomCoffeeTip}
			</div>
    );
  }
}

