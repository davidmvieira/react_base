import React from 'react';
import { Button } from "@/components/ui/button";

export function ResetSenha() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#fdfaf5' }}>
      
      {/* Menu Lateral */}
      

      {/* Conteúdo Principal */}
      <div style={{ flex: 1, padding: '40px 60px', position: 'relative' }}>
        <img
          src="/logo-rede-mario-gatti.png" // substitua pelo caminho correto
          alt="Logo Rede Mário Gatti"
          style={{ position: 'absolute', top: 20, left: 20, height: 80 }}
        />

        <h1 style={{ textAlign: 'center', marginBottom: 40 }}>
          Sistema de Gerenciamento de Usuario
        </h1>

        <form style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
            <div style={{ flex: 1 }}>
              <label>CPF</label>
              <input type="text" style={inputStyle} />
            </div>
            <div style={{ flex: 2 }}>
              <label>Nome completo</label>
              <input type="text" style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: 30 }}>
            <label>e-mail</label>
            <input type="email" style={inputStyle} />
          </div>

          <p style={{ fontSize: 12, textAlign: 'center', marginBottom: 30 }}>
            Se o usuario não estiver o cadastro vai para o formulario <br />
            caso tiver o cadastro habilita o reset de senha
          </p>

          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={resetButtonStyle}>
              RESETAR SENHA
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#e6e6e6'
};

const resetButtonStyle: React.CSSProperties = {
  padding: '10px 30px',
  backgroundColor: '#00bfff',
  border: 'none',
  borderRadius: 6,
  color: '#fff',
  fontWeight: 'bold',
  cursor: 'pointer'
};
