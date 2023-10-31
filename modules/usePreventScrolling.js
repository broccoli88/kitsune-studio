export const usePreventScrolling = (definingVar) => {
    const body = document.body
    unref(definingVar) ? body.style.overflow = 'hidden' : body.style.overflowY = 'initial'
}