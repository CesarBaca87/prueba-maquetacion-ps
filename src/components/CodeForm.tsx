import React, { useState } from 'react';

const CodeForm = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });

  const validateCode = (code: string) => {
    const hasNumber = /\d/.test(code);
    const hasUpperCase = /[A-Z]/.test(code);
    const isValidLength = code.length >= 8 && code.length <= 10;
    const isAlphanumeric = /^[a-zA-Z0-9]+$/.test(code);

    return hasNumber && hasUpperCase && isValidLength && isAlphanumeric;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateCode(code)) {
      setMessage({
        type: 'success',
        text: '¡Código válido! Tu regalo será revelado en breve.'
      });
    } else {
      setMessage({
        type: 'error',
        text: 'Código inválido. Por favor, asegúrate de que contenga entre 8 y 10 caracteres, incluyendo un número y una letra mayúscula.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="code" className="block text-lg font-medium text-white mb-2">
          Ingresa Tu Código
        </label>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          placeholder="Ingresa tu código aquí"
        />
      </div>

      {message.text && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' ? 'bg-emerald-500/20 text-emerald-100' : 'bg-red-500/20 text-red-100'
        }`}>
          {message.text}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-emerald-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-emerald-600 transition duration-300 transform hover:scale-105"
      >
        Descubrir
      </button>
    </form>
  );
};

export default CodeForm;