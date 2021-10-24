const linksSocialMedia = {
  github: 'luigill',
  youtube: 'channel/UCrv_0mitMLAiM8BA023rlug',
  facebook: 'lui.gill18',
  instagram: 'lui.gill',
  twitter: 'lui_gill'
}

changeName()
changeSocialMedia()
getGitHubProfileInfos()

function changeName() {
  //Se pode acessar a DOM usando o document.getElementById, ou colocando o proprio id e fazendo a acao direto nele
  //document.getElementById('userName').textContent = 'Lui G. Aquini'
  userName.textContent = 'Lui Gill Aquini'
}

function changeSocialMedia() {
  for (let li of socialMedia.children) {
    //social recebe a classe de cada li
    const social = li.getAttribute('class')
    //muda o href da li que esta sendo atualizada
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    //acesso ao href      template string usa ``(crase) ${}-> concatenao com variavel  [social]->para trabalhar com objeto
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      contentGitHub.href = data.html_url
      userPhoto.src = data.avatar_url
      userNameGitHub.textContent = data.login
    })
}
