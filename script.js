function showSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = 'none';
}

window.onscroll = function() {
    const goBackBtn = document.getElementById("goBackBtn")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goBackBtn.style.display = 'block';
    } else {
        goBackBtn.style.display = 'none';
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}