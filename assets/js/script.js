var currentView = 1;

function showView(viewNumber) {
    var currentViewElement = document.getElementById('view' + currentView);
    currentViewElement.style.display = 'none';

    var selectedViewElement = document.getElementById('view' + viewNumber);
    selectedViewElement.style.display = 'block';

    if (viewNumber === 2) {
        document.getElementById('view2').style.display = 'block';
        document.getElementById('view1').style.display = 'none';

        document.getElementById('searchInput').value = '';
    } else if (viewNumber === 3) {
        document.getElementById('view3').style.display = 'block';
        document.getElementById('view1').style.display = 'none';
        document.getElementById('view2').style.display = 'none';
    } else if (viewNumber === 4) {
        document.getElementById('view4').style.display = 'block';
        document.getElementById('view3').style.display = 'none';
        document.getElementById('view2').style.display = 'none';
        document.getElementById('view1').style.display = 'none';
    }

    currentView = viewNumber;
}



var fullimgbox = document.getElementById("fullimgbox");
var fullimg = document.getElementById("fullimg")

function openfullimg(pic) {
    fullimgbox.style.display = "flex";
    fullimg.src = pic;
}

function closefullimg() {
    fullimgbox.style.display = "none";
}

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const images = document.querySelectorAll('.card img');

    images.forEach(image => {
        const imageId = image.id.toLowerCase();
        if (imageId.includes(searchQuery)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    document.getElementById('view2').style.display = 'none';
    document.getElementById('view1').style.display = 'block';

});


document.getElementById('games').addEventListener('click', function (event) {
    event.preventDefault();
    const gameId = this.id;
    document.getElementById('searchInput').value = gameId;
    const submitEvent = new Event('submit', {
        bubbles: true,
        cancelable: true,
    });
    document.getElementById('searchForm').dispatchEvent(submitEvent);
});
document.getElementById('cars').addEventListener('click', function (event) {
    event.preventDefault();
    const gameId = this.id;
    document.getElementById('searchInput').value = gameId;
    const submitEvent = new Event('submit', {
        bubbles: true,
        cancelable: true,
    });
    document.getElementById('searchForm').dispatchEvent(submitEvent);
});

var images = [
    "assets/images/Pictures/image1.jpg",
    "assets/images/Pictures/image2.jpg",
    "assets/images/Pictures/image3.jpg",
    "assets/images/Pictures/image4.png",
    "assets/images/Pictures/image5.jpg",
    "assets/images/Pictures/image6.png",
    "assets/images/Pictures/image7.jpeg",
    "assets/images/Pictures/image8.png",
    "assets/images/Pictures/image9.jpeg",
    "assets/images/Pictures/image10.png",
    "assets/images/Pictures/image11.jpg",
    "assets/images/Pictures/image12.png",
    "assets/images/Pictures/image13.jpeg",
    "assets/images/Pictures/image14.jpg",
    "assets/images/Pictures/image15.jpg",
    "assets/images/Pictures/image16.jpeg",
    "assets/images/Pictures/image17.jpeg",
    "assets/images/Pictures/image18.png",
    "assets/images/Pictures/image19.jpg",
    "assets/images/Pictures/image20.jpg",
    "assets/images/Pictures/image21.jpg",
    "assets/images/Pictures/image22.jpg",
    "assets/images/Pictures/image23.png",
    "assets/images/Pictures/image24.png",
    "assets/images/Pictures/image25.png"

];

var imgElement = document.getElementById('fullimg');

var currentImageIndex = 0;

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgElement.src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentImageIndex];
}
