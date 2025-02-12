<!-- filepath: /c:/xampp/htdocs/SpaceUniversity/src/components/study/Courses.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="space-between">
          <v-col cols="12" md="4">
            <v-select
              :items="sortOptions"
              label="Sortieren nach"
              v-model="selectedSortOption"
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Suche"
              v-model="searchQuery"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div v-if="state.role.name === 'STUDENT'">
      <v-row>
        <v-col
          v-for="course in sortedCourses"
          :key="course.title"
          cols="12"
          md="4"
        >
          <v-card :class="['course-card', { enrolled: course.enrolled }]" @click="openPopup(course)">
            <v-card-title>{{ course.title }} {{ course.enrolled ? '(belegt)' : '(nicht belegt)' }}</v-card-title>
            <v-card-subtitle><div><strong>Startdatum:</strong> {{ course.startDate }}</div></v-card-subtitle>
            <v-card-text>
              <div><strong>Dozent:</strong> {{ course.lecturer }}</div>
              <div><strong>Kurzbeschreibung:</strong> {{ course.shortDescription }}</div>
              <div><strong>Prüfungsanmeldung:</strong> {{ course.examEnrolled ? 'Vorhanden' : 'Nicht vorhanden' }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div v-else-if="state.role.name === 'TUTOR'">
      <v-row>
        <v-col
          v-for="course in tutorCourses"
          :key="course.title"
          cols="12"
          md="4"
        >
          <v-card :class="['course-card', { enrolled: course.enrolled }]" @click="openPopup(course)">
            <v-card-title>{{ course.title }}</v-card-title>
            <v-card-subtitle><div><strong>Startdatum:</strong> {{ course.startDate }}</div></v-card-subtitle>
            <v-card-text>
              <div><strong>Kurzbeschreibung:</strong> {{ course.shortDescription }}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="add-course-card" @click="openAddCoursePopup">
            <v-card-title class="d-flex justify-center align-center">
              <v-icon large>mdi-plus</v-icon>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="popupVisible" max-width="600px" @click:outside="closePopup">
      <v-card>
        <v-card-title>
          <span>{{ selectedCourse.title }} {{ selectedCourse.enrolled ? '(belegt)' : '(nicht belegt)' }}</span>
          <v-btn icon @click="closePopup" class="ml-auto">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle><div><strong>Startdatum:</strong> {{ selectedCourse.startDate }}</div></v-card-subtitle>
        <v-card-text>
          <div><strong>Dozent:</strong> {{ selectedCourse.lecturer }}</div>
          <div><strong>Kurzbeschreibung:</strong> {{ selectedCourse.shortDescription }}</div>
          <div><strong>Prüfungsanmeldung:</strong> {{ selectedCourse.examEnrolled ? 'Vorhanden' : 'Nicht vorhanden' }}</div>
        </v-card-text>
        <v-card-actions v-if="state.role.name === 'STUDENT'">
          <v-btn v-if="!selectedCourse.enrolled" @click="enrollInCourse" color="green" text>In Kurs einschreiben</v-btn>
          <v-btn v-else @click="disenrollFromCourse" color="red" text>Aus Kurs abmelden</v-btn>
          <v-btn :href="selectedCourse.link" color="blue" text>Mehr Infos zum Kurs</v-btn>
        </v-card-actions>
        <v-card-actions v-if="state.role.name === 'STUDENT'">
          <v-btn v-if="selectedCourse.enrolled && !selectedCourse.examEnrolled" @click="enrollInExam" color="green" text>Für Prüfung anmelden</v-btn>
          <v-btn v-else-if="selectedCourse.examEnrolled" @click="disenrollFromExam" color="red" text>Von Prüfung abmelden</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="addCoursePopupVisible" max-width="600px" @click:outside="closeAddCoursePopup">
      <v-card>
        <v-card-title>
          <span>Neuen Kurs hinzufügen</span>
          <v-btn icon @click="closeAddCoursePopup" class="ml-auto">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form ref="addCourseForm" v-model="valid">
            <v-text-field v-model="newCourse.title" label="Titel" :rules="[v => !!v || 'Titel ist erforderlich']"></v-text-field>
            <v-text-field v-model="newCourse.startDate" label="Startdatum" :rules="[v => !!v || 'Startdatum ist erforderlich']"></v-text-field>
            <v-text-field v-model="newCourse.lecturer" label="Dozent" :rules="[v => !!v || 'Dozent ist erforderlich']"></v-text-field>
            <v-textarea v-model="newCourse.shortDescription" label="Kurzbeschreibung" :rules="[v => !!v || 'Kurzbeschreibung ist erforderlich']"></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green" @click="addNewCourse" >Hinzufügen</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="enrollmentSnackbarVisible" timeout="3000">
      <v-icon left>mdi-check-circle</v-icon>
      Erfolgreich {{ selectedCourse.title }} belegt!
    </v-snackbar>
    <v-snackbar v-model="disenrollmentSnackbarVisible" timeout="3000">
      <v-icon left>mdi-check-circle</v-icon>
      Erfolgreich aus {{ selectedCourse.title }} abgemeldet!
    </v-snackbar>
    <v-snackbar v-model="examEnrollmentSnackbarVisible" timeout="3000">
      <v-icon left>mdi-check-circle</v-icon>
      Erfolgreich für die Prüfung in {{ selectedCourse.title }} angemeldet!
    </v-snackbar>
    <v-snackbar v-model="examDisenrollmentSnackbarVisible" timeout="3000">
      <v-icon left>mdi-check-circle</v-icon>
      Erfolgreich von der Prüfung in {{ selectedCourse.title }} abgemeldet!
    </v-snackbar>
    <v-snackbar v-model="courseAddedSnackbarVisible" timeout="3000">
      <v-icon left>mdi-check-circle</v-icon>
      Neuer Kurs erfolgreich hinzugefügt!
    </v-snackbar>
  </v-container>
</template>

<script>
import { pochtaStore } from '@/store/localStorage/pochta-store';

export default {
  data() {
    return {
      searchQuery: '',
      selectedSortOption: null,
      sortOptions: ['Titel', 'Startdatum', 'Dozent'],
      courses: [
        {
          title: 'Mathematik 1',
          startDate: '2025-02-01',
          lecturer: 'Dr. Müller',
          shortDescription: 'Erster Einstiegkurs in die Mathematik',
          link: '',
          enrolled: false,
          examEnrolled: false
        },
        {
          title: 'Mathematik 2',
          startDate: '2025-02-02',
          lecturer: 'Dr. Müller',
          shortDescription: 'Fortgeschrittener Mathematikkurs, der den gelernten Stoff vertieft',
          link: '',
          enrolled: false,
          examEnrolled: false
        },
        {
          title: 'Mathematik 3',
          startDate: '2025-02-03',
          lecturer: 'Dr. Müller',
          shortDescription: 'Abschlusskurs der Mathematikreihe',
          link: '',
          enrolled: false,
          examEnrolled: false
        },
        {
          title: 'Physik 1',
          startDate: '2025-02-04',
          lecturer: 'Dr. Schmidt',
          shortDescription: 'Erster Einstiegkurs in die Physik mit Spezialisierung auf Raumfahrt',
          link: '',
          enrolled: false,
          examEnrolled: false
        },
        {
          title: 'Physik 2',
          startDate: '2025-02-05',
          lecturer: 'Dr. Schmidt',
          shortDescription: 'Abschlusskurs Physik, der den gelernten Stoff vertieft',
          link: '',
          enrolled: false,
          examEnrolled: false
        },
        {
          title: 'Soziologie 1',
          startDate: '2025-02-06',
          lecturer: 'Dr. Eberhardt',
          shortDescription: 'Erster Einstiegkurs in die Soziologie',
          link: '',
          enrolled: false,
          examEnrolled: false
        },
        {
          title: 'Soziologie 2',
          startDate: '2025-02-07',
          lecturer: 'Dr. Eberhardt',
          shortDescription: 'Fortgeschrittener Soziologiekurs, der den gelernten Stoff vertieft',
          link: '',
          enrolled: false,
          examEnrolled: false
        },
        {
          title: 'Soziologie 3',
          startDate: '2025-02-04',
          lecturer: 'Dr. Eberhardt',
          shortDescription: 'Abschlusskurs der Soziologie, mit Hausarbeit',
          link: '',
          enrolled: false,
          examEnrolled: false
        },
        {
          title: 'Chemie 1',
          startDate: '2025-02-09',
          lecturer: 'Dr. Weber',
          shortDescription: 'Erster Einstiegkurs in die Chemie, mit Schwerpunkt auf Raumfahrt',
          link: '',
          enrolled: false,
          examEnrolled: false
        },
        {
          title: 'Chemie 2',
          startDate: '2025-02-10',
          lecturer: 'Dr. Weber',
          shortDescription: 'Abschlusskurs Chemie, der den gelernten Stoff vertieft',
          link: '',
          enrolled: false,
          examEnrolled: false
        },
        {
          title: 'Informatik 1',
          startDate: '2025-02-11',
          lecturer: 'Dr. Schuster',
          shortDescription: 'Erster Einstiegkurs in die Informatik',
          link: '',
          enrolled: false,
          examEnrolled: false
        },
        {
          title: 'Informatik 2',
          startDate: '2025-02-12',
          lecturer: 'Dr. Schuster',
          shortDescription: 'Abschlusskurs Informatik, der den gelernten Stoff vertieft',
          link: '',
          enrolled: false,
          examEnrolled: false
        }
      ],
      popupVisible: false,
      addCoursePopupVisible: false,
      selectedCourse: {},
      newCourse: {
        title: '',
        startDate: '',
        lecturer: '',
        shortDescription: ''
      },
      valid: false,
      enrollmentSnackbarVisible: false,
      disenrollmentSnackbarVisible: false,
      examEnrollmentSnackbarVisible: false,
      examDisenrollmentSnackbarVisible: false,
      courseAddedSnackbarVisible: false
    };
  },
  computed: {
    sortedCourses() {
      return this.courses.slice().sort((a, b) => b.enrolled - a.enrolled);
    },
    tutorCourses() {
      return this.courses.slice(0, 3);
    },
    state() {
      return pochtaStore.state;
    }
  },
  methods: {
    openPopup(course) {
      this.selectedCourse = course;
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    },
    openAddCoursePopup() {
      this.addCoursePopupVisible = true;
    },
    closeAddCoursePopup() {
      this.addCoursePopupVisible = false;
    },
    enrollInCourse() {
      this.selectedCourse.enrolled = true;
      this.popupVisible = false;
      this.enrollmentSnackbarVisible = true;
    },
    disenrollFromCourse() {
      this.selectedCourse.enrolled = false;
      this.selectedCourse.examEnrolled = false;
      this.popupVisible = false;
      this.disenrollmentSnackbarVisible = true;
    },
    enrollInExam() {
      this.selectedCourse.examEnrolled = true;
      this.popupVisible = false;
      this.examEnrollmentSnackbarVisible = true;
    },
    disenrollFromExam() {
      this.selectedCourse.examEnrolled = false;
      this.popupVisible = false;
      this.examDisenrollmentSnackbarVisible = true;
    },
    addCourse() {
      // Logic to add a new course
    },
    addNewCourse() {
      if (this.$refs.addCourseForm.validate()) {
        this.courses.push({ ...this.newCourse, enrolled: false, examEnrolled: false });
        this.newCourse = {
          title: '',
          startDate: '',
          lecturer: '',
          shortDescription: ''
        };
        this.addCoursePopupVisible = false;
        this.courseAddedSnackbarVisible = true;
      }
    }
  }
};
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
.course-card {
  transition: transform 0.2s;
}
.course-card:hover {
  transform: scale(1.05);
}
.course-card.enrolled {
  background-color: #e0f7e9;
}
.add-course-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
}
</style>