const validationModal = (mainEventListener, btnSelector, elemSelectorWidth,elemSelectorHeight, event, checkboxSelector) => {
    const btn = document.querySelector(btnSelector),
          mainEvent = document.querySelectorAll(mainEventListener),
          widthElem = document.querySelector(elemSelectorWidth),
          heightElem = document.querySelector(elemSelectorHeight);

        btn.setAttribute('disabled', true);

        mainEvent.forEach (item => {
            item.addEventListener(event, () => {
                if (widthElem.value != '' && heightElem.value != '') {
                    btn.removeAttribute('disabled', true);
                }
            });
        });
};

export default validationModal;