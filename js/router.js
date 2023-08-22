export class Router {
  routes = {}//um objeto 

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault() //previnir que ao clicar em um href ele redirecione

    window.history.pushState({}, "", event.target.href)//vai adicionar o href no histórico

    this.handle()//this pra usar uma função dentro do par de chaves
  }

  handle() {//achar a rota através do mapeamento
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route) //assincrono, será feito em segundo plano e voltar
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
  }
}

