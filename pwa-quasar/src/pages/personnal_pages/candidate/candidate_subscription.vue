<template>
  <q-page class="flex flex-center">
  <img id="img_cathie" src="../../../assets/cathie.jpg" height="250px" width="250px"/>

<!-------------------------------------------------------------------------->

  <q-stepper ref="stepper" id="form_stepper" vertical="true">

    <!---------- Step: 0 ---------->

    <q-step default title="Olá">
      Oi !
      <br><br>
      Prazer em conhecê-lo, sou Jane, vamos começar?
      <q-stepper-navigation id="stepper_navbtn">
        <q-btn
          @click="knob_progress"
          label="Continuar"
        />
      </q-stepper-navigation>
    </q-step>

    <!---------- Step: 1 ---------->

    <q-step default title="Etapa 1" subtitle="Vamos começar">
      Bem-vindo ao EmpreGO, siga os próximos passos para completar seu perfil
      <q-stepper-navigation id="stepper_navbtn">
        <q-btn
          flat
          @click="knob_depression()"
          label="Voltar"
        />
        <q-btn
          @click="knob_progress"
          label="Continuar"
        />
      </q-stepper-navigation>
    </q-step>

    <!---------- Step: 2 ---------->

    <q-step title="Etapa 2">
      Desculpe, meus óculos caíram, eu vejo tudo borrado, desculpe-me, senhorita ou senhor ...?
      <br><br>
      <q-btn color="primary" push="true" label="Senhorita" class="course_btn" @click="which_gender('Mulher')"/>
      <q-btn color="primary" push="true" label="Senhor" class="course_btn"  @click="which_gender('Homem')"/>
      <q-stepper-navigation id="stepper_navbtn">
        <q-btn
          flat
          @click="knob_depression()"
          label="Voltar"
        />
      </q-stepper-navigation>
    </q-step>

    <!---------- Step: 3 ---------->

    <q-step title="Etapa 3">
      Como posso chamá-lo ?
      <br><br>
      <q-input v-model="candidate.fname" float-label="Nome" :error="$v.candidate.fname.$error" color="primary" class="stepper_elem"/>
      <br><br>
      <q-input v-model="candidate.lname" float-label="Sobrenome" :error="$v.candidate.lname.$error" @keyup.enter="validate_step3" color="primary" class="stepper_elem"/>
      <q-stepper-navigation id="stepper_navbtn">
        <q-btn
          flat
          @click="knob_depression()"
          label="Voltar"
        />
        <q-btn
          @click="validate_step3"
          label="Continuar"
        />
      </q-stepper-navigation>
    </q-step>

    <!---------- Step: 4 ---------->

    <q-step title="Etapa 4">
      Quando você nasceu ?
      <br><br>
       <q-datetime inverted color="primary" :first-day-of-week="1" v-model="candidate.birthdate" stack-label="Date" />
      <q-stepper-navigation id="stepper_navbtn">
        <q-btn
          flat
          @click="knob_depression()"
          label="Voltar"
        />
        <q-btn
          @click="knob_progress"
          label="Continuar"
        />
      </q-stepper-navigation>
    </q-step>

    <!---------- Step: 5 ---------->

    <q-step title="Etapa 5">
      Por favor, selecione seu curso
      <br><br>
      <q-btn color="primary" push="true" label="Ciência da Computação" class="course_btn" @click="which_course('Ciência da Computação')"/>
      <q-btn color="primary" push="true" label="Música" class="course_btn" @click="which_course('Música')"/>
      <q-btn color="primary" push="true" label="Medicina" class="course_btn" @click="which_course('Medicina')" />
      <br>
      <q-btn color="primary" push="true" label="Jornalismo" class="course_btn" @click="which_course('Jornalismo')"/>
      <q-btn color="primary" push="true" label="Psicologia" class="course_btn" @click="which_course('Psicologia')"/>
      <q-btn color="primary" push="true" label="Ciência de informação" class="course_btn" @click="which_course('Ciência de informação')"/>
      <q-stepper-navigation id="stepper_navbtn">
        <q-btn
          flat
          @click="knob_depression()"
          label="Voltar"
        />
      </q-stepper-navigation>
    </q-step>

    <!---------- Step: 6 ---------->

    <q-step title="Etapa 6">
      <br><br>
      Por favor me diga seu email, número de telefone, e CPF para finalizar a inscrição
      <br><br>
      <q-input v-model="candidate.email" float-label="Email" :error="$v.candidate.email.$error" color="primary" class="stepper_elem" />
      <br><br>
      <q-input v-model="candidate.phonenumber" float-label="Número de telefone" :error="$v.candidate.phonenumber.$error" color="primary" class="stepper_elem" />
      <br><br>
      <q-input v-model="candidate.cpf" float-label="CPF" :error="$v.candidate.cpf.$error" @keyup.enter="validate_step6" color="primary" class="stepper_elem" />
      <q-stepper-navigation id="stepper_navbtn">
        <q-btn
          flat
          @click="knob_depression()"
          label="Voltar"
        />
        <q-btn
          @click="validate_step6"
          label="Continuar"
        />
      </q-stepper-navigation>
    </q-step>

    <!---------- Step: 7 ---------->

    <q-step title="Etapa 7" subtitle="Quase acabando">
      Gostaria de escrever algumas palavras sobre você ?
      <br> Uma rápida descrição pessoal irá melhorar sua chance de ser visto por uma empresa
      <br> <br>
      <q-input v-model="candidate.description" inverted color="primary" @keyup.enter="validate_step7" float-label="Descrição" type="textarea" />
      <q-stepper-navigation id="stepper_navbtn">
        <q-btn
          flat
          @click="knob_depression()"
          label="Voltar"
        />
        <q-btn
          @click="validate_step7"
          label="Continuar"
        />
      </q-stepper-navigation>
    </q-step>

    <!---------- Step: 8 ---------->

    <q-step title="Etapa 8" subtitle="Verificação">
      <br>
      Por favor, verifique as seguintes informações e altere-as se estiverem erradas:
      <br><br>
      <q-input v-model="candidate.gender" float-label="Sexo" :error="$v.candidate.gender.$error" class="stepper_elem" />
      <br>
      <q-input v-model="candidate.fname" float-label="Nome" :error="$v.candidate.fname.$error" color="primary" class="stepper_elem"/>
      <br>
      <q-input v-model="candidate.lname" float-label="Sobrenome" :error="$v.candidate.lname.$error" color="primary" class="stepper_elem"/>
      <br>
      <q-datetime inverted color="primary" :first-day-of-week="1" v-model="candidate.birthdate" stack-label="Date" />
      <br>
      <q-input v-model="candidate.course" float-label="Curso" :error="$v.candidate.course.$error" color="primary" class="stepper_elem" />
      <br>
      <q-input v-model="candidate.email" float-label="Email" :error="$v.candidate.email.$error" color="primary" class="stepper_elem" />
      <br>
      <q-input v-model="candidate.phonenumber" float-label="Número de telefone" :error="$v.candidate.phonenumber.$error" color="primary" class="stepper_elem" />
      <br>
      <q-input v-model="candidate.cpf" float-label="CPF" :error="$v.candidate.cpf.$error" color="primary" class="stepper_elem" />
      <br>
      <q-input v-model="candidate.description" inverted color="primary" float-label="Descrição" type="textarea" />
      <q-stepper-navigation id="stepper_navbtn">
        <q-btn
          flat
          @click="knob_depression()"
          label="Voltar"
        />
        <q-btn
          @click="final_validation"
          label="Finalizar"
        />
      </q-stepper-navigation>
    </q-step>

    <!--
      Optional.

      "Globally" available Stepper navigation which means
      that it will be visible regardless of the current step.
      If we'd put QStepperNavigation under a QStep then we'd
      be using it for that step only.
    -->

  </q-stepper>

  </q-page>
</template>

<style>
</style>

<script>

const alerts = [
  { color: 'orange', message: 'Parabéns ! você se identificou', avatar: '../../../assets/first_achievement.png' },
  { color: 'orange', message: 'Falou um pouco sobre você', avatar: '../../../assets/second_achievement.png' },
  { color: 'orange', message: 'Concluir sua inscrição', avatar: '../../../assets/third_achievement.png' }
]

import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {

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
        birthdate: '',
        array_achievements: [3]
      },

    //--------------Candidate values--------------//

      knob_swap: "true"
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

  methods: {

    which_gender(_gender) {
      this.candidate.gender = _gender;
      this.knob_progress()
    },

    which_course(_course) {
      this.candidate.course = _course;
      this.knob_progress()
    },

    validate_step3 () { // nom de la fonction declanché dans le bouton faire des validation_step délcneché par lee bouton de l'étape relatif
      this.$v.candidate.fname.$touch()
      this.$v.candidate.lname.$touch()
      if (this.$v.candidate.fname.$error || this.$v.candidate.lname.$error) {
        this.$q.notify('Por favor verifique os campos')
      return true
      }

      this.showNotification('top-right', 0)
      this.Complete_achievements(0)
      this.knob_progress()
    },

    validate_step6 () {
      this.$v.candidate.email.$touch()
      this.$v.candidate.phonenumber.$touch()
      this.$v.candidate.cpf.$touch()
      if (this.$v.candidate.email.$error || this.$v.candidate.phonenumber.$error || this.$v.candidate.cpf.$error) {
        this.$q.notify('Por favor verifique os campos')
      return true
      }

      this.knob_progress()
    },

    validate_step7 ()
    {
      if (this.candidate.description.length > 20)
      {
        this.showNotification('top-right', 1)
        this.Complete_achievements(1)
      }

      this.knob_progress()
    },

    final_validation () {
      this.$v.candidate.fname.$touch()
      this.$v.candidate.lname.$touch()
      this.$v.candidate.email.$touch()
      this.$v.candidate.phonenumber.$touch()
      this.$v.candidate.cpf.$touch()
      this.$v.candidate.gender.$touch()
      this.$v.candidate.course.$touch()
      if ( this.$v.candidate.fname.$error || this.$v.candidate.lname.$error || this.$v.candidate.email.$error || this.$v.candidate.phonenumber.$error || this.$v.candidate.cpf.$error || this.$v.candidate.gender.$error || this.$v.candidate.course.$error ) {
        this.$q.notify('Por favor verifique os campos')
      return true
      }

      this.showNotification('top-right', 2)
      this.Complete_achievements(2)

      if (typeof(Storage) !== "undefined") {
              localStorage.setItem("myCandidate", JSON.stringify(this.candidate))
      } else {
        this.$q.notify('Sorry no webstorage supported')
      }

      this.$router.push('/candidate_profile')
    },

    knob_depression () {

      if (this.knob_swap == true)
      {
        this.$parent.$parent.$parent.knobvalue = this.$parent.$parent.$parent.knobvalue - 12
        this.knob_swap = false
      } else
      {
        this.$parent.$parent.$parent.knobvalue = this.$parent.$parent.$parent.knobvalue - 13
        this.knob_swap = true
      }
      this.$refs.stepper.previous()
    },

    knob_progress () {
      if (this.knob_swap == true)
      {
        this.$parent.$parent.$parent.knobvalue = this.$parent.$parent.$parent.knobvalue + 13
        this.knob_swap = false
      } else
      {
        this.$parent.$parent.$parent.knobvalue = this.$parent.$parent.$parent.knobvalue + 12
        this.knob_swap = true
      }
      this.$refs.stepper.next()
    },

    showNotification (position, id) {
      const { color, textColor, icon, message, avatar } = alerts[id]
      this.$q.notify({
        color,
        textColor,
        icon,
        message,
        position,
        avatar,
        /*
        actions: Math.random() * 100 > 50
          [ { label: 'Reply', handler: () => console.log('Clicked on a notification handler') }  ]
          : null, */
        timeout: 3000
      })
    },

    Complete_achievements (id)
    {
      this.candidate.array_achievements[id] = "true"
    }
  }
}

</script>
