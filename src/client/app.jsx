import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Dog from '../shared/dog';

const dogBark = new Dog('Max').bark();


const App = props => (
  <div>
        The dog says: {prop.message}
  </div>
);

App.propTypes = {
 message: PropTypes.string.isRequired,
};

ReactDOM.render(<App message={dogBark} />, document.querySelector('.app');

