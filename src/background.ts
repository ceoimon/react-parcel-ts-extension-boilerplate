import extension from './extensionAPIs'

extension.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('extension installed!')
  }
})
