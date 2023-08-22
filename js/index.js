import { Router } from './router.js'

const home = document.querySelector('#homeBtn')
const universe = document.querySelector('#universeBtn')
const explore = document.querySelector('#exploreBtn')
const homeBtn = home.children.item('moreBtn')
const router = new Router() //mapeamento da rota

router.add("/", "/pages/home.html") //nomes entre "" para conseguir acessar
router.add("/universe", "/pages/universe.html")
router.add("/explore", "/pages/explore.html")
router.add(404, "/pages/404.html") //não precisa por ser numérico

router.handle()

window.onpopstate = () => router.handle() //conseguir navegar pelo botão voltar
window.route = () => router.route()

function homeBgd() {
  document.getElementById('content').style.backgroundImage = "url(/images/universe-1.png)";
}

function universeBgd() {
  document.getElementById('content').style.backgroundImage = "url(/images/universe-2.png)";
}

function exploreBgd() {
  document.getElementById('content').style.backgroundImage = "url(/images/universe-3.png)";
}

function deactivate() {
  home.classList.remove('active')
  universe.classList.remove('active')
  explore.classList.remove('active')
}

home.addEventListener('click', function () {
  homeBgd()
  deactivate()
  home.classList.add('active')
})

homeBtn.addEventListener('click', function () {
  universeBgd()
  deactivate()
  universe.classList.add('active')
})

universe.addEventListener('click', function () {
  universeBgd()
  deactivate()
  universe.classList.add('active')
})

explore.addEventListener('click', function () {
  exploreBgd()
  deactivate()
  explore.classList.add('active')
})




