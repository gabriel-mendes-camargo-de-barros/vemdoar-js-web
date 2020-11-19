import React from 'react';

import Header from '../../components/Header'

import ResearchItem from '../../images/researching.svg';
import FindItem from '../../images/web_search.svg';
import Connect from '../../images/messaging.svg';
import Receive from '../../images/deliveries.svg';
import Login from '../../images/mobile_login.svg';
import Announce from '../../images/publish.svg';
import Donate from '../../images/donate.svg';

import Attention from '../../images/attention.svg';

import './style.css';

function Home() {
  function mudarEstado(id) {
    var display = document.getElementById(id).style.display;
    if (display == "none")
      document.getElementById(id).style.display = 'flex';
    else
      document.getElementById(id).style.display = 'none';
  }

  return (
    <main className="home">
      <Header />
      <div className="main-banner">
        <h1 className="slogan">Vem doar com a gente!</h1>
      </div>
      <div className="how-it-works">
        <h2 className="title">Como Funciona?</h2>
        <p className="phrase">Encontre o que procura</p>
        <div className="items-grid">
          <li className="research">
            <img className="research" src={ResearchItem} alt="Research item" />
            <span>Procure por um item</span>
          </li>
          <li className="find">
            <img className="find" src={FindItem} alt="Find item" />
            <span>Encontre o que deseja</span>
          </li>
          <li className="connect">
            <img className="connect" src={Connect} alt="Connect" />
            <span>Fale com o anunciante</span>
          </li>
          <li className="receive">
            <img className="receive" src={Receive} alt="Receive" />
            <span>Receba o produto</span>
          </li>
        </div>
        <p className="second-phrase">Faça um doação</p>
        <div className="items-grid">
          <li className="login">
            <img className="login" src={Login} alt="Login" />
            <span>Cadastre-se ou faça login</span>
          </li>
          <li className="announce">
            <img className="announce" src={Announce} alt="Advertise" />
            <span>Anuncie um produto</span>
          </li>
          <li className="connect-advertiser">
            <img className="connect-advertiser" src={Connect} alt="Connect Advertiser" />
            <span>Fale com quem quer seu produto</span>
          </li>
          <li className="donate">
            <img className="donate" src={Donate} alt="Donate" />
            <span>Faça alguém feliz</span>
          </li>
        </div>
        <p className="second-phrase">ATENÇÂO</p>
        <li className="attention">
          <span>Não nos responsabilizamos por qualquer serviço de contato, seja pela negociação, se houver, ou pelo transporte.</span>
          <img className="img" src={Attention} alt=" Attention" />
        </li>
      </div>
      <div className="about-us">
        <header className="options">
          <button onClick={mudarEstado("story")} className="option">História</button>
          <button className="option">Missão</button>
          <button className="option">Visão</button>
          <button className="option">Valores</button>
        </header>
        <div id="story">
          <input type="hidden" />
          <span>Faça alguém felizz</span>
        </div>
        <div id="mission" type="hidden">
          <span>Faça alguém feliz</span>
        </div>
        <div id="eyesight" >
          <span>Faça alguém feliz</span>
        </div>
        <div id="values">
          <span>Faça alguém feliz</span>
        </div>
      </div>
    </main>
  )
}

export default Home;