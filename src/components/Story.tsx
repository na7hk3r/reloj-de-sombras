import React, { useState, useEffect } from 'react';

interface StoryProps {
  storyVisible: boolean;
  binaryInput: string;
}

const Story: React.FC<StoryProps> = ({ storyVisible, binaryInput }) => {
  const [visibleHints, setVisibleHints] = useState<number[]>([]);

  useEffect(() => {
    if (storyVisible) {
      const timeouts = [
        setTimeout(() => setVisibleHints((prev) => [...prev, 0]), 2000),
        setTimeout(() => setVisibleHints((prev) => [...prev, 1]), 4000),
        setTimeout(() => setVisibleHints((prev) => [...prev, 2]), 6000),
        setTimeout(() => setVisibleHints((prev) => [...prev, 3]), 8000),
        setTimeout(() => setVisibleHints((prev) => [...prev, 4]), 10000),
        setTimeout(() => setVisibleHints((prev) => [...prev, 5]), 12000),
        setTimeout(() => setVisibleHints((prev) => [...prev, 6]), 14000),
      ];

      return () => timeouts.forEach(clearTimeout);
    }
  }, [storyVisible]);

  const isCorrectInput = (index: number) => {
    const correctValues = ['1', '0', '0', '1', '0', '0', '1'];
    return binaryInput[index] === correctValues[index];
  };

  return (
    <div className={`prose prose-invert max-w-none transition-opacity duration-1000 ${storyVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-5xl font-display mb-12 text-center text-gold animate-glow">El reloj de sombras</h1>
      <p className="text-center text-xl text-gold">
        Evalúa cada frase con lógica booleana. Si es verdadera, representa con 1; si es falsa, representa con 0.
      </p>
      <p className="text-center text-xl mb-8 text-gold">
        Ve anotando la respuesta en el recuadro del final para ir revelando el misterio.
      </p>
      <div className="space-y-8 text-xl leading-relaxed">
        <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          En un laboratorio olvidado por el tiempo, un lugar donde las luces titilaban como estrellas atrapadas, 
          un alquimista trabajaba en silencio. No buscaba oro ni fórmulas de poder; su meta era más sutil: 
          desentrañar la lógica de la existencia misma.
        </p>
        
        <div className="p-6 border border-gold/20 rounded-lg bg-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {isCorrectInput(0) && <p><span className="text-gold font-display">(1 - true)</span><br/></p>}
          <p>"El sol siempre regresa, incluso cuando la noche parece eterna."</p>
          {visibleHints.includes(0) && (
            <p className="mt-2 text-gray-400">Estas palabras resonaban en su mente mientras miraba el primer rayo del alba colarse por las ventanas rotas. Sabía que eran ciertas; el sol nunca fallaba.</p>
          )}
        </div>

        <div className="p-6 border border-silver/20 rounded-lg bg-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {isCorrectInput(1) && <p><span className="text-silver font-display">(0 - false)</span><br/></p>}
          <p>"Las sombras desaparecen por completo cuando llega la luz."</p>
          {visibleHints.includes(1) && (
            <p className="mt-2 text-gray-400">El alquimista sonrió al recordar esta idea de su juventud. Falsa, pensó. Las sombras no desaparecen; solo se transforman, deslizándose bajo las cosas.</p>
          )}
        </div>

        <div className="p-6 border border-silver/20 rounded-lg bg-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {isCorrectInput(2) && <p><span className="text-silver font-display">(0 - false)</span><br/></p>}
          <p>"La memoria de los espejos se borra cuando dejan de reflejar."</p>
          {visibleHints.includes(2) && (
            <p className="mt-2 text-gray-400">Sus manos temblaron mientras sostenía un espejo antiguo. Sabía que no era cierto. Los espejos recuerdan todo, incluso aquello que el ojo humano no ve.</p>
          )}
        </div>

        <div className="p-6 border border-gold/20 rounded-lg bg-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: '1s' }}>
          {isCorrectInput(3) && <p><span className="text-gold font-display">(1 - true)</span><br/></p>}
          <p>"El agua, aunque inmóvil, guarda en sí misma el movimiento."</p>
          {visibleHints.includes(3) && (
            <p className="mt-2 text-gray-400">En un frasco cristalino frente a él, el agua contenía siglos de historia, su superficie apenas perturbada, pero siempre viva.</p>
          )}
        </div>

        <div className="p-6 border border-silver/20 rounded-lg bg-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: '1.2s' }}>
          {isCorrectInput(4) && <p><span className="text-silver font-display">(0 - false)</span><br/></p>}
          <p>"Las estrellas dejan de existir si nadie las observa."</p>
          {visibleHints.includes(4) && (
            <p className="mt-2 text-gray-400">Rió con amargura. Las estrellas existían mucho antes de que alguien pudiera alzarse para contemplarlas.</p>
          )}
        </div>

        <div className="p-6 border border-silver/20 rounded-lg bg-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: '1.4s' }}>
          {isCorrectInput(5) && <p><span className="text-silver font-display">(0 - false)</span><br/></p>}
          <p>"El eco es solo un truco vacío de las montañas."</p>
          {visibleHints.includes(5) && (
            <p className="mt-2 text-gray-400">Sabía que no era cierto. Los ecos eran portadores de historias, devolviendo al mundo las palabras olvidadas.</p>
          )}
        </div>

        <div className="p-6 border border-gold/20 rounded-lg bg-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: '1.6s' }}>
          {isCorrectInput(6) && <p><span className="text-gold font-display">(1 - true)</span><br/></p>}
          <p>"El reloj de sombras marca cada instante, aunque nadie pueda verlo."</p>
          {visibleHints.includes(6) && (
            <p className="mt-2 text-gray-400">Esta idea lo reconfortaba. Era verdadera, como el tiempo mismo, siempre presente aunque invisible.</p>
          )}
        </div>

        <div className="mt-12 italic animate-fade-in" style={{ animationDelay: '1.8s' }}>
          <p>En su mesa de trabajo, el alquimista anotó las ideas que había descifrado: 1, 0, 0, 1, 0, 0, 1. Una cifra que parecía simple, pero contenía una verdad más profunda. 73, pensó, como si fuera un número que hablara del equilibrio entre la luz y la sombra, entre el ser y el no-ser.</p>
          <p>"Este código no es un final, sino un comienzo. Para quien lo descubra, quizás haya algo más allá de lo evidente."</p>
        </div>
      </div>
    </div>
  );
};

export default Story;