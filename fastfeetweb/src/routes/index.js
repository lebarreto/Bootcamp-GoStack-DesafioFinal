import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Destinatarios from '../pages/Destinatários';
import Encomendas from '../pages/Encomendas';
import Entregadores from '../pages/Entregadores';
import Problemas from '../pages/Problemas';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/destinatarios" component={Destinatarios} />
      <Route path="/encomendas" component={Encomendas} />
      <Route path="/entregadores" component={Entregadores} />
      <Route path="/problemas" component={Problemas} />
    </Switch>
  );
}
