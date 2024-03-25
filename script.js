function createElement (type, props, ...children) {
  const $el = document.createElement(type)
  Object.keys(props).forEach(prop => $el[prop] = props[prop])
  $el.append(...children)
  return $el
}

const words = [
  'computer',
  'desk',
  'book',
  'chair'
]

const $form = document.getElementById('form')
const $word = document.getElementById('word')
const $words = document.getElementById('words')

displayWords(words)

$words.addEventListener('click', function (e) {
  if (e.target.classList.contains('word')) {
    words.splice(words.indexOf(e.target.textContent), 1)
    displayWords(words)
  }
})

$form.addEventListener('submit', function (e) {
  e.preventDefault()
  if ($form.checkValidity()) {
    words.push($word.value)
    displayWords(words)
    $form.reset()
  }
})

$word.addEventListener('input', function () {
   if (words.includes($word.value)) {
      $word.setCustomValidity('This words is already in the list')
   } else {
      $word.setCustomValidity('')
   }
})
