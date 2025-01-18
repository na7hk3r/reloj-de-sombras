import React from 'react';
import { Beaker } from 'lucide-react';

const Laboratory: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#14141E] text-white p-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <Beaker className="w-20 h-20 mx-auto text-gold mb-6" />
        <h1 className="text-5xl font-display text-gold mb-4 animate-glow">Laboratorio 73</h1>
        <p className="text-2xl text-silver font-display tracking-wider">Has descubierto el portal entre la lógica y el misterio</p>
      </div>
      <div className="mt-12 italic text-2xl animate-fade-in" style={{ animationDelay: '1.8s' }}>
        <p>En su mesa de trabajo, el alquimista anotó las ideas que había descifrado: 1, 0, 0, 1, 0, 0, 1. Una cifra que parecía simple, pero contenía una verdad más profunda. 73, pensó, como si fuera un número que hablara del equilibrio entre la luz y la sombra, entre el ser y el no-ser.</p>
        <p>"Este código no es un final, sino un comienzo. Para quien lo descubra, quizás haya algo más allá de lo evidente."</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card p-8 mt-12 rounded-lg border border-gold/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-display text-gold mb-6">El Significado del 73</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            73 es el 21º número primo. En código ASCII, 73 representa la letra "I",
            símbolo del ser individual. Es también un número palindrómico en binario:
            1001001, reflejando la dualidad perfecta entre el ser y el no ser.
          </p>
        </div>
        <div className="bg-card p-8 mt-12 rounded-lg border border-gold/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-display text-gold mb-6">La Alquimia Digital</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Como los antiguos alquimistas transformaban la materia, nosotros transformamos
            los bits en significado. Cada 1 y 0 es una decisión entre la verdad y la ilusión,
            entre la luz y la sombra.
          </p>
        </div>
      </div>
      <div className="mt-12 bg-card p-8 rounded-lg border border-gold/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '2s' }}>
        <h2 className="text-3xl font-display text-gold mb-6">Interpretación de Frases por Lógica Booleana</h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          La lógica booleana es una forma de álgebra en la que todos los valores se reducen a verdadero o falso. En este contexto, evaluamos cada frase y la representamos con 1 si es verdadera y con 0 si es falsa.
        </p>
      </div>
      <div className="mt-12 bg-card p-8 rounded-lg border border-gold/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '2.2s' }}>
        <h2 className="text-3xl font-display text-gold mb-6">Conversión de Números a Binario</h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          La conversión de números a binario implica representar un número en base 2. Por ejemplo, el número 73 en binario es 1001001. Cada dígito en un número binario representa una potencia de 2, comenzando desde 2^0 en el extremo derecho.
        </p>
      </div>
    </div>
  </div>
);

export default Laboratory;