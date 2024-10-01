import React, { useState } from 'react';
import './RegistroTransacoes.css';

const RegistroTransacoes = () => {
  const [activeTab, setActiveTab] = useState('Registro de Transação');

  return (
    <div className="container">
      <header className="header">
        <h1>CONTROLE DE CAIXA - CASA DE CARNES EUROPA</h1>
      </header>
      <nav className="nav">
        <span
          className={activeTab === 'Relatórios' ? 'active' : ''}
          onClick={() => setActiveTab('Relatórios')}
        >
          RELATÓRIOS
        </span>
        <span
          className={activeTab === 'Registro de Transação' ? 'active' : ''}
          onClick={() => setActiveTab('Registro de Transação')}
        >
          REGISTRO DE TRANSAÇÃO
        </span>
        <span
          className={activeTab === 'Clientes' ? 'active' : ''}
          onClick={() => setActiveTab('Clientes')}
        >
          CLIENTES
        </span>
      </nav>
      <main className="main">
        <div className="grid-container">
          <div className="grid-item" onClick={() => {}}>NOVA VENDA</div>
          <div className="grid-item" onClick={() => {}}>NOVA VENDA FIADO</div>
          <div className="grid-item" onClick={() => {}}>NOVA DESPESA</div>
          <div className="grid-item" onClick={() => {}}>PAGAMENTO FIADO</div>
        </div>
      </main>
    </div>
  );
};

export default RegistroTransacoes;