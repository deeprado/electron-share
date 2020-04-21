const github = 'https://api.github.com'
const githubApi = {
  users: '/users/:user',
  stargazers: '/repos/:owner/:repo/stargazers',
  repos: '/users/:user/repos',
  stargazers_url: '/repos/:user/:repos/stargazers',
  imageRandom: 'https://source.unsplash.com/random'
}
const api = {...githubApi}
Object.keys(githubApi).forEach(key => {
  Object.defineProperty(api, key, {
    get () {
      return github + githubApi[key]
    }
  })
})
export default api
