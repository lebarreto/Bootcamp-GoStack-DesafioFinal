import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import {
  Container,
  Header,
  Title,
  ProblemBody,
  ProblemDiv,
  Description,
  Date,
} from './styles';
import api from '~/services/api';

export default function VisualizeProblems() {
  const routes = useRoute();
  const { data } = routes.params;
  const navigation = useNavigation();

  const [problem, setProblem] = useState([]);

  function formatDate(data) {
    return data.map(prob => ({
      ...prob,
      dateFormated: prob.createdAt
        ? format(parseISO(prob.createdAt), 'dd/MM/yyyy')
        : null,
    }));
  }

  async function loadProblems() {
    const response = await api.get(`delivery/${data.id}/problems`);

    const dataF = formatDate(response.data);
    setProblem(dataF);
  }

  useEffect(() => {
    loadProblems();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Encomenda {data.id}</Title>
        {problem.map(p => (
          <ProblemBody>
            <ProblemDiv>
              <Description>{p.description}</Description>
              <Date>{p.dateFormated}</Date>
            </ProblemDiv>
          </ProblemBody>
        ))}
      </Header>
    </Container>
  );
}
