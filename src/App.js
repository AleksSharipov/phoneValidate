import React from 'react';

import Form from './components/Form/Form';
import Table from './components/Table/Table';
import VisibleTodoList from './containers/Table'


function App() {
  return (
    <main className="root">
      <Form/>
      <VisibleTodoList/>
    </main>
  );
}

export default App;
