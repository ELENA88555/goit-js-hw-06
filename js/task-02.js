const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listsEl = document.querySelector("#ingredients");


 
const makeLists = lists => {
  return lists.map(list => {
    const itemsEl = document.createElement("li");
    itemsEl.classList.add("item");
   itemsEl.textContent = list;
   return itemsEl
  } )

}


const makeListsEl = makeLists(ingredients)

listsEl.append(... makeListsEl);


