class SaleModal extends HTMLElement {
    constructor() {
        super();

        this.settings = {
            customerSubscibed: (localStorage.getItem('isSubscribed') === 'true' || this.dataset.isCustomerSubscribed === 'true'),
            delay: parseFloat(this.dataset.delay) * 1000,
            isOncePerSession: (this.dataset.oncePerSession === 'true'),
            isPrevSession: (sessionStorage.getItem('subscriptionSession') === 'true')
        }
        this.selectors = {
            close: this.querySelectorAll('[data-modal-close]'),
            form: this.querySelector('form')
        }

        // If customer was subscribed
        if (this.settings.customerSubscibed) return;

        // If was session
        if (this.settings.isOncePerSession && this.settings.isPrevSession) return;

        this.show = this.show.bind(this);
        this._bindEvents = this._bindEvents.bind(this);

        this._init();
    }
    _bindEvents() {
        this.selectors.close.forEach(btn => {
            btn.addEventListener('click', () => {
                this.hide();
            });
        })
        this.selectors.form.addEventListener('submit', () => {
            this._subscribe();
        });
    }
    _recordSession() {
        sessionStorage.setItem('subscriptionSession', 'true')
    }
    hide() {
        this.classList.remove('reveal');

        if (!this.settings.isOncePerSession) return;
        this._recordSession();
    }
    show() {
        this.classList.add('reveal');
    }
    _subscribe() {
        localStorage.setItem('isSubscribed', 'true');
    }
    _init() {
        this.classList.remove('d-none');

        this._bindEvents();

        setTimeout(() => {
            this.show();
        }, this.settings.delay);
    }
}
customElements.define('subscripton-modal', SubscriptionModal);
/*customElements.define('sale-modal', SaleModal);*/ /*?*/
// Vladislav
