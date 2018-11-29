<template>
  <q-page class="row justify-center">
  <div style="width: 500px; max-width: 90vw;">

<!-------------------------CHATBOT---------------------------->
  <div id="chatBot">
  <q-chat-message label='Hoje'/>
  </div>

    <q-chat-message
      name="Jane"
      avatar="../assets/cathie.jpg"
      :text="['Oi !']"
      stamp="1 minuto antes"
    />

    <q-chat-message
      name="Jane"
      avatar="../assets/cathie.jpg"
      :text="['Eu queria saber, você é um candidato ou uma empresa?']"
      stamp="1 minuto antes"
    >
      <q-btn color="primary" push="true" label="Candidato" class="course_btn" @click="$router.push('/candidate')"/>
      <q-btn color="primary" push="true" label="Empresa" class="course_btn" @click="$router.push('/company')" />
    </q-chat-message>

    </div>

  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',

    mounted : function()
    {
      localStorage.removeItem("myCandidate")
    }
}

</script>
