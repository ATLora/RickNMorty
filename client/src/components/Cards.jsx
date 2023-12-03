import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <div className="pt-8 w-full min-h-screen bg-blue-900 grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
      {/* // <div className="w-full min-h-screen bg-blue-900 flex flex-rox flex-wrap justify-"> */}
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
