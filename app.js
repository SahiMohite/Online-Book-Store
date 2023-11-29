// Data Set

var fictionData = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/51gAQo24viL._SY445_SX342_.jpg",
        name: "The Mahabharata Quest",
        price: 303,
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/51ceqZss88S._SX342_SY445_.jpg",
        name: "The Great Gatsby",
        price: 109,
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/51HMnly6NbL._SY445_SX342_.jpg",
        name: "A Man Called Ove",
        price: 239,
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/71nQsAGk4PL._SY342_.jpg",
        name: "Suspects",
        price: 382,
    },
    {
        id: 5,
        img: "https://m.media-amazon.com/images/I/41dElS3Q0mL._SY445_SX342_.jpg",
        name: "The ARCHER",
        price: 201,
    },
    {
        id: 6,
        img: "https://m.media-amazon.com/images/I/41RYb942gpL._SY342_.jpg",
        name: "One Arranged Murder",
        price: 179,
    },
];

var nonFictionData = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/71zytzrg6lL._SY342_.jpg",
        name: "The 5 Am Club",
        price: 200,
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/51xwGSNX-EL._SY445_SX342_.jpg",
        name: "Ikigai",
        price: 345,
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/41YMXMqcqtL._SY445_SX342_.jpg",
        name: "Elon Musk",
        price: 903,
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/51kh4WTeKcL._SY445_SX342_.jpg",
        name: "Wise and Otherwise: A salute to Life",
        price: 164,
    },
    {
        id: 5,
        img: "https://m.media-amazon.com/images/I/71m+kC4vOxL._SY342_.jpg",
        name: "Thinking, Fast & Slow",
        price: 413,
    },
    {
        id: 6,
        img: "https://m.media-amazon.com/images/I/71t4GuxLCuL._SY342_.jpg",
        name: "The Subtle Art of Not Giving a F*ck",
        price: 316,
    },
];

var comicsData = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/7112AfSmn4L._SY342_.jpg",
        name: "Hitopdesh ki Prashid kahaniya",
        price: 143,
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/51xS2wDze5L._SY445_SX342_.jpg",
        name: "Moral Tales of Tenalirama",
        price: 143,
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/71adPt-NePL._SY342_.jpg",
        name: "Girl Who Drank The Moon",
        price: 240,
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/613U7Yu48bL._SY445_SX342_.jpg",
        name: "Superman Action",
        price: 1339,
    },
    {
        id: 5,
        img: "https://m.media-amazon.com/images/I/91BTZdo8jIL._SY342_.jpg",
        name: "Spider-Man/Venom",
        price: 200,
    },
];

var youngData = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/91JGwQlnu7L._AC_UY327_FMwebp_QL65_.jpg",
        name: "The Book Thief",
        price: 270,
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/71xLe8k2xjL._AC_UY327_FMwebp_QL65_.jpg",
        name: "Dark and Shallow Lies",
        price: 349,
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/81aisCGz-rL._AC_UY327_FMwebp_QL65_.jpg",
        name: "Hotel Magnifique",
        price: 453,
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/81nfHds5U4L._AC_UY327_FMwebp_QL65_.jpg",
        name: "Five Survive",
        price: 309,
    },
];

// Slider
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")
let item = document.querySelector(".container")
let containerDimensions = item.getBoundingClientRect();
let containersWidth = containerDimensions.width;

let slideNumber = 1;
const length = images.length

for (let i = 0; i < length; i++) {
    const div = document.createElement("div")
    div.className = "button"
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor = "white"

const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent"
    });
};


buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetBg();
        slider.style.transform = `translateX(-${i * containersWidth}px)`;
        slideNumber = i + 1;
        button.style.backgroundColor = "white"
    });
});

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * containersWidth}px)`
    slideNumber++;
}

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`
    slideNumber = 1;
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * containersWidth}px)`
    slideNumber--;
}

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * containersWidth}px`
    slideNumber = length;
}

const changeColor = () => {
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = "white";
}

right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
    changeColor();
});

left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
    changeColor();
});

// Sales container
var salesContainer = document.querySelectorAll(".sales")

const addBooks = (filteredBooks, element) => {
    element.innerHTML = filteredBooks.map(
        (product) =>
            `
        <div class="item">
            <img class="book-img" src=${product.img} alt="">
            <button class="add">Add to Cart</button>
            <h3 class="book-title">${product.name}</h3>
            <h4 class="price">Rs.${product.price}</h4>
        </div>
        `
    ).join("");
};

for (var i = 0; i < salesContainer.length; i++) {
    var filteredBooks;
    if (i == 0) {
        filteredBooks = fictionData;
    } else if (i == 1) {
        filteredBooks = nonFictionData;
    } else if (i == 2) {
        filteredBooks = comicsData;
    } else {
        filteredBooks = youngData;
    }
    var booksContainer = salesContainer[i].querySelector(".books")
    addBooks(filteredBooks, booksContainer);
}

const itemContainer = document.querySelectorAll(".item");
const additem = document.querySelectorAll(".add")

itemContainer.forEach((item, i) => {
    item.addEventListener('mouseover', () => {
        additem[i].classList.add('active')
    });
    item.addEventListener('mouseout', () => {
        additem[i].classList.remove('active')
    });
});

// cart

const btnCart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');

btnCart.addEventListener('click', () => {
    cart.classList.add('cart-active');
});

btnClose.addEventListener('click', () => {
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadBook);

function loadBook() {
    loadContent();
}

function loadContent() {
    //Remove Books From Cart
    let btnRemove = document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn) => {
        btn.addEventListener('click', removeItem);
    });

    //Product Item Change Event
    let qtyElements = document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input) => {
        input.addEventListener('change', changeQty);
    });

    //Product Cart

    let cartBtns = document.querySelectorAll('.add');
    cartBtns.forEach((btn) => {
        btn.addEventListener('click', addCart);
    });

    updateTotal();
}


//Remove Item
function removeItem() {
    if (confirm('Are Your Sure to Remove')) {
        let title = this.parentElement.querySelector('.cart-book-title').innerHTML;
        itemList = itemList.filter(el => el.title != title);
        this.parentElement.remove();
        loadContent();
    }
}

//Change Quantity
function changeQty() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    loadContent();
}

let itemList = [];

//Add Cart
function addCart() {
    let book = this.parentElement;
    let title = book.querySelector('.book-title').innerHTML;
    let price = book.querySelector('.price').innerHTML;
    let imgSrc = book.querySelector('.book-img').src;
    //console.log(title,price,imgSrc);

    let newProduct = { title, price, imgSrc }

    //Check Product already Exist in Cart
    if (itemList.find((el) => el.title == newProduct.title)) {
        alert("Book Already added in Cart");
        return;
    } else {
        itemList.push(newProduct);
    }


    let newProductElement = createCartProduct(title, price, imgSrc);
    let element = document.createElement('div');
    element.innerHTML = newProductElement;
    let cartBasket = document.querySelector('.cart-content');
    cartBasket.append(element);
    loadContent();
}


function createCartProduct(title, price, imgSrc) {

    return `
  <div class="cart-box">
  <img src="${imgSrc}" class="cart-img">
  <div class="detail-box">
    <div class="cart-book-title">${title}</div>
    <div class="price-box">
      <div class="cart-price">${price}</div>
      <div class="cart-amt">${price}</div>
   </div>
   <label>Qty: <input type="number" value="1" class="cart-quantity"></label>
    
  </div>
  <ion-icon name="trash" class="cart-remove"></ion-icon>
</div>
  `;
}

function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-box');
    const totalValue = document.querySelector('.total-price');
    let total = 0;

    cartItems.forEach(product => {
        let priceElement = product.querySelector('.cart-price');
        let price = parseFloat(priceElement.textContent.replace("Rs.", ""));
        let qtyInput = product.querySelector('.cart-quantity');
        let qty = parseInt(qtyInput.value);

        if (isNaN(qty) || qty <= 0) {
            // Handle the case where qty is not a valid number or is less than or equal to 0
            qty = 1;
            qtyInput.value = 1; // Set a default value of 1 in the input field
        }

        total += price * qty;
        product.querySelector('.cart-amt').textContent = "Rs." + (price * qty);
    });

    totalValue.textContent = 'Rs.' + total;

    // Add Product Count in Cart Icon
    const cartCount = document.querySelector('.itemNumber');
    let count = cartItems.length; // Assuming cartItems is a NodeList
    cartCount.textContent = count;

    if (count === 0) {
        cartCount.style.display = 'none';
    } else {
        cartCount.style.display = 'block';
    }
}


// order placed

function placeOrder() {
    const orderPlace = document.querySelector(".orderplaced")
    const cart = document.querySelector(".cart")
    const totalElement = document.querySelector(".total-price")
    const total = parseFloat(totalElement.textContent.replace("Rs.", ""))

    if (total == 0) {
        alert("Cart is empty")
    } else {
        cart.classList.remove('cart-active');
        orderPlace.style.visibility = "visible"
    }
}

function toClose() {
    const orderPlace = document.querySelector(".orderplaced")
    orderPlace.style.visibility = "hidden"
}
