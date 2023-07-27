(() => {

    const $elm = document.getElementById('link');
    const $trigger = $elm.getElementsByTagName('a');
    const $content = $trigger[0].nextElementSibling;

   //$content.style.display = "none";
   console.log($content);
    

    const clickhandler = (e) => {
        e.preventDefault();
        console.log('Clicked');
    };

    $trigger[0].addEventListener('click', clickhandler);

})();