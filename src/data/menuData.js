import menu1 from '../assets/main-menu1.jpg'
import menu2 from '../assets/main-menu2.jpg'
import menu3 from '../assets/main-menu3.jpg'
import menu4 from '../assets/main-menu4.jpg'
import coffee from '../assets/coffee.jpg'
import coffee2 from '../assets/coffee2.jpg'
import coffee3 from '../assets/coffee3.jpg'
import dessert1 from '../assets/dessert1.jpg'
import dessert2 from '../assets/dessert2.jpg'
import dessert3 from '../assets/dessert3.jpg'
import dessert4 from '../assets/dessert4.jpg'

export const categories = [
    { id: 'all', name: 'All Specialties', count: 11 },
    { id: 'menu', name: 'Main Menu', count: 4 },
    { id: 'coffee', name: 'Artisanal Coffee', count: 3 },
    { id: 'desserts', name: 'Fresh Pastries & Desserts', count: 4 },
];

export const menuItems = [
    { id: 1, category: 'menu', title: 'Chocolate Cookies', text: 'Freshly baked warm chocolate cookies made daily in our hotel kitchen.', price: '$5', img: menu1, tag: 'Fresh Baked' },
    { id: 2, category: 'menu', title: 'Butter Croissant', text: 'Flaky and buttery French pastry served warm with organic butter.', price: '$6', img: menu2, tag: 'Popular' },
    { id: 3, category: 'menu', title: 'Almond Croissant', text: 'Topped with roasted sliced almonds and sweet powdered sugar.', price: '$4', img: menu3, tag: 'Chef Choice' },
    { id: 4, category: 'menu', title: 'Oatmeal Cookies', text: 'Healthy oat and honey raisin treat crafted with organic ingredients.', price: '$5', img: menu4, tag: 'Healthy' },
    { id: 5, category: 'coffee', title: 'Signature Black Coffee', text: 'Rich double-shot espresso brewed with single-origin beans.', price: '$7', img: coffee, badge: 'Hotel Special' },
    { id: 6, category: 'coffee', title: 'Pure Origin Pour-Over', text: 'Single origin artisanal brew crafted to highlight subtle fruit notes.', price: '$12', img: coffee2, badge: 'Premium' },
    { id: 7, category: 'coffee', title: 'Velvet Milk Latte', text: 'Smooth micro-foamed steamed milk poured over rich roast espresso.', price: '$9', img: coffee3 },
    { id: 8, category: 'desserts', title: 'Royal Cream Cake', text: 'Velvety cream layered sponge cake with fresh vanilla bean infusion.', price: '$6', img: dessert1 },
    { id: 9, category: 'desserts', title: 'Belgian Chocolate Croissant', text: 'Filled with warm melted dark Belgian chocolate.', price: '$5', img: dessert2, tag: 'Favorite' },
    { id: 10, category: 'desserts', title: 'Maple Berry Pancakes', text: 'Fluffy stack served with pure maple syrup & fresh berries.', price: '$15', img: dessert3, badge: 'Chef Special' },
    { id: 11, category: 'desserts', title: 'Creamy Milk Pudding', text: 'Silky smooth milk pudding infused with natural Madagascar vanilla.', price: '$12', img: dessert4 },
];
