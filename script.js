
//practicing arr.reduce method
let arr = [1, 2, 3, 4, 5];


let prdts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    des: "Noise-canceling over-ear headphones with high-quality sound.",
    price: 79.99,
    qty: 2,
    category: "Electronics",
    stock: 25,
    rating: 4.5,
    img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1682587116/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/271047_0_yaama6.png?tr=w-600",
    tags: ["wireless", "bluetooth", "audio"],
  },
  {
    id: 2,
    name: "iphone 16 Pro",
    des: "Latest smartphone with 128GB storage and a stunning camera.",
    price: 999.99,
    qty: 2,
    category: "Electronics",
    stock: 10,
    rating: 4.8,
    img: "https://www.imagineonline.store/cdn/shop/files/iPhone_16_Pro_Black_Titanium_PDP_Image_Position_1__en-IN_260bf87b-f4aa-451e-95cb-907270ce7696.jpg?v=1727249594",
    tags: ["smartphone", "technology", "mobile"],
  },
];

let total = prdts.reduce((acc, prdt, ci, arr)=>{
    // console.log(acc, cv);
    
    return (acc + (prdt.price * prdt.qty)) ;
});

console.log(total);

console.log('check for multiple commands!!')




