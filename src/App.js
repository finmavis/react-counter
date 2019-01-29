import React, { Fragment, useState } from 'react';

import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';

const App = () => {
  const [title] = useState('React Counter');

  return (
    <Fragment>
      <Header icon='fas fa-hand-point-up' title={title} />
      <Counter />
      <Footer />
    </Fragment>
  );
};

export default App;
