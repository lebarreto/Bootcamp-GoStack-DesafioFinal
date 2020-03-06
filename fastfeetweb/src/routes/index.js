import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Destinatarios from '../pages/Destinatários';
import Encomendas from '../pages/Encomendas';
import Entregadores from '../pages/Entregadores';
import Problemas from '../pages/Problemas';
import Route from './Route';
import EdicaoEncomendas from '../pages/Encomendas/EdicaoEncomendas';
import CriacaoEncomendas from '../pages/Encomendas/CriacaoEncomendas';
import EdicaoDestinatarios from '../pages/Destinatários/EdicaoDestinatarios';
import CriacaoDestinatario from '../pages/Destinatários/CriacaoDestinatario';
import CriacaoEntregador from '../pages/Entregadores/CriacaoEntregador';
import EdicaoEntregador from '../pages/Entregadores/EdicaoEntregador';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/destinatarios" component={Destinatarios} isPrivate />
      <Route
        path="/destinatario/:id"
        exact
        component={EdicaoDestinatarios}
        isPrivate
      />
      <Route
        path="/destinatario"
        exact
        component={CriacaoDestinatario}
        isPrivate
      />
      <Route path="/encomendas" component={Encomendas} isPrivate />
      <Route
        path="/encomenda/:id"
        exact
        component={EdicaoEncomendas}
        isPrivate
      />
      <Route path="/encomenda" exact component={CriacaoEncomendas} isPrivate />
      <Route path="/entregadores" component={Entregadores} isPrivate />
      <Route path="/entregador" exact component={CriacaoEntregador} isPrivate />
      <Route
        path="/entregador/:id"
        exact
        component={EdicaoEntregador}
        isPrivate
      />
      <Route path="/problemas" component={Problemas} isPrivate />
    </Switch>
  );
}
