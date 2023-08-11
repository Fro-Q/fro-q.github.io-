<script>
export default {
    mounted() {
        console.log('Loading tags...');
        fetch('tags/tags.json')
            .then(response => response.json())
            .then(tags => {
                const tagLinksContainer = document.getElementsByClassName('sidebar-right-content-container')[0];
                tags.forEach(tag => {
                    const tagLink = document.createElement('div');
                    tagLink.className = 'sidebar-right-content sidebar-content';
                    tagLink.textContent = `${tag.name} (${tag.count})`;
                    tagLinksContainer.appendChild(tagLink);
                });
            })
            .catch(error => console.error('Error fetching tags:', error));
    }
}
</script>

<style>

</style>

<template>
    <div class="sidebar sidebar-right">
        <div class="sidebar-content-container sidebar-right-content-container">
            <div class="sidebar-content sidebar-right-content sidebar-title">Tags</div>
        </div>
    </div>
</template>