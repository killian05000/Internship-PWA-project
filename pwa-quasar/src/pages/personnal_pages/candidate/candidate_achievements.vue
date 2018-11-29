<template>
  <q-page class="flex flex-center">


      <img :class="img_achiev1" :src="achiev1_path" alt="First achievement" width="80" height="80">
    <div :class="achiev1">
      <p :class="text_achiev1">Se identificou</p>
    </div>

    <br><br>

      <img :class="img_achiev2" :src="achiev2_path" alt="Second achievement" width="80" height="80">
    <div :class="achiev2">
      <p :class="text_achiev2">Falou um pouco sobre você</p>
    </div>

    <br><br>

      <img :class="img_achiev3" :src="achiev3_path" alt="Third achievement" width="80" height="80">
    <div :class="achiev3">
      <p :class="text_achiev3">Concluir sua inscrição</p>
    </div>

  </q-page>
</template>

<style>
</style>

<script>


export default {
  data () {
    return {

      //--------------Components values--------------//

        achiev1_path: '../../../assets/first_achievement-bw.png',
        achiev2_path: '../../../assets/second_achievement-bw.png',
        achiev3_path: '../../../assets/third_achievement-bw.png',

        img_achiev1: 'img_achiev_todo',
        achiev1: 'achiev_todo',
        text_achiev1: 'text_achiev_todo',

        img_achiev2: 'img_achiev_todo',
        achiev2: 'achiev_todo',
        text_achiev2: 'text_achiev_todo',

        img_achiev3: 'img_achiev_todo',
        achiev3: 'achiev_todo',
        text_achiev3: 'text_achiev_todo'

      //--------------Components values--------------//
    }
  },

  mounted: function() {
    let variable = localStorage.getItem("myCandidate")
    let vcandidate = JSON.parse(variable)

    if (vcandidate.array_achievements[0] == "true")
    {
      this.achiev1_path = '../../../assets/first_achievement.png'
      this.img_achiev1 = 'img_achiev_done'
      this.achiev1 = 'achiev_done'
      this.text_achiev1 = 'text_achiev_done'
    }
    else
    {
      this.achiev1_path ='../../../assets/first_achievement-bw.png'
      this.img_achiev1 = 'img_achiev_todo'
      this.achiev1 = 'achiev_todo'
      this.text_achiev1 = 'text_achiev_todo'
    }

      //------------------

    if (vcandidate.array_achievements[1] == "true")
    {
      this.achiev2_path = '../../../assets/second_achievement.png'
      this.img_achiev2 = 'img_achiev_done'
      this.achiev2 = 'achiev_done'
      this.text_achiev2 = 'text_achiev_done'
    }
    else
    {
      this.achiev2_path = '../../../assets/second_achievement-bw.png'
      this.img_achiev2 = 'img_achiev_todo'
      this.achiev2 = 'achiev_todo'
      this.text_achiev2 = 'text_achiev_todo'
    }

      //------------------

    if (vcandidate.array_achievements[2] == "true")
    {
      this.achiev3_path = '../../../assets/third_achievement.png'
      this.img_achiev3 = 'img_achiev_done'
      this.achiev3 = 'achiev_done'
      this.text_achiev3 = 'text_achiev_done'
      console.log("BAAAAAAAAAAAAAAAAAAAAAAAAAAAM")
    }
    else
    {
      this.achiev3_path = '../../../assets/third_achievement-bw.png'
      this.img_achiev3 = 'img_achiev_todo'
      this.achiev3 = 'achiev_todo'
      this.text_achiev3 = 'text_achiev_todo'
    }
  }
}
</script>
