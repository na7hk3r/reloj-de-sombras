import React, { useState } from 'react';

const Laboratory: React.FC = () => {
  const [alchemyVisible, setAlchemyVisible] = useState(false);

  const handleAlchemyClick = () => {
    setAlchemyVisible(true);
    document.getElementById('alchemy-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#14141E] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <img src="https://tinyurl.com/bdefwzpn" alt="73-logo" className="w-24 mx-auto mt-6 mb-2" />
          <h1 className="text-5xl font-display text-gold mb-4 animate-glow">Laboratorio 73</h1>
          <p className="text-2xl text-silver font-display tracking-wider">Has descubierto el portal entre la lógica y el misterio</p>
        </div>
        <div className="mt-12 italic text-2xl animate-fade-in" style={{ animationDelay: '1.8s' }}>
          <p>En su mesa de trabajo, el alquimista anotó las ideas que había descifrado: 1, 0, 0, 1, 0, 0, 1. Una cifra que parecía simple, pero contenía una verdad más profunda. 73, pensó, como si fuera un número que hablara del equilibrio entre la luz y la sombra, entre el ser y el no-ser.</p>
          <p>"Este código no es un final, sino un comienzo. Para quien lo descubra, quizás haya algo más allá de lo evidente."</p>
        </div>
        <div className="border border-gold p-4 rounded-lg mb-8">
        <p className="text-center text-2xl text-gold">
          Presta atención a las secciones, quién busca bien puede encontrar más información.
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-8 mt-12 rounded-lg border border-gold/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-display text-gold mb-6">El Significado del 73</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              73 es el 21º número primo. En código ASCII, 73 representa la letra "I",
              símbolo del ser individual. Es también un número palindrómico en binario:
              1001001, reflejando la dualidad perfecta entre el ser y el no ser.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mt-4">
              En matemáticas, 73 es un número de Harshad en base 10, lo que significa que es divisible por la suma de sus dígitos.
            </p>
          </div>
          <div
            className="bg-card p-8 mt-12 rounded-lg border border-gold/20 backdrop-blur-sm animate-fade-in cursor-pointer hover:bg-gold/10 transition-all duration-300"
            style={{ animationDelay: '0.6s' }}
            onClick={handleAlchemyClick}
          >
            <h2 className="text-3xl font-display text-gold mb-6">La Alquimia Digital</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Como los antiguos alquimistas transformaban la materia, nosotros transformamos
              los bits en significado. Cada 1 y 0 es una decisión entre la verdad y la ilusión,
              entre la luz y la sombra.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mt-4">
              La alquimia digital es el arte de convertir datos en conocimiento, y conocimiento en sabiduría. Es un proceso de descubrimiento y transformación.
            </p>
          </div>
        </div>
        {alchemyVisible && (
          <div id="alchemy-section" className="mt-12 bg-card p-8 rounded-lg border border-gold/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '2s' }}>
            <h2 className="text-3xl font-display text-gold mb-6">La Alquimia</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              La alquimia es una antigua práctica filosófica y protocientífica que combina elementos de la química, la física, la astrología, el arte, la metalurgia, la medicina y la mística. Su objetivo principal era la transmutación de los metales en oro, la creación de la piedra filosofal y el elixir de la vida eterna. Sin embargo, estos conceptos no eran solo literales, sino que también tenían un profundo significado filosófico y espiritual. La transmutación de metales en oro simbolizaba la purificación y perfección del alma, mientras que el elixir de la vida eterna representaba la búsqueda de la iluminación y la trascendencia espiritual. Estos ideales son similares a los encontrados en el budismo y otras filosofías, donde el objetivo final es alcanzar un estado de iluminación y trascender las limitaciones del mundo material.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mt-4">
              Hermes Trismegisto es una figura legendaria que se asocia con la alquimia y la sabiduría esotérica. Se le atribuyen varios textos alquímicos y filosóficos, conocidos como los escritos herméticos.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mt-4">
              A continuación, puedes encontrar algunos libros PDF de Hermes Trismegisto:
            </p>
            <ul className="list-disc list-inside text-xl text-gray-300 leading-relaxed mt-4">
                <li><a href="https://ia800203.us.archive.org/24/items/ElKybalion_842/ElKybaliontresIniciados.pdf" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">El Kybalion</a></li>
                <li><a href="https://www.nodualidad.info/recursos/pdf-libros/Tabla-Esmeralda.pdf" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">Tabula Smaragdina</a></li>
                <li><a href="https://www.ricardoego.com/libros/Corpus%20Hermeticum%20-%20Trismegisto%20Hermes.pdf" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">Corpus Hermeticum</a></li>
            </ul>
          </div>
        )}
        <div className="mt-12 bg-card p-8 rounded-lg border border-gold/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '2.2s' }}>
          <h2 className="text-3xl font-display text-gold mb-6">Interpretación de Frases por Lógica Booleana</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            La lógica booleana es una forma de álgebra en la que todos los valores se reducen a verdadero o falso. En este contexto, evaluamos cada frase y la representamos con 1 si es verdadera y con 0 si es falsa.
          </p>
        </div>
        <div className="mt-12 bg-card p-8 rounded-lg border border-gold/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '2.4s' }}>
          <h2 className="text-3xl font-display text-gold mb-6">Conversión de Números a Binario</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            La conversión de números a binario implica representar un número en base 2. Por ejemplo, el número 73 en binario es 1001001. Cada dígito en un número binario representa una potencia de 2, comenzando desde 2^0 en el extremo derecho.
          </p>
        </div>
        <div className="mt-12 bg-card p-8 rounded-lg border border-gold/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '2.6s' }}>
          <h2 className="text-3xl font-display text-gold mb-6">Interpretaciones Místicas</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            En numerología, el número 73 se asocia con la introspección y la sabiduría interior. Se cree que las personas influenciadas por este número tienen una fuerte conexión con su intuición y un profundo deseo de comprender los misterios de la vida.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mt-4">
            Espiritualmente, el número 73 puede simbolizar la búsqueda de la verdad y el equilibrio entre el mundo material y el espiritual. Es un recordatorio de que el conocimiento verdadero va más allá de lo visible y lo tangible.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mt-4">
            En algunas tradiciones esotéricas, el número 73 se considera un número de poder, que representa la unión de lo divino y lo humano, y la armonía entre el cielo y la tierra.
          </p>
        </div>
        <div className="mt-12 bg-card p-8 rounded-lg border border-gold/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '2.8s' }}>
          <h2 className="text-3xl font-display text-gold mb-6">Curiosidades del Número 73</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            El número 73 es el 21º número primo, y su inverso, 37, es el 12º número primo. Además, 73 es el producto de 7 y 3, que son también números primos.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mt-4">
            En el sistema binario, 73 se representa como 1001001, que es un palíndromo, lo que significa que se lee igual de izquierda a derecha que de derecha a izquierda.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mt-4">
            En la serie de televisión "The Big Bang Theory", el personaje Sheldon Cooper menciona que 73 es el mejor número porque 73 en binario es un palíndromo, y su inverso, 37, en binario es 100101, que también es un palíndromo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Laboratory;