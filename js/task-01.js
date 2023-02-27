const itemEl = document.querySelectorAll("li.item")
console.log(`Number of categories: ${itemEl.length}`)

const categoriesEl = itemEl.forEach(item => {
  const category = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;
  console.log(`Category: ${category} 
Elements: ${elements}`)}
)



