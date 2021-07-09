
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Biryani',
      description: 'Hyderabadi biryani',
      price: 250,
    },
    {
      id: 'm2',
      name: 'Litti Chokha',
      description: 'A bihar specialty!',
      price:80,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 150,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 120,
    },
  ];

    const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
     key={meal.id} 
     id={meal.id}
     name={meal.name}
      description={meal.description} 
      price={meal.price}
    />));

    return (
    <section className={classes.meals}>
    <Card>
     <ul>{mealsList}</ul>
    </Card>
    </section>
    );
};
export default AvailableMeals;