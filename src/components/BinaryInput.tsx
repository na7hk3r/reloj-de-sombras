import React from 'react';
import { Binary, AlertCircle } from 'lucide-react';

interface BinaryInputProps {
  binaryInput: string;
  isCorrect: boolean;
  showError: boolean;
  handleBinaryInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validateCode: () => void;
}

const BinaryInput: React.FC<BinaryInputProps> = ({ binaryInput, isCorrect, showError, handleBinaryInput, validateCode }) => (
  <div className={`fixed bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/95 to-transparent backdrop-blur-sm`}>
    <div className="max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={binaryInput}
          onChange={handleBinaryInput}
          placeholder="Ingresa el código binario..."
          className={`w-full text-lg px-6 py-6 bg-card/80 border-2 ${
            isCorrect ? 'border-green-500' : showError ? 'border-red-500' : 'border-gold/30'
          } rounded-lg text-xl font-mono tracking-wider text-center ${
            isCorrect ? 'text-green-500' : 'text-gold'
          } placeholder:text-gold/50 focus:outline-none focus:border-gold/50 transition-colors duration-300`}
          disabled={isCorrect}
          autoFocus
        />
        <Binary className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50 w-6 h-6" />
      </div>
      {!isCorrect && (
        <button
          onClick={validateCode}
          disabled={binaryInput.length !== 7}
          className="mt-4 w-full py-3 px-6 bg-gold/10 hover:bg-gold/20 disabled:opacity-50 
                   disabled:cursor-not-allowed rounded-lg text-gold transition-all duration-300
                   border border-gold/30 hover:border-gold/50 font-display tracking-wide text-lg"
        >
          Verificar Código
        </button>
      )}
      {showError && (
        <div className="mt-3 text-red-400 flex items-center justify-center gap-2 animate-fade-in">
          <AlertCircle size={16} />
          <span className="font-display">Código incorrecto. Intenta de nuevo.</span>
        </div>
      )}
    </div>
  </div>
);

export default BinaryInput;