export default (definingVar) => {
    const body = document.body

    unref(definingVar) ? body.style.overflow = 'hidden' : body.style.overflow = 'initial'
}
