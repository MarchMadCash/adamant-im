import i18n from '@/i18n'

export default store => {
  window.addEventListener('online', handleEvent)
  window.addEventListener('offline', handleEvent)

  function handleEvent (event) {
    store.dispatch('snackbar/show', {
      message: i18n.t(`connection.${event.type}`),
      timeout: 5000
    })
  }
}
