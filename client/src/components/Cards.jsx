import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <div className="w-full h-screen bg-blue-900">
      {characters.map(({ id, name, species, gender, image, status }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            status={status}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
