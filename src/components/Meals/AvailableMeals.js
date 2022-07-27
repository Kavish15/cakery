import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Butterscotch Cakes',
    description: 'Crunchy and All Time Favourite',
    price: 250,
  },
  {
    id: 'm2',
    name: 'Fruit Cake',
    description: 'Taste of Tropics',
    price: 300,
  },
  {
    id: 'm3',
    name: 'Rabdi Cake',
    description: 'Our specialty !',
    price: 450,
  },
  {
    id: 'm4',
    name: 'Red Velvet Cakes',
    description: 'Healthy and Red ',
    price: 400,
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
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
