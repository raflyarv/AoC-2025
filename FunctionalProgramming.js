const idempotentVar = Math.abs(Math.abs(10));

const predicate = (a) => a > 2;
const filteredPredicate = [1,2,3,4].filter(predicate);
console.log(filteredPredicate)

// const liftA2 = (f) => (a, b) => a.map(f).ap(b);
// const mult = a => b => a * b;

// const liftedMult = liftA2(mult);

// liftedMult([1, 2], [3]);
// liftA2(a => b => a + b)([1, 2], [3, 4]);



// Higher Order Functions
// This is like a predicate + currying, which breaks down function so that the argument
// can be inserted one by one

const filterBy = (predicate) => (items) => items.filter(predicate);

const priceFilter = (min, max) => (item) => item.price >= min && item.price <= max;
const categoryFilter = (category) => (item) => item.category === category

const products = [
    {
        name: "The Hunger Games", price: 500000, category: 'Science Fiction'
    }, 
    {
        name: "Sunrise on the Reaping", price: 568000, category: "Dystopian"
    }, 
    {
        name: "Galatea", price: 185000, category: "Greek Mythology"
    }
]

const filteredData = filterBy(priceFilter(300000, 600000), categoryFilter('Science Fiction'))(products)
console.log(filteredData)

// Pure Functions
// Predictable state updates in a Redux-like store

const addItem = (cart, item) => [...cart, item]; 

const cart = ["Apple"];
const newCart = addItem(cart, "Banana");
// So this is basically like creating a new array that wasn't
// disturb the original (?)

console.log(cart)

;[1,2,3,4].filter((a) => a > 2)