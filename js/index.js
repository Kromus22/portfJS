const presentOrderBtn = document.querySelector('.present__order-btn')
const pageOverlayModal = document.querySelector('.page__overlay_modal')
const modalClose = pageOverlayModal.querySelector('.modal__close')


const handlerModal = (openBtn, modal, openSelector, closeTrigger, sk) => {

    let opacity = 0

    const speed = {
        slow: 10,
        medium: 5,
        fast: 1,
        default: 3,
    }

    openBtn.addEventListener('click', () => {
        modal.style.opacity = opacity

        modal.classList.add(openSelector)

        const timer = setInterval(() => {
            opacity += 0.02
            modal.style.opacity = opacity
            if (opacity >= 1) clearInterval(timer)
        }, speed[sk] ? speed[sk] : speed.medium)
    })

    closeTrigger.addEventListener('click', () => {
        const timer = setInterval(() => {
            opacity -= 0.02
            modal.style.opacity = opacity
            if (opacity <= 0) {
                clearInterval(timer)
                modal.classList.remove(openSelector)
            }
        }, speed[sk] ? speed[sk] : speed.medium)
    })
}

handlerModal(presentOrderBtn, pageOverlayModal, 'page__overlay_modal_open', modalClose, 'medium')