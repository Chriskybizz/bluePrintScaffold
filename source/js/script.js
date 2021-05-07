const getFooterLeft = () => {
    const leftPhoneTel = document.createElement('span')
    leftPhoneTel.textContent = "TEL: "

    const leftPhonePhone = document.createElement('a')
    leftPhonePhone.setAttribute('href', 'tel:07792422854')
    leftPhonePhone.textContent = "07792 422 854"

    const leftPhone = document.createElement('p')
    leftPhone.appendChild(leftPhoneTel)
    leftPhone.appendChild(leftPhonePhone)


    const leftTitle = document.createElement('h4')
    leftTitle.textContent = "Blueprint Scaffolding"

    const leftEnquire = document.createElement('p')
    leftEnquire.textContent = "Enquiries"

    const leftFooter = document.createElement('div')
    leftFooter.setAttribute('class', 'column contact');
    leftFooter.appendChild(leftTitle)
    leftFooter.appendChild(leftEnquire)
    leftFooter.appendChild(leftPhone)

    return leftFooter
}

const getFooterRight = () => {

    const k = document.createElement('span')
    k.textContent = "K"
    const k2 = document.createElement('sup')
    k2.textContent = "2"
    const a = document.createElement('a')
    a.setAttribute('href', '#')
    a.appendChild(k)
    a.appendChild(k2)

    const p = document.createElement('p')
    p.textContent = "© 2021 by Blueprint Scaffolding. Created by "
    p.appendChild(a)

    const rightFooter = document.createElement('div')
    rightFooter.setAttribute('class', 'row');
    rightFooter.appendChild(p)

    return rightFooter
}

class StaticFooter extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }
    connectedCallback() {
        const footer = document.createElement('div');
        footer.setAttribute('class', 'footer');
        footer.append(getFooterLeft());
        footer.append(getFooterRight());

        this.appendChild(footer)

    }
}

class Feature extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }
    connectedCallback() {
        const footer = document.createElement('div');
        footer.setAttribute('class', 'footer');
        footer.append(getFooterLeft());
        footer.append(getFooterRight());

        this.appendChild(footer)

    }
}

customElements.define('app-static-footer', StaticFooter);
customElements.define('app-feature', Feature);
