const arr = [
    'https://plus.unsplash.com/premium_photo-1778474152741-685e36287a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1778599726901-22698cf83040?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1778461456547-27ec7f5e0bbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1750699176491-e48fe2739384?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1778342666790-f1b7b6343cce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1736803528816-ed1fba85c980?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1778513811598-6ac88ef5cdc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1778546978122-fd73f59d77c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1591001648960-e4d029d34562?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8'
];

const img = document.querySelector('img');   //
let num = 0;
setInterval(function(){     // set interval is used to call a function or evaluate an expression at specified intervals (in milliseconds). It will continue calling the function until clearInterval() is called, or the window is closed.
    img.setAttribute('src', arr[num]);    // set attribute is used to set the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise, a new attribute is added with the specified name and value.
    num = (num + 1) % arr.length;    // this is used to loop through the array of images. It increments the num variable by 1 and then takes the modulus with the length of the array to ensure that it wraps around to the beginning of the array when it reaches the end.

} ,200);