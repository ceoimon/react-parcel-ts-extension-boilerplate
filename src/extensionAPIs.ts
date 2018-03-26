const apis = [
  'alarms',
  'bookmarks',
  'browserAction',
  'commands',
  'contextMenus',
  'cookies',
  'downloads',
  'events',
  'extension',
  'extensionTypes',
  'history',
  'i18n',
  'idle',
  'notifications',
  'pageAction',
  'runtime',
  'storage',
  'tabs',
  'webNavigation',
  'webRequest',
  'windows',
]

class Extension {
  public readonly runtime!: typeof browser.runtime
  public readonly browserAction!: typeof browser.browserAction
  public readonly alarms!: typeof browser.alarms
  public readonly bookmarks!: typeof browser.bookmarks
  public readonly commands!: typeof browser.commands
  public readonly contextMenus!: typeof browser.contextMenus
  public readonly cookies!: typeof browser.cookies
  public readonly downloads!: typeof browser.downloads
  public readonly extension!: typeof browser.extension
  public readonly history!: typeof browser.history
  public readonly i18n!: typeof browser.i18n
  public readonly idle!: typeof browser.idle
  public readonly notifications!: typeof browser.notifications
  public readonly pageAction!: typeof browser.pageAction
  public readonly storage!: typeof browser.storage
  public readonly tabs!: typeof browser.tabs
  public readonly webNavigation!: typeof browser.webNavigation
  public readonly webRequest!: typeof browser.webRequest
  public readonly windows!: typeof browser.windows

  constructor() {
    for (const api of apis) {
      this[api] = null

      try {
        if (chrome[api]) {
          this[api] = chrome[api]
          continue
        }
      } catch (_) {
        //
      }

      try {
        if (window[api]) {
          this[api] = window[api]
          continue
        }
      } catch (_) {
        //
      }

      try {
        if (browser[api]) {
          this[api] = browser[api]
          continue
        }
      } catch (_) {
        //
      }

      try {
        this[api] = browser.extension[api]
      } catch (_) {
        //
      }
    }
  }
}

const extension = new Extension()

export default extension
