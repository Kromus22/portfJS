const disabledScroll = () => {

    const widthScroll = window.innerWidth - document.body.offsetWidth

    document.body.scrollPosition = window.scrollY

    document.body.style.cssText = `
    overflow: hidden;
    position: fixed;
    top: -${document.body.scrollPosition}px;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding-right: ${widthScroll}px;
    `
}

const enabledScroll = () => {
    document.body.style.cssText = 'position: relative'
    window.scroll({ top: document.body.scrollPosition })
}


{
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

        const openModal = () => {
            disabledScroll()
            modal.style.opacity = opacity

            modal.classList.add(openSelector)

            const timer = setInterval(() => {
                opacity += 0.02
                modal.style.opacity = opacity
                if (opacity >= 1) clearInterval(timer)
            }, speed[sk] ? speed[sk] : speed.medium)
        }

        const closeModal = () => {
            enabledScroll()
            const timer = setInterval(() => {
                opacity -= 0.02
                modal.style.opacity = opacity
                if (opacity <= 0) {
                    clearInterval(timer)
                    modal.classList.remove(openSelector)
                }
            }, speed[sk] ? speed[sk] : speed.medium)
        }

        openBtn.addEventListener('click', openModal)

        closeTrigger.addEventListener('click', closeModal)

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal()
            }
        })
    }

    handlerModal(presentOrderBtn, pageOverlayModal, 'page__overlay_modal_open', modalClose, 'medium')
}


{
    const headerContacts = document.querySelector('.header__contacts')
    const headerContactsBurger = document.querySelector('.header__contacts-burger')

    const heandlerBurger = (openBtn, menu, openSelector) => {
        openBtn.addEventListener('click', () => {
            if (menu.classList.contains(openSelector)) {
                menu.style.height = ''
                menu.classList.remove(openSelector)
            } else {
                menu.style.height = menu.scrollHeight + 'px'
                menu.classList.add(openSelector)
            }
        })
    }

    heandlerBurger(headerContactsBurger, headerContacts, 'header__contacts_open')
}