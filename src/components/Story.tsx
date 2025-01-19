import React from 'react';
import StoryItem from './StoryItem';

interface StoryProps {
  storyVisible: boolean;
  binaryInput: string;
}

const Story: React.FC<StoryProps> = ({ storyVisible, binaryInput }) => {
  const storyItems = [
    {
      statement: 'El sol siempre regresa, incluso cuando la noche parece eterna.',
      hint: 'Estas palabras resonaban en su mente mientras miraba el primer rayo del alba colarse por las ventanas rotas. Sabía que eran ciertas; el sol nunca fallaba.',
      correctValue: '1' as '1' | '0'
    },
    {
      statement: 'Las sombras desaparecen por completo cuando llega la luz.',
      hint: 'El alquimista sonrió al recordar esta idea de su juventud. Falsa, pensó. Las sombras no desaparecen; solo se transforman, deslizándose bajo las cosas.',
      correctValue: '0' as '1' | '0'
    },
    {
      statement: 'La memoria de los espejos se borra cuando dejan de reflejar.',
      hint: 'Sus manos temblaron mientras sostenía un espejo antiguo. Sabía que no era cierto. Los espejos recuerdan todo, incluso aquello que el ojo humano no ve.',
      correctValue: '0' as '1' | '0'
    },
    {
      statement: 'El agua, aunque inmóvil, guarda en sí misma el movimiento.',
      hint: 'En un frasco cristalino frente a él, el agua contenía siglos de historia, su superficie apenas perturbada, pero siempre viva.',
      correctValue: '1' as '1' | '0'
    },
    {
      statement: 'Las estrellas dejan de existir si nadie las observa.',
      hint: 'Rió con amargura. Las estrellas existían mucho antes de que alguien pudiera alzarse para contemplarlas.',
      correctValue: '0' as '1' | '0'
    },
    {
      statement: 'El eco es solo un truco vacío de las montañas.',
      hint: 'Sabía que no era cierto. Los ecos eran portadores de historias, devolviendo al mundo las palabras olvidadas.',
      correctValue: '0' as '1' | '0'
    },
    {
      statement: 'El reloj de sombras marca cada instante, aunque nadie pueda verlo.',
      hint: 'Esta idea lo reconfortaba. Era verdadera, como el tiempo mismo, siempre presente aunque invisible.',
      correctValue: '1' as '1' | '0'
    }
  ];

  return (
    <div className={`prose prose-invert max-w-none transition-opacity duration-1000 ${storyVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-5xl font-display mb-12 text-center text-gold animate-glow">El reloj de sombras</h1>
      <div className="border border-gold p-4 rounded-lg mb-8">
        <p className="text-center text-2xl text-gold">
          Evalúa cada frase con lógica booleana. Si es verdadera, representa con 1; si es falsa, representa con 0.
        </p>
        <p className="text-center text-2xl text-gold">
          A medida que resuelvas cada enigma, anótalo en el input del final; el alquimista avanzará en su búsqueda de la verdad.
        </p>
      </div>
      <div className="space-y-8 text-xl leading-relaxed">
        <p className="animate-fade-in text-2xl" style={{ animationDelay: '0.2s' }}>
          En un laboratorio olvidado por el tiempo, un lugar donde las luces titilaban como estrellas atrapadas, 
          un alquimista trabajaba en silencio. No buscaba oro ni fórmulas de poder; su meta era más sutil: 
          desentrañar la lógica de la existencia misma.
        </p>
        {storyItems.map((item, index) => (
          <StoryItem
            key={index}
            index={index}
            binaryInput={binaryInput}
            statement={item.statement}
            hint={item.hint}
            correctValue={item.correctValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Story;