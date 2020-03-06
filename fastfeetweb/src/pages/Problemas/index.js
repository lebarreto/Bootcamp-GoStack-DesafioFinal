import React, { useState, useEffect } from 'react';

import { Container, ProblemContent, Table } from './styles';
import HeaderList from '../../components/HeaderList';
import api from '../../services/api';
import ProblemasTabela from './ProblemasTabela';

export default function Problemas() {
  const [problems, setProblems] = useState([]);

  async function loadProblems() {
    const response = await api.get('delivery');
    setProblems(response.data);
  }

  useEffect(() => {
    loadProblems();
  }, []);

  return (
    <Container>
      <ProblemContent>
        <HeaderList title="Problemas na entrega" />
        <Table>
          <section>
            <strong>Encomenda</strong>
            <strong>Problema</strong>
            <strong>Ações</strong>
          </section>
        </Table>
        {problems.map(problem => (
          <ProblemasTabela
            key={problem.id}
            data={problem}
            updateProblem={loadProblems}
          />
        ))}
      </ProblemContent>
    </Container>
  );
}
