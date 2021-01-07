function StepsHeader() {
  return (
    <header className="orders-steps-container">
      <div className="orders-steps-content">
        <h1 className="steps-title">siga as <br/>etapas</h1>
      </div>
      <ul className="steps-items">
        <li>
          <span className="steps-number">1</span>
          Selecione os produtos e localização
        </li>
        <li>
         <span className="steps-number">2</span>
         Depois clique em <strong>"enviar pedido"</strong>
        </li>
      </ul>
    </header>
  );
}

export default StepsHeader;