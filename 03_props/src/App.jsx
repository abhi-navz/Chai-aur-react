import Card from "./Card";

Card;

function App() {
  let someObj = {
    name: "Abhinav",
    age: 21,
  };
  let someArr = ["hello", 21, "World"];

  return (
    <>
      <h1 className="bg-red-400 p-4 text-center text-3xl m-4 shadow hover:shadow-red-700 rounded-lg">
        Props in react
      </h1>
      <div className="flex flex-wrap gap-8 m-4 justify-center">
        <Card
          name="Monika"
          age={20}
          img="https://images.pexels.com/photos/1139450/pexels-photo-1139450.jpeg?auto=compress&cs=tinysrgb&w=300"
        />
        <Card
          name="Monika"
          age={20}
          img="https://images.pexels.com/photos/1139450/pexels-photo-1139450.jpeg?auto=compress&cs=tinysrgb&w=300"
        />
        <Card
          name="Abhinav"
          age={23}
          img="https://images.pexels.com/photos/13693471/pexels-photo-13693471.jpeg?auto=compress&cs=tinysrgb&w=400 "
          someObj={someObj}
          someArr={someArr}
        />
        <Card
          name="Abhinav"
          age={23}
          img="https://images.pexels.com/photos/13693471/pexels-photo-13693471.jpeg?auto=compress&cs=tinysrgb&w=400 "
          someObj={someObj}
          someArr={someArr}
        />
        <Card
          name="Poteto"
          age={12}
          img="https://images.pexels.com/photos/1376042/pexels-photo-1376042.jpeg?auto=compress&cs=tinysrgb&w=300"
        />
        <Card
          name="Poteto"
          age={12}
          img="https://images.pexels.com/photos/1376042/pexels-photo-1376042.jpeg?auto=compress&cs=tinysrgb&w=300"
        />
      </div>
    </>
  );
}

export default App;
