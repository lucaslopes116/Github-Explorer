import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/32467674?s=460&u=001aaa856cd4a5ac431fdaac6163607efb70cbd8&v=4"
            alt="Lucas Fernando"
          />
          <div>
            <strong>Titulo</strong>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <p>Stars</p>
          </li>

          <li>
            <strong>48</strong>
            <p>Forks</p>
          </li>

          <li>
            <strong>67</strong>
            <p>Issues abertas</p>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="sss">
          <div>
            <strong>ddddd</strong>
            <p>ssss</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
