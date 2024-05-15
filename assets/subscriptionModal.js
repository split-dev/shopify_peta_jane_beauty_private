class SubscriptionModal extends HTMLElement {
    constructor() {
        super();

        this.id = this.dataset.sectionId;

        this.names = {
            LOCAL_NAME: `${this.id}--isSubscribed`,
            SESSION_NAME: `${this.id}--subscriptionSession`
        }

        this.settings = {
            customerSubscibed: (localStorage.getItem(this.names.LOCAL_NAME) === 'true' || this.dataset.isCustomerSubscribed === 'true'),
            delay: parseFloat(this.dataset.delay) * 1000,
            isOncePerSession: (this.dataset.oncePerSession === 'true'),
            isPrevSession: (sessionStorage.getItem(this.names.SESSION_NAME) === 'true')
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
        if (this.selectors.close) {
            this.selectors.close.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.hide();
                });
            })
        }
        if (this.selectors.form) {
            this.selectors.form.addEventListener('submit', () => {
                this._subscribe();
            });
        }
    }
    _recordSession() {
        sessionStorage.setItem(this.names.SESSION_NAME, 'true')
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
        localStorage.setItem(this.names.LOCAL_NAME, 'true');
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
