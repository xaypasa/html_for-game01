const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

const items = []

function renderCart() {
    const ul = document.getElementById('items')
    ul.innerHTML=''
    items.forEach(e => {
        const li = `<li>
        <img src="${e.img}"
            alt="">
        <div>
            <article class="product-title">
                <h3>${e.name}</h3>
                <span>${e.price}</span>
            </article>
            <article class="buttons">
                <span class="amount">
                    <button id="removeBtn">-</button>
                    <span>1</span>
                    <button id="addBtn">+</button>
                </span>
                <span class="delBtn">
                    <button>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    </button>
                </span>
            </article>
        </div>
    </li>
    `
        ul.innerHTML += Li
    })
}

async function getMeals() {
  const response = await fetch(API)
  const data = await response.json()
  console.log(data)
  const meals = data.meals
  const ul =  document.getElementById('product-list')
  meals.forEach(e => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const span = document.createElement('span')
    const h3 = document.createElement('h3')
    const price = Math.floor(Math.random() * 10000)
    li.addEventListener('click',()=> {
        const item = {
            name: e.strMeal,
            price,
            quantity: 1,
            img: e.strMealThumb
        }
        items.push(item)
        renderCart()
    })
    img.src = e.strMealThumb
    span.textContent = e.strMeal
    h3.textContent = price.toLocaleString()
    li.appendChild(img)
    li.appendChild(span)
    li.appendChild(h3)
    ul.appendChild(li)
  });
}
// call
getMeals()