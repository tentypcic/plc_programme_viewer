let links = document.querySelectorAll('.menu a');
let viewer = document.querySelector('#pdfViewer');
viewer.setAttribute('src', 'default.html');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = e.target.getAttribute('href');
        viewer.setAttribute('src', href);

        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

let toggleGroups = document.querySelectorAll('.group');

toggleGroups.forEach(toggleGroup => {
    let submenu = toggleGroup.querySelector('.submenu');
    let submenuItems = toggleGroup.querySelectorAll('.submenu li');
    let groupImage = toggleGroup.querySelector('img');

    toggleGroup.addEventListener('click', function(e) {
        e.preventDefault();
        if (submenu.style.display === "none") {
            submenu.style.display = "block";
            submenuItems.forEach(item => item.style.display = "block");
            groupImage.src = "images/group_active.png"; // Path to your other image
        } else {
            submenu.style.display = "none";
            submenuItems.forEach(item => item.style.display = "none");
            groupImage.src = "images/group.png"; // Path to your default image
        }
    });

    submenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
});
