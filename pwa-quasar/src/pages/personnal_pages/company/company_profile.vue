<template>
  <q-page class="flex flex-center">
  <img id="img_cathie" src="../../../assets/cathie.jpg" height="250px" width="250px"/>

<!-------------------------------------------------------------------------->

      <div>
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

      //--------------company values--------------//

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

  mounted: function() {
    let variable = localStorage.getItem("myCompany")
    let vcompany = JSON.parse(variable)
    this.company.name = vcompany.name
    this.company.area = vcompany.area
    this.company.zipcode = vcompany.zipcode
     this.company.city = vcompany.city
     this.company.street = vcompany.street
    this.company.email = vcompany.email
    this.company.phonenumber = vcompany.phonenumber
    this.company.website = vcompany.website
  }
}
</script>
