import Vue from 'vue';

Vue.directive('my-select', {
    bind(el, binding, vnode){
        el.addEventListener('click', function(event){
            let sameClass = document.getElementsByClassName("selected");
            let quantity = sameClass.length;

            for (let j = 0; j < quantity; j++) {
                sameClass[j].classList.remove("selected");
            }

            this.classList.add("selected");
        });
    }
});