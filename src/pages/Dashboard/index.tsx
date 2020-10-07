import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/13844812?s=460&u=36eeb136b6a5c8ea901b2e8bd842bc6509400425&v=4"
            alt="Regis Ribeiro"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scaleble ReactJS e React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/13844812?s=460&u=36eeb136b6a5c8ea901b2e8bd842bc6509400425&v=4"
            alt="Regis Ribeiro"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scaleble ReactJS e React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/13844812?s=460&u=36eeb136b6a5c8ea901b2e8bd842bc6509400425&v=4"
            alt="Regis Ribeiro"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scaleble ReactJS e React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
