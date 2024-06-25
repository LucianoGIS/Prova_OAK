import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productValue, setProductValue] = useState('');
  const [availableForSale, setAvailableForSale] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      description: productDescription,
      value: parseFloat(productValue),
      available: availableForSale,
    };
    onAddProduct(newProduct);

    setProductName('');
    setProductDescription('');
    setProductValue('');
    setAvailableForSale(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Novo Produto</h2>
      <label>
        Nome do Produto:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </label>
      <label>
        Descrição do Produto:
        <input
          type="text"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Valor do Produto:
        <input
          type="number"
          step="0.01"
          value={productValue}
          onChange={(e) => setProductValue(e.target.value)}
          required
        />
      </label>
      <label>
        Disponível para venda:
        <select
          value={availableForSale}
          onChange={(e) => setAvailableForSale(e.target.value === 'true')}
        >
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      </label>
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
};

export default ProductForm;
