class NotificationView {
  constructor(selector, deleleSelector) {
    this.selector = selector;
    this.deleleSelector = deleleSelector;
  }

  renderNotification(txt, notificationType = 'success') {
    const template = `<div class="note   note-${notificationType}  position-relative">
                        <p>${txt}</p>
                        <button id=${this.deleleSelector} class='clear-button position-absolute top-0 end-0'>
                          <i class="fas fa-times"></i>
                        </button>
                      </div>`;
    document.querySelector(this.selector).insertAdjacentHTML('beforeend', template);
  }

  clearNotificationHtml() {
    document.querySelector(this.selector).innerHTML = '';
  }

  deleteNotificationEvent() {
    document.querySelector(`#${this.deleleSelector}`).addEventListener('click', () => {
      this.clearNotificationHtml();
    });
  }
}

export default NotificationView;
