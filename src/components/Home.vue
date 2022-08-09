<script setup lang="ts"></script>

<template>
  <div id="main" class="home">
    <div class="info-home">
      <div class="preview-temp">
        <div class="date-climate">
          <span class="degrees"> 08º </span>
        </div>
        <div class="date-climate">
          <span class="localization">London</span>
          <p>06:08 - Sunday, 6 Out 19</p>
        </div>
        <div class="date-climate">
          <span class="icon">icon</span>
          <p>Rain</p>
        </div>
      </div>
    </div>
    <div class="form"></div>
  </div>
</template>

<style scoped lang="stylus">

#main{

  display: flex;
    height: 100%;
      width: 100%;
}
  .info-home{
     width: 60%;
        height: 100%;

   }
   .info-home{
      display: flex;
        flex-direction: column;
          justify-content: flex-end;
            padding: 4rem;
              align-content: stretch;
                box-sizing: border-box;
   }

   .preview-temp{
      display:flex;
        width: 100%;
          height: 100px;
             align-items: center;
   }

    .degrees{
        font-size: 8rem;
    }

    .localization{
        font-size: 3.2rem;
    }

    .date-climate{
      align-items: baseline;
      margin-right: 1.2rem;
    }

  .form{
    height: 100%;
      width: 40%;
        min-width: 290px;
          background-color: rgba(0,0,0,0.4);
            backdrop-filter: blur(7px);
  }
</style>
