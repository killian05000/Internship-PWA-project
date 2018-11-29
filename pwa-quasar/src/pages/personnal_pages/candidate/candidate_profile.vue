<template>
  <q-page class="flex flex-center">
  <img id="img_cathie" src="../../../assets/cathie.jpg" height="250px" width="250px"/>

<!-------------------------------------------------------------------------->

        <div id=profile>
         <q-input v-model="candidate.gender" float-label="Sexo" :error="$v.candidate.gender.$error" class="profile_form_elem" />
         <br>
         <q-input v-model="candidate.fname" float-label="Nome" :error="$v.candidate.fname.$error" color="primary" class="profile_form_elem"/>
         <br>
         <q-input v-model="candidate.lname" float-label="Sobrenome" :error="$v.candidate.lname.$error" color="primary" class="profile_form_elem"/>
         <br>
         <q-datetime inverted color="primary" :first-day-of-week="1" v-model="candidate.birthdate" stack-label="Date" />
         <br>
         <q-input v-model="candidate.course" float-label="Curso" :error="$v.candidate.course.$error" color="primary" class="profile_form_elem" />
         <br>
         <q-input v-model="candidate.email" float-label="Email" :error="$v.candidate.email.$error" color="primary" class="profile_form_elem" />
         <br>
         <q-input v-model="candidate.phonenumber" float-label="Número de telefone" :error="$v.candidate.phonenumber.$error" color="primary" class="profile_form_elem" />
         <br>
         <q-input v-model="candidate.cpf" float-label="CPF" :error="$v.candidate.cpf.$error" color="primary" class="profile_form_elem" />
         <br>
         <q-input v-model="candidate.description" inverted color="primary" float-label="Descrição" type="textarea" />
       </div>
<!------------------------------------------------------------------------->

  </q-page>
</template>

<style>
</style>

<script>

import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {

      //--------------Components values--------------//

        datevalue: '2000-10-24',
        monthvalue: '',
        yearvalue: '',

      //--------------Components values--------------//

      //--------------Candidate values--------------//

        candidate: {
          gender: '',
          fname: '',
          lname: '',
          course: '',
          cpf: '',
          email: '',
          phonenumber: '',
          description: '',
          birthdate: ''
        }

      //--------------Candidate values--------------//
    }
  },

   validations: {
     candidate: {
       gender: {required },
       fname: { required },
       lname: { required },
       course: { required },
       cpf: { required },
       email: { required, email },
       phonenumber: { required }
     }
   },

  mounted: function() {
    let variable = localStorage.getItem("myCandidate")
    let vcandidate = JSON.parse(variable)
    this.candidate.gender = vcandidate.gender
    this.candidate.fname = vcandidate.fname
    this.candidate.lname = vcandidate.lname
    this.candidate.course = vcandidate.course
    this.candidate.cpf = vcandidate.cpf
    this.candidate.email = vcandidate.email
    this.candidate.phonenumber = vcandidate.phonenumber
    this.candidate.description = vcandidate.description
    this.candidate.birthdate = vcandidate.birthdate
  }
}
</script>
