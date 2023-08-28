import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listImg = document.querySelector('.gallery')

const markupRender = (array, box) => {
    const markup = array.map((element) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src='${element.preview}'
                    data-source='${element.original}'
                    alt='${element.description}'
                />
            </a>
        </li>`).join('');
    box.insertAdjacentHTML("afterbegin", markup);
}

markupRender(galleryItems, listImg)

const onClickImg = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <div class="modal">
    <img src ='${event.target.dataset.source}'>
    </div>
`, {
    onShow: () => document.addEventListener("keydown", onPressEsc),
	onClose: () => document.removeEventListener("keydown", onPressEsc)
} );
    const onPressEsc = (event) => {
    if (event.code === 'Escape') {
        instance.close();
        // document.removeEventListener("keydown", onPressEsc);    
    }
}
    
    instance.show()
    // document.addEventListener("keydown", onPressEsc);
    
}

listImg.addEventListener("click", onClickImg);
