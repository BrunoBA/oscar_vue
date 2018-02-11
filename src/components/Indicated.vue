<template>
    <div>
        <div class="movie">
            <img class="image" :src="path">
        </div>
        <div class="legend">
          <span class="title">{{ name }}</span>
        </div>
        <span class="sublegend">({{ translate }})</span>
    </div>
</template>

<script>
    export default {
        props:['name', 'path', 'translate']    
    }
</script>

<style scoped>
    
    .title {
        font-weight: 650;
    }    

    .image {
        width: 138px;
        height: 188px;
        cursor: pointer;
    }

    .legend {
        font-size: 12px;
        padding: 0px;
        text-align: center;
    }

    .sublegend {
        font-style: italic;
        font-size: 12px;
    }

</style>