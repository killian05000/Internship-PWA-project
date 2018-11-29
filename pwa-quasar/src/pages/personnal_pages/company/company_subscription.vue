<template>
  <q-page class="flex flex-center">
  <img id="img_cathie" src="../../../assets/cathie.jpg" height="250px" width="250px"/>

<!-------------------------------------------------------------------------->

  <q-stepper ref="stepper" id="form_stepper" vertical="true" color="warning">

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
      Qual é o nome de sua empresa ?
      <br><br>
      <q-input v-model="company.name" float-label="Nome" :error="$v.company.name.$error"  @keyup.enter="validate_step2" color="warning" class="stepper_elem" />
      <q-stepper-navigation id="stepper_navbtn"
        <q-btn
          flat
          @click="knob_depression()"
          label="Voltar"
        />
        <q-btn
          @click="validate_step2"
          label="Continuar"
        />
      </q-stepper-navigation>
    </q-step>

    <!---------- Step: 3 ---------->

    <q-step title="Etapa 3">
      Em qual área você quer recrutar :
      <br>
      <br>
      <q-btn color="warning" push="true" label="Ciência da Computação" class="course_btn" @click="which_area('Ciência da Computação')"/>
      <q-btn color="warning" push="true" label="Música" class="course_btn" @click="which_area('Música')"/>
      <q-btn color="warning" push="true" label="Medicina" class="course_btn" @click="which_area('Medicina')" />
      <br>
      <q-btn color="warning" push="true" label="Jornalismo" class="course_btn" @click="which_area('Jornalismo')"/>
      <q-btn color="warning" push="true" label="Psicologia" class="course_btn" @click="which_area('Psicologia')"/>
      <q-btn color="warning" push="true" label="Ciência de informação" class="course_btn" @click="which_area('Ciência de informação')"/>
      <q-stepper-navigation id="stepper_navbtn">
        <q-btn
          flat
          @click="knob_depression()"
          label="Voltar"
        />
      </q-stepper-navigation>
    </q-step>

    <!---------- Step: 4 ---------->

    <q-step title="Etapa 4">
      Por favor, preencha o endereço da sua sede:
      <br><br>
      <q-input v-model="company.zipcode" float-label="Código postal" :error="$v.company.zipcode.$error" color="warning" class="stepper_elem" />
      <br><br>
      <q-input v-model="company.city" float-label="Cidade" :error="$v.company.city.$error" color="warning" class="stepper_elem" />
      <br><br>
      <q-input v-model="company.street" float-label="Rua" :error="$v.company.street.$error" color="warning" @keyup.enter="validate_step4" class="stepper_elem" />
      <q-stepper-navigation id="stepper_navbtn">
        <q-btn
          flat
          @click="knob_depression()"
          label="Voltar"
        />
        <q-btn
          @click="validate_step4"
          label="Continuar"
        />
      </q-stepper-navigation>
    </q-step>

    <!---------- Step: 5 ---------->

    <q-step title="Etapa 5">
      Se você tem um site, um email ou número de telefone, você pode providenciar aqui
      <br><br>
      <q-input v-model="company.website" float-label="Site" :error="$v.company.website.$error" color="warning" class="stepper_elem" />
      <br><br>
      <q-input v-model="company.email" float-label="Email" :error="$v.company.email.$error" color="warning" class="stepper_elem" />
      <br><br>
      <q-input v-model="company.phonenumber" float-label="Número de telefone" :error="$v.company.phonenumber.$error" @keyup.enter="validate_step5" color="warning" class="stepper_elem" />
      <q-stepper-navigation id="stepper_navbtn">
        <q-btn
          flat
          @click="knob_depression()"
          label="Voltar"
        />
        <q-btn
          @click="validate_step5"
          label="Continuar"
        />
      </q-stepper-navigation>
    </q-step>

    <!---------- Step: 6 ---------->

    <q-step title="Etapa 6" subtitle="Verificação">
      <br>
      Por favor, verifique as seguintes informações e altere-as se estiverem erradas:
      <br><br>
      <q-input v-model="company.name" float-label="Nome" :error="$v.company.name.$error" color="warning" class="stepper_elem" />
      <br>
      <q-input v-model="company.area" float-label="Area" :error="$v.company.area.$error" color="warning" class="stepper_elem" />
      <br>
      <q-input v-model="company.zipcode" float-label="Código postal" :error="$v.company.zipcode.$error" color="warning" class="stepper_elem" />
      <br>
      <q-input v-model="company.city" float-label="Cidade" :error="$v.company.city.$error" color="warning" class="stepper_elem" />
      <br>
      <q-input v-model="company.street" float-label="Rua" :error="$v.company.street.$error" color="warning" class="stepper_elem" />
      <br>
      <q-input v-model="company.website" float-label="Site" :error="$v.company.website.$error" color="warning" class="stepper_elem" />
      <br>
      <q-input v-model="company.email" float-label="Email" :error="$v.company.email.$error" color="warning" class="stepper_elem" />
      <br>
      <q-input v-model="company.phonenumber" float-label="Número de telefone" :error="$v.company.phonenumber.$error" color="warning" class="stepper_elem" />
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

  </q-stepper>

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

    //--------------Company values--------------//

      company: {
        name: '',
        area: '',
        zipcode: '',
        city: '',
        street: '',
        website: '',
        email: '',
        phonenumber: ''
      }

    //--------------Company values--------------//

    }
  },

  validations: {
    company: {
      name: {required },
      area: { required },
      zipcode: { required },
      city: { required },
      street: { required },
      website: { required },
      email: { required, email },
      phonenumber: { required }
      }
    },

  methods: {

    which_area(_area) {
      this.company.area = _area;
      this.knob_progress()
    },

    validate_step2 () {
      this.$v.company.name.$touch()
      if (this.$v.company.name.$error) {
        this.$q.notify('Por favor verifique os campos')
        return true
      }

      this.knob_progress()
    },

    validate_step4 () {
      this.$v.company.zipcode.$touch()
      this.$v.company.city.$touch()
      this.$v.company.street.$touch()
      if (this.$v.company.zipcode.$error || this.$v.company.city.$error || this.$v.company.street.$error) {
        this.$q.notify('Por favor verifique os campos')
        return true
      }

      this.knob_progress()
    },

    validate_step5 () {
      this.$v.company.website.$touch()
      this.$v.company.email.$touch()
      this.$v.company.phonenumber.$touch()
      if (this.$v.company.website.$error || this.$v.company.email.$error || this.$v.company.phonenumber.$error) {
        this.$q.notify('Por favor verifique os campos')
        return true
      }

      this.knob_progress()
    },

    final_validation () {
      this.$v.company.name.$touch()
      this.$v.company.area.$touch()
      this.$v.company.zipcode.$touch()
      this.$v.company.city.$touch()
      this.$v.company.street.$touch()
      this.$v.company.website.$touch()
      this.$v.company.email.$touch()
      this.$v.company.phonenumber.$touch()
      if (this.$v.company.name.$error || this.$v.company.area.$error || this.$v.company.zipcode.$error || this.$v.company.city.$error || this.$v.company.city.$error || this.$v.company.website.$error || this.$v.company.email.$error || this.$v.company.phonenumber.$error) {
        this.$q.notify('Por favor verifique os campos')
        return true
      }

      if (typeof(Storage) !== "undefined") {
              localStorage.setItem("myCompany", JSON.stringify(this.company))
      } else {
        this.$q.notify('Sorry no webstorage supported')
      }

      this.$router.push('/company_profile')
    },

    knob_depression () {
      this.$parent.$parent.$parent.knobvalue = this.$parent.$parent.$parent.knobvalue - 17
      this.$refs.stepper.previous()
    },

    knob_progress () {
      this.$parent.$parent.$parent.knobvalue = this.$parent.$parent.$parent.knobvalue + 17
      this.$refs.stepper.next()
    }
  }
}
</script>
