const colors = ["Red", "Orange", "Yellow", "Blue", "Indigo", "Violet"];
const animals = ["Lynx", "Tiger", "Leopard", "Cat", "Jaguar"];
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptun", "Pluto, yes, Pluto"];
const pickone = (arr) => arr[Math.floor(Math.random() * arr.length)]; 

const server_value = `${pickone(colors)} ${pickone(animals)} ${pickone(planets)}.`;

module.exports = () => `Welcome to the Cloud Academy Azure Container Service (ACS) Node app. My name is ${server_value}.`;
