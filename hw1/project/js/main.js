const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (item, img = 'https://picsum.photos/seed/9/200') => 
        `<div class="product">
          <img src="${img}" alt="productImg">
          <h3>${item.title}</h3>
          <p>${item.price} руб.</p>
          <button class="by-btn">Купить</button>
        </div>`;

const renderProducts = list => {document.querySelector('.products')
        .insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
};

renderProducts(products);


/*
  Запятая между товарами отображается потому, что в HTML помещается массив, элементы
  которого разделены запятой. Для устранения этой проблемы, можно применить метод 
  join, который объединяет все элементы массива в строку.
*/
