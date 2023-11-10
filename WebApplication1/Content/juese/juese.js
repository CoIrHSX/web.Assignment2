<script>
// 当文档加载完毕时执行
    document.addEventListener('DOMContentLoaded', function() {

    var filter = document.getElementById('role-filter');
    var characters = document.getElementsByClassName('character-item');
    filter.addEventListener('change', function() {
        var selectedCategory = this.value;

    Array.from(characters).forEach(function(character) {
            if (selectedCategory === 'all' || character.getAttribute('data-category') === selectedCategory) {
        character.classList.remove('hidden');
            } else {
        character.classList.add('hidden');
            }
        });
    });
});
</script>