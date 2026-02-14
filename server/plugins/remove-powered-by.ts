export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('beforeResponse', (event) => {
    event.node.res.removeHeader('x-powered-by')
    event.node.res.removeHeader('X-Powered-By')
  })
})
