<template>
  <div>
    <v-container style="padding-bottom: 10px;">
      <v-row>
        <v-col cols="12" class="d-flex justify-end">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="height: calc(100vh - 160px); overflow-y: auto; padding-bottom: 10px;">
      <v-row>
        <v-col cols="12">
          <h2><strong>Was ist Space University?</strong></h2>
          <p>Space University ist eine Online-Plattform, die Bildungsressourcen und Kurse im Bereich der Weltraumwissenschaft und -technologie anbietet.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>Wie kann ich mich für einen Kurs anmelden?</strong></h2>
          <p>Sie können sich für einen Kurs anmelden, indem Sie den Bereich 'Kurse' besuchen, den Kurs auswählen, an dem Sie interessiert sind, und auf die Schaltfläche 'Anmelden' klicken.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>Sind die Kurse kostenlos?</strong></h2>
          <p>Einige Kurse sind kostenlos, während andere eine Gebühr erfordern können. Bitte überprüfen Sie die Kursdetails für weitere Informationen.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>Erhalte ich ein Zertifikat nach Abschluss eines Kurses?</strong></h2>
          <p>Ja, Sie erhalten ein Abschlusszertifikat für die meisten Kurse. Bitte überprüfen Sie die Kursdetails für weitere Informationen.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>Kann ich auf die Kurse offline zugreifen?</strong></h2>
          <p>Derzeit sind unsere Kurse nur online verfügbar. Wir arbeiten daran, in Zukunft einen Offline-Zugang zu ermöglichen.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>Wie kann ich mein Passwort zurücksetzen?</strong></h2>
          <p>Sie können Ihr Passwort zurücksetzen, indem Sie auf der Anmeldeseite auf den Link 'Passwort vergessen' klicken und den Anweisungen folgen.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>Wie kann ich den Support kontaktieren?</strong></h2>
          <p>Sie können unser Support-Team per E-Mail an support@spaceuniversity.com oder über das Kontaktformular auf unserer Website kontaktieren.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>Wie ist die Rückerstattungsrichtlinie?</strong></h2>
          <p>Wir bieten eine 30-tägige Rückerstattungsrichtlinie für die meisten Kurse an. Bitte überprüfen Sie die Kursdetails für weitere Informationen.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>Kann ich meinen Kurszugang mit anderen teilen?</strong></h2>
          <p>Nein, das Teilen Ihres Kurszugangs mit anderen verstößt gegen unsere Nutzungsbedingungen. Jeder Benutzer muss ein eigenes Konto haben.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>Wie kann ich meine Profilinformationen aktualisieren?</strong></h2>
          <p>Sie können Ihre Profilinformationen aktualisieren, indem Sie sich in Ihr Konto einloggen und zum Bereich 'Profil' navigieren.</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
};
</script>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>