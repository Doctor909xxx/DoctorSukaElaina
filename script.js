<script>
    setTimeout(() => {
        document.querySelector('.intro').style.opacity = '0';
        setTimeout(() => { document.querySelector('.intro').style.display = 'none'; }, 2000);
        document.querySelector('.container').style.opacity = '1';
    }, 2000);
</script>
