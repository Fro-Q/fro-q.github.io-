<script>
export default {
  mounted() {
    fetch('posts/posts.json')
    .then(response => response.json())
    .then(data => {
        const posts = data.posts;
        console.log(posts);

        const postContainer = document.querySelector('.main-content-container');

        for (let i = posts.length - 1; i >= 0; i--) {
            const postElement = document.createElement('div');
            postElement.classList.add('post-container');

            const postInfo = document.createElement('div');
            postInfo.classList.add('post-info');

            const postMetadata = document.createElement('div');
            postMetadata.classList.add('post-metadata');

            const dateElement = document.createElement('a');
            dateElement.classList.add('post-date');
            dateElement.textContent = posts[i].date;

            const titleElement = document.createElement('a');
            titleElement.textContent = posts[i].title;
            titleElement.setAttribute("class", "router-link-exact-active router-link-active");
            titleElement.classList.add('post-title');
            titleElement.setAttribute("href", posts[i].fileName);
            const infoContainerElement = document.createElement('div');
            infoContainerElement.classList.add('post-tag-container');

            for (let j = 0; j < posts[i].tags.length; j++) {
                const tagElement = document.createElement('a');
                tagElement.classList.add('post-tag');
                tagElement.textContent = posts[i].tags[j];
                infoContainerElement.appendChild(tagElement);
            }

            const abstractElement = document.createElement('div');
            abstractElement.classList.add('post-abstract');
            abstractElement.textContent = posts[i].abstract;

            postInfo.appendChild(titleElement);
            postInfo.appendChild(abstractElement);

            postElement.appendChild(postInfo);
            postMetadata.appendChild(dateElement);
            postMetadata.appendChild(infoContainerElement);
            postElement.appendChild(postMetadata);

            postContainer.appendChild(postElement);
        }
    });
  }
}
</script>

<style scoped>
</style>

<template>
    <div class="main-content-container">
        <div class="banner-container">
            <div class="banner">WELCOME</div>
        </div>
        <div class="text-container description-container">
            <div class="text description">Claro, no dudes en visitarme con regularidad para descubrir de qué estoy hablando~</div>
            <div class="text description">Come and read those shit~</div>
            <div class="text description">常来看看～</div>
        </div>
    </div>
</template>