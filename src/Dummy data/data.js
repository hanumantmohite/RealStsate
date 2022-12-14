const propData = [
  {
    id: 1,
    furnishtype: 'furnished',
    propertyType: 'houses',
    location: 'pune',
    address: 'hadapsar',
    price: 55000,
    availablefrom: new Date('2022-11-10'),
    description: 'House',
    image:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=50',
  },
  {
    id: 2,
    furnishtype: 'furnished',
    propertyType: 'houses',
    location: 'pune',
    address: 'koregaon park',
    price: 78000,
    availablefrom: new Date('2022-11-08'),
    description: 'House',
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    furnishtype: 'furnished',
    propertyType: 'houses',
    location: 'pune',
    address: 'daund',
    price: 72000,
    availablefrom: new Date('2022-11-17'),
    description: 'House',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    furnishtype: 'furnished',
    propertyType: 'houses',
    location: 'pune',
    address: 'bhor',
    price: 64000,
    availablefrom: new Date('2022-11-09'),
    description: 'House',
    image:
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    furnishtype: 'furnished',
    propertyType: 'houses',
    location: 'pune',
    address: 'maval',
    price: 62000,
    availablefrom: new Date('2022-11-16'),
    description: 'House',
    image:
      'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    furnishtype: 'furnished',
    propertyType: 'houses',
    location: 'pune',
    address: 'shirur',
    price: 75000,
    availablefrom: new Date('2022-11-14'),
    description: 'House',
    image:
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 7,
    furnishtype: 'furnished',
    propertyType: 'houses',
    location: 'pune',
    address: 'purandar',
    price: 56000,
    availablefrom: new Date('2022-11-12'),
    description: 'House',
    image:
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 8,
    furnishtype: 'furnished',
    propertyType: 'houses',
    location: 'pune',
    address: 'velhe',
    price: 58000,
    availablefrom: new Date('2022-11-13'),
    description: 'House',
    image:
      'https://cdn.houseplansservices.com/content/fmphaegc3dtluuum2epltfacfe/w991x660.jpg?v=9',
  },
  {
    id: 9,
    furnishtype: 'furnished',
    propertyType: 'houses',
    location: 'mumbai',
    address: 'dadar',
    price: 74000,
    availablefrom: new Date('2022-11-13'),
    description: 'House',
    image:
      'https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172194515.jpg',
  },
  {
    id: 10,
    furnishtype: 'semi-furnished',
    propertyType: 'Flat',
    location: 'mumbai',
    address: 'vasai',
    price: 61000,
    availablefrom: new Date('2022-11-13'),
    description: 'Flat',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFJzlmGxo_eU64JeAUKKzShzLmSLFZNow9Q&usqp=CAU',
  },

  {
    id: 11,
    furnishtype: 'non-furnished',
    propertyType: 'houses',
    location: 'pune',
    address: 'baner',
    price: 55000,
    availablefrom: new Date('2022-11-14'),
    description: '2 Room, 1 Kitchen',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlt5iC35diuhonfgb0gnl7KD2009aEIIrTg&usqp=CAU',
  },
  {
    id: 12,
    furnishtype: 'furnished',
    propertyType: 'houses',
    location: 'mumbai',
    address: 'bandra',
    price: 71000,
    availablefrom: new Date('2022-11-15'),
    description: 'House',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFD0nL7mCxIeSCcRlvixElq1ghEQIL-FDaQ&usqp=CAU',
  },
  {
    id: 12,
    furnishtype: 'furnished',
    propertyType: 'flat',
    location: 'pune',
    address: 'shivjinagar',
    price: 76000,
    availablefrom: new Date('2022-11-15'),
    description: 'House',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6czcpx4qE2toMwxZ2dZ78-7Ht5SZK5lHYhQ&usqp=CAU',
  },
];

export default propData;
