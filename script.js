document.addEventListener('DOMContentLoaded', () => {
    const bgVideo = document.getElementById('bg-video');
    bgVideo.playbackRate = 0.5; // Зменшує швидкість відтворення вдвічі
});



document.addEventListener("DOMContentLoaded", function() {
    var loginModal = document.getElementById("loginModal");
    var registerModal = document.getElementById("registerModal");

    // Використовуйте новий клас або ідентифікатор для кнопки логіну
    var loginBtn = document.querySelector(".login-btn");

    var closeButtons = document.querySelectorAll(".close-button");

    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    registerBtn.onclick = function() {
        registerModal.style.display = "block";
    }

    closeButtons.forEach(function(btn) {
        btn.onclick = function() {
            loginModal.style.display = "none";
            registerModal.style.display = "none";
        }
    });

    window.onclick = function(event) {
        if (event.target == loginModal || event.target == registerModal) {
            loginModal.style.display = "none";
            registerModal.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var closeButton = document.querySelector('.close-button');
    var modal = document.querySelector('.modal');

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});
























document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = loginForm.querySelector('input[type="text"]').value;
        localStorage.setItem('user', username);
        updateLoginStatus();
    });

    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('user');
        updateLoginStatus();
    });

    function updateLoginStatus() {
        const user = localStorage.getItem('user');
        if (user) {
            document.querySelectorAll('.logged-in').forEach(el => el.style.display = 'block');
            document.querySelectorAll('.logged-out').forEach(el => el.style.display = 'none');
        } else {
            document.querySelectorAll('.logged-in').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.logged-out').forEach(el => el.style.display = 'block');
        }
        updateAddToCartButtons();
    }

    function updateAddToCartButtons() {
        const user = localStorage.getItem('user');
        addToCartButtons.forEach(button => {
            button.disabled = !user;
        });
    }

    updateLoginStatus();
});





document.addEventListener('DOMContentLoaded', function () {
    const cart = [];
    const cartModal = document.getElementById('cartModal');
    const cartItemsDiv = document.getElementById('cartItems');
    const closeButton = document.querySelector('#cartModal .close-button'); // Змінений селектор

    const cartButton = document.getElementById('cart-button'); // Кнопка для відкриття кошика



    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const menuItemId = this.getAttribute('data-menu-item-id');
            const menuItemName = this.getAttribute('data-menu-item-name'); // Припускаючи, що у вас є атрибут data-menu-item-name
            cart.push({ id: menuItemId, name: menuItemName });
            updateCartDisplay();
        });
    });

    cartButton.addEventListener('click', function() {
        cartModal.style.display = 'block';
        updateCartDisplay();
    });




    closeButton.addEventListener('click', function() {
        console.log('Закриття кошика'); // Додано для логування
        cartModal.style.display = 'none';
    });
    function updateCartDisplay() {
        cartItemsDiv.innerHTML = '';
        cart.forEach((item, index) => {
            cartItemsDiv.innerHTML += `<p>${item.name} <button class="remove-item" data-index="${index}">&times;</button></p>`;
        });
    }

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1);
            updateCartDisplay();
        }
    });
});





function reserveTable() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var table = document.getElementById('table').value;

    // Тут додаєте логіку для збереження резервації
    console.log("Резервування столика:", name, phone, table);
}


function splitBill() {
    var amount = parseFloat(document.getElementById('billAmount').value);
    var people = parseInt(document.getElementById('peopleCount').value);

    var perPerson = amount / people;
    document.getElementById('result').innerHTML = "Everyone pays: " + perPerson.toFixed(2) + " грн";
}


function makeTransaction() {
    var accountName = document.getElementById('accountName').value;
    var amount = parseFloat(document.getElementById('amount').value);

    // Тут додаєте логіку для обробки транзакції
    console.log("Transaction:", accountName, amount);
}



let cart = [];

function addToCart(itemName, price) {
    cart.push({ itemName, price });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += `<p>${item.itemName} - ${item.price} грн <button onclick="removeFromCart(${index})">Видалити</button></p>`;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function splitBill() {
    // Логіка для розділення рахунку
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    let peopleCount = cart.length; // Припустимо, що кожна страва ділиться на одну людину
    let perPerson = total / peopleCount;

    alert(`Everyone pays: ${perPerson.toFixed(2)} є`);
}


function reserveTable() {
    var tableNumber = document.getElementById('tableNumber').value;
    var tablePassword = document.getElementById('tablePassword').value;

    // Тут додаєте логіку для збереження резервації на сервері
    console.log("Reservation table:", tableNumber, tablePassword);
    alert("Table successfully reserved!");
}

function joinTable() {
    var tableNumber = document.getElementById('joinTableNumber').value;
    var tablePassword = document.getElementById('joinTablePassword').value;

    // Тут додаєте логіку для перевірки та приєднання до столика на сервері
    console.log("Join to table:", tableNumber, tablePassword);
    alert("Successfully joined the table!");
}


function loadMenu() {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => displayMenu(data.items))
        .catch(error => console.error('Error:', error));
}

function displayMenu(items) {
    const menuContainer = document.getElementById('menu-table');
    items.forEach(item => {
        const menuItem = `
            <div class="menu-item">
                <div class="item-name">
                    <span class="full-name">${item.name}</span>
                </div>
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-description">
                    <p>${item.description}</p>
                </div>
                <hr>
                <div class="item-price">${item.price}</div>
                <br>
                <button class="btn" data-menu-item-id="${item.id}">
                    <span class="btn__content">Add to cart</span>
                    <span class="btn__glitch"></span>
                    <span class="btn__label">r25</span>
                </button>
            </div>
        `;
        menuContainer.innerHTML += menuItem;
    });
}

// Викликати при завантаженні сторінки
loadMenu();



function reserveTable() {
    var tableNumber = document.getElementById('table').value;
    var tablePassword = document.getElementById('phone').value;

    fetch('/reserve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tableNumber: tableNumber, password: tablePassword }),
    })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            alert('Table successfully reserved!');
        });
}


function clearTable() {
    var tableNumber = document.getElementById('clearTableNumber').value;

    fetch('/clearTable', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tableNumber: tableNumber }),
    })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        });
}



document.addEventListener('DOMContentLoaded', function () {
    const registerBtn = document.getElementById('registerBtn');
    const registerModal = document.getElementById('registerModal');
    const closeBtn = registerModal.querySelector('.close-button');

    registerBtn.addEventListener('click', function() {
        registerModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const group = [];

    document.getElementById('addToGroup').addEventListener('click', function() {
        const personName = document.getElementById('personName').value;
        if (personName) {
            group.push(personName);
            updateGroupDisplay();
            document.getElementById('personName').value = ''; // Очистити поле вводу
        }
    });

    function updateGroupDisplay() {
        const groupList = document.getElementById('groupList');
        groupList.innerHTML = '<h4>Учасники групи:</h4>';
        group.forEach((person, index) => {
            groupList.innerHTML += `<p>${person} <button onclick="removeFromGroup(${index})">&times;</button></p>`;
        });
    }

    window.removeFromGroup = function(index) {
        group.splice(index, 1);
        updateGroupDisplay();
    };
});



const group = [];

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addToGroup').addEventListener('click', addToGroup);
});

function addToGroup() {
    const personName = document.getElementById('personName').value;
    if (personName) {
        group.push(personName);
        updateGroupDisplay();
        document.getElementById('personName').value = ''; // Очистити поле вводу
    }
}

function updateGroupDisplay() {
    const groupList = document.getElementById('groupList');
    groupList.innerHTML = '<h4>Учасники групи:</h4>';
    group.forEach((person, index) => {
        groupList.innerHTML += `<p>${person} <button onclick="removeFromGroup(${index})">&times;</button></p>`;
    });
}

window.removeFromGroup = function(index) {
    group.splice(index, 1);
    updateGroupDisplay();
};



let accountBalance = 300; // Початковий баланс на рахунку

function splitAmount() {
    const amountToSplit = parseFloat(document.getElementById('amountToSplit').value);
    if (isNaN(amountToSplit) || amountToSplit <= 0) {
        alert("Please, enter correct sume for splitting.");
        return;
    }

    if (amountToSplit > accountBalance) {
        alert("The sume for splitting is higher that your balance");
        return;
    }

    const numberOfPeople = group.length;
    if (numberOfPeople === 0) {
        alert("Add people to your gpoup for splitting the sume.");
        return;
    }

    const amountPerPerson = amountToSplit / numberOfPeople;
    document.getElementById('splitResult').innerHTML = `Everyone pays: ${amountPerPerson.toFixed(2)} є`;

    // Показати кнопку оплати
    document.getElementById('payButton').style.display = 'block';

    // Опціонально: відніміть розділену суму від балансу
    accountBalance -= amountToSplit;
}

function payAmount() {
    // Тут можна додати логіку для обробки оплати
    alert("Payment was successfully!");

    // Сховати кнопку оплати після завершення
    document.getElementById('payButton').style.display = 'none';

    // Очистити результати розділення суми
    document.getElementById('splitResult').innerHTML = '';
    document.getElementById('amountToSplit').value = '';
}

// Припускаючи, що у вас вже є змінна group та відповідні функції для її управління



// Функція для очищення кошика
function clearCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Очищення вмісту кошика
}

// Додавання обробника подій до кнопки "Make order"
const makeOrderButton = document.getElementById('makeOrderButton');
makeOrderButton.addEventListener('click', function(event) {
    event.preventDefault(); // Запобігання стандартній поведінці форми
    clearCart();
    // Тут можна додати додатковий код, наприклад, для відправки замовлення на сервер
});


