const cars = [
  {
   name: 'hyunday',
   year: 2010 ,
   sport: false
  },
  {
    name: 'chevolet' ,
    year: 2022 ,
    sport: true
  },
  {
    name: 'nissan' ,
    year: 2005 ,
    sport: false
  },
  {
    name: 'bmw' ,
    year: 2020 ,
    sport: true
  }
];

const carSelectedsport= true

let filteredCars= [
  {
    name: 'modelX' ,
    year: 2000 ,
    sport: true
  }
];

for (let i= 0; i <cars.length; i++){
  const element=cars[i];
  console.log(element);
  if (element.sport === carSelectedsport){
    console.log('Encontramos un Sport ');
    filteredCars.push(element);
  }
}
console.log(filteredCars)