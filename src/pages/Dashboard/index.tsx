import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dasboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explore" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/32467674?s=460&u=1a44fec661f7b8bb352c5c1220a7d5462a45870a&v=4"
            alt="Lucas Fernando"
          />
          <div>
            <strong>Github-Explorer</strong>
            <p>Github</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/32467674?s=460&u=1a44fec661f7b8bb352c5c1220a7d5462a45870a&v=4"
            alt="Lucas Fernando"
          />
          <div>
            <strong>Github-Explorer</strong>
            <p>Github</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/32467674?s=460&u=1a44fec661f7b8bb352c5c1220a7d5462a45870a&v=4"
            alt="Lucas Fernando"
          />
          <div>
            <strong>Github-Explorer</strong>
            <p>Github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dasboard;
