import { gsap } from 'gsap';
import { getElement, appInit } from '.';

const mediaSizes = () => {
    if(window.matchMedia('(min-width: 1000px)').matches) {
        desktopAnimation();
    } else {
        mobileAnimation();
    }
}

const mobileAnimation = () => {
    let backBtn = getElement('.back-to-form');
    const timeline= gsap.timeline({
        defaults: {
            duration: 0.7,
            ease: 'Sine. easeInOut'
        }
    })

    document.getElementsByTagName('body')[0].scrollIntoView({behavior: 'smooth'});
    getElement('.welcome__name').innerText = getElement('.form__name').value;

    timeline
        .to('.information__title', {
            scale: 0,
        })
        .to('.information__text', {
            scale: 0,
        }, '<0.2')
        .to('.promotion-container', {
            scale: 0,
        }, '<0.2')
        .to('.form-container',  {
            y: '-50%',
        }, '<0.2')
        .to('.form', {
            opacity: 0,
        })
        .to('.form', {
            display:'none',
            duration: 0
        })
        .to('.welcome', {
            display: 'block',
        }, '<0')
        .to('.welcome', {
            scale: 1
        }) 

        backBtn.addEventListener('click', (e) => {
            e.target.blur();
            appInit()
            
            const reverseTimeline = gsap.timeline({
                defaults: {
                    duration: 0.7,
                    ease: 'Sine. easeInOut'
                }
            })

            reverseTimeline
                .to('.welcome', {
                    scale: 0
                })
                .to('.welcome', {
                    display: 'none',
                }, '<0')
                .to('.form', {
                    display:'block',
                    duration: 0
                })
                .to('.form', {
                    opacity: 1,
                })
                .to('.form-container',  {
                    y: '0%',
                }, '<0.2')
                .to('.promotion-container', {
                    scale: 1,
                }, '<0.2')
                .to('.information__text', {
                    scale: 1,
                }, '<0.2')
                .to('.information__title', {
                    scale: 1,
                })
        })
}

const desktopAnimation = () => {
    let backBtn = getElement('.back-to-form');
    const timeline2 = gsap.timeline({
        defaults: {
            duration: 0.7,
            ease: 'Sine. easeInOut'
        }
    })

    getElement('.welcome__name').innerText = getElement('.form__name').value;

    timeline2 
        .to('.information__title', {
            scale: 0,
        })
        .to('.information__text', {
            scale: 0,
        }, '<0.2')
        .to('.promotion-container', {
            scale: 0,
        }, '<0.2')
        .to('.form-container',  {
            x: '-60%',
        }, '<0.2')
        .to('.form', {
            opacity: 0,
        })
        .to('.form', {
            display:'none',
            duration: 0
        })
        .to('.welcome', {
            display: 'block',
        }, '<0')
        .to('.welcome', {
            scale: 1
        }) 

    backBtn.addEventListener('click', function(e) {
        e.target.blur();
        appInit();

        const reverseTimeline = gsap.timeline({
            defaults: {
                duration: 0.7,
                ease: 'Sine. easeInOut'
            }
        })

        reverseTimeline
            .to('.welcome', {
                scale: 0
            })
            .to('.welcome',  {
                display: 'none',
                duration: 0
            })
            .to('.form', {
                display: 'block'
            }, '<0')
            .to('.form', {
                opacity: 1
            })
            .to('.form-container',  {
                x: '0',
            }, '<0.2')
            .to('.promotion-container', {
                scale: 1,
            }, '<0.2')
            .to('.information__title', {
                scale: 1,
            })
            .to('.information__text', {
                scale: 1,
            }, '<0.2')
    })
}



export {
    mediaSizes
}