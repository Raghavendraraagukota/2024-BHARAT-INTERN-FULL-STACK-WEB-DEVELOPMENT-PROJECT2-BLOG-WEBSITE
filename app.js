document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById('bg-overlay');
    const contentWrapper = document.getElementById('content-wrapper');
    const blogTitle = document.getElementById('blog-title');
    const writeBlogForm = document.getElementById('write-blog-form');
    const publishBtn = document.getElementById('publish-btn');
    const successMessage = document.getElementById('success-message');
    const blogForm = document.getElementById('blog-form');

    overlay.addEventListener('animationend', function () {
        overlay.style.display = 'none';
        contentWrapper.style.opacity = '1';
    });

    setTimeout(function () {
        overlay.style.animationPlayState = 'running';
    }, 500);

    const writeBlogBtn = document.getElementById('write-blog-btn');
    const readBlogBtn = document.getElementById('read-blog-btn');
    const latestBlogs = document.getElementById('latest-blogs');

    writeBlogBtn.addEventListener('click', function (event) {
        event.preventDefault();
        writeBlogForm.style.display = 'block';
        blogTitle.style.marginTop = '0';
        successMessage.style.display = 'none';
    });

    readBlogBtn.addEventListener('click', function (event) {
        event.preventDefault();
        latestBlogs.innerHTML = '';
        window.location.href = "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj6wK3y59iEAxVy3hYFHQ8UDU0YABAAGgJ0bA&ase=2&gclid=EAIaIQobChMI-sCt8ufYhAMVct4WBR0PFA1NEAAYAiAAEgKXg_D_BwE&ohost=www.google.com&cid=CAASJeRooHAzWIOQPwPAyNwar2OdsLOrzzYBc2MVqEv4sDLxkOcG9ds&sig=AOD64_1npOVDdV8ptBBAHjVBbicJTQkNcw&q&nis=4&adurl&ved=2ahUKEwiZ9Kjy59iEAxUXavUHHeYFA3oQ0Qx6BAgCEAM";
    });

    publishBtn.addEventListener('click', function () {
        // Check if the form is valid
        if (blogForm.checkValidity()) {
            successMessage.innerHTML = 'Publish Completed Successfully!';
            successMessage.style.display = 'block';
            writeBlogForm.style.display = 'none';

            // Here, you can send the form data to the server if needed

            // Reset the form
            blogForm.reset();
        }
    });
});
