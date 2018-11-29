<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="warning"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >

      <!--
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
        -->

        <q-toolbar-title>
          Empresa
          <div slot="subtitle">Bem-vindo ao EmpreGO</div>
        </q-toolbar-title>
        <q-knob id="knob"
              color="light-green-14"
              size="4em"
              v-model="knobvalue"
              readonly="true"
              :min="min"
              :max="max"
        />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >

      <!--------List---------->

      <q-list no-border link inset-delimiter>

        <q-list-header id="listheader">Informações</q-list-header>
        <q-item @click.native="$router.push('/company_profile')">
          <q-item-side icon="record_voice_over"/>
          <q-item-main label="Perfil"/>
        </q-item>

        <!--
        <q-item @click.native="$router.push('/company_achievements')">
          <q-item-side icon="record_voice_over"/>
          <q-item-main label="Achievements"/>
        </q-item>
        -->

        <q-item @click.native="openURL('https://gitlab.com/dci-informacao-tecnologia/intership-pwa-project')">
          <q-item-side icon="code"/>
          <q-item-main label="Github"/>
        </q-item>

        <q-item @click.native="openURL('http://editora.ufs.br/pagina/2031')">
          <q-item-side icon="school"/>
          <q-item-main label="UFS"/>
        </q-item>

      </q-list>

      <!--------List---------->

    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      knobvalue: 0,
      min: 0,
      max: 100,
      lazy: 50
    }
  },

  methods: {
    openURL
  }
}
</script>

<style>
</style>
