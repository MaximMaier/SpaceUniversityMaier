<template>
    <div class="bugtracker">
        <div class="left">
            <h1>Wilkommen zum Bugtracker der Website der Space University!</h1>
            <br/>
            <p>Hier können Sie mögliche Bugs in der Website melden oder generelles Feedback abliefern.</p>
            <p>Wir versuchen Ihr Ticket so schnell wie möglich zu bearbeiten und werden Ihnen dann Rückmeldung geben!</p>
            <p>Bitte prüfe Sie vor dem Einreichen eines Tickets, ob der von Ihnen gefundene Fehler bereits in dem Bugtracker gelistet ist. Nutzen Sie dafür am besten die Suchleiste.</p>
            <p>Bitte geben Sie so viele Details wie möglich an, damit wir das Problem effizient nachvollziehen und beheben können.</p>
            <p>Vielen Dank für Ihre Unterstützung und Ihr Verständnis.</p>
            <button @click="openPopup" style="background-color: #090091;">Ticket erstellen</button>
        </div>
        <div class="right">
            <h2>Nicht abgeschlossene Tickets</h2>
            <div class="table-container">
                <v-container style="padding-bottom: 10px;">
                    <v-row>
                        <v-col cols="12" class="d-flex justify-end">
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Suche nach Tickets..."
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <table>
                    <thead>
                        <tr>
                            <th>Ticketnummer</th>
                            <th>Titel</th>
                            <th>Ticketvariante</th>
                            <th>Betroffener Abschnitt</th>
                            <th>Beschreibung</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(bug, index) in exampleBugs" :key="index">
                            <td>{{ bug.ticketNumber }}</td>
                            <td>{{ bug.title }}</td>
                            <td>{{ bug.ticketType }}</td>
                            <td>{{ bug.section }}</td>
                            <td>{{ bug.description }}</td>
                            <td :class="{'status-offen': bug.status === 'Offen', 'status-in-bearbeitung': bug.status === 'In Bearbeitung'}">{{ bug.status }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-if="showPopup" class="popup">
            <div class="popup-content">
                <span class="close" @click="showPopup = false">&times;</span>
                <h1>Bugtracker</h1>
                <br/>
                <form @submit.prevent="submitBug">
                    <div>
                        <label for="type">Ticketvariante: <span style="color: red;">*</span></label>
                        <div style="position: relative; width: 100%;">
                            <select id="type" v-model="bug.ticketType" required style="width: 100%; border: 1px solid grey; appearance: none; -webkit-appearance: none; -moz-appearance: none; padding-right: 30px; padding-left: 10px;">
                                <option value="" selected disabled hidden>Auswählen</option>
                                <option value="Fehlermeldung"> Fehlermeldung</option>
                                <option value="Feedback"> Feedback</option>
                            </select>
                            <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none; border-left: 1px solid grey; padding-left: 5px;">&#9662;</span>
                        </div>
                        <br/>
                        <label for="section">Betroffener Abschnitt: <span style="color: red;">*</span></label>
                        <div style="position: relative; width: 100%;">
                            <select id="section" v-model="bug.section" required style="width: 100%; border: 1px solid grey; appearance: none; -webkit-appearance: none; -moz-appearance: none; padding-right: 30px; padding-left: 10px;">
                                <option value="" selected disabled hidden>Auswählen</option>
                                <option value="Undefiniert"> Nicht spezifiziert</option>
                                <option value="Karte"> Karte</option>
                                <option value="Kurse"> Kurse</option>
                                <option value="Stundenplan"> Stundenplan</option>
                                <option value="Bugtracker"> Bugtracker</option>
                                <option value="FAQ"> FAQ</option>
                            </select>
                            <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none; border-left: 1px solid grey; padding-left: 5px;">&#9662;</span>
                        </div>
                        <br/>
                    </div>
                    <div>
                        <label for="title">Titel: <span style="color: red;">*</span></label>
                        <input type="text" id="title" v-model="bug.title" required />
                    </div>
                    <div>
                        <label for="description">Beschreibung: <span style="color: red;">*</span></label>
                        <textarea id="description" v-model="bug.description" required></textarea>
                    </div>
                    <div>
                        <p style="color: #bc3e3e;">Bitte gehen Sie sicher, dass der Bug den Sie melden wollen, nicht schon bereits im Bugtracker gelistet ist!</p>
                        <label>Ticketnummer:</label>
                        <p>{{ ticketNumber }}</p>
                    </div>
                    <button type="submit" style="background-color: #090091; color: white;">Ticket abschicken</button>
                </form>
            </div>
        </div>
        <div v-if="showConfirmation" class="confirmation-popup">
            <div class="confirmation-content">
                <div class="throbber"></div>
                <h2>Ticket wird gesendet</h2>
                <p>Ticketnummer: {{ confirmationTicketNumber }}</p>
                <p>Titel: {{ confirmationTitle }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bugtracker',
    data() {
        return {
            showPopup: false,
            showConfirmation: false,
            search: '',
            bug: {
                ticketType: '',
                section: '',
                title: '',
                description: '',
                status: 'Offen'
            },
            exampleBugs: [
                { ticketNumber: '#1556', title: 'FAQ Feedback', ticketType: 'Feedback', section: 'FAQ', description: 'Die FAQs könnten besser strukturiert sein.', status: 'In Bearbeitung' },
                { ticketNumber: '#1523', title: 'Bugtracker Fehler', ticketType: 'Fehlermeldung', section: 'Bugtracker', description: 'Der Bugtracker speichert keine Daten.', status: 'Offen' },
                { ticketNumber: '#1490', title: 'Stundenplan Feedback', ticketType: 'Feedback', section: 'Stundenplan', description: 'Der Stundenplan könnte übersichtlicher sein.', status: 'Offen' },
                { ticketNumber: '#1467', title: 'Kursdetails Fehler', ticketType: 'Fehlermeldung', section: 'Kurse', description: 'Die Kursdetails sind unvollständig.', status: 'In Bearbeitung' },
                { ticketNumber: '#1434', title: 'Kartenansicht Feedback', ticketType: 'Feedback', section: 'Karte', description: 'Die Kartenansicht könnte schneller laden.', status: 'Offen' },
                { ticketNumber: '#1401', title: 'FAQ Fehler', ticketType: 'Fehlermeldung', section: 'FAQ', description: 'Einige FAQs sind nicht mehr relevant.', status: 'Offen' },
                { ticketNumber: '#1389', title: 'Bugtracker Usability', ticketType: 'Feedback', section: 'Bugtracker', description: 'Der Bugtracker könnte benutzerfreundlicher sein.', status: 'In Bearbeitung' },
                { ticketNumber: '#1356', title: 'Stundenplan Anzeigeproblem', ticketType: 'Fehlermeldung', section: 'Stundenplan', description: 'Der Stundenplan wird nicht vollständig angezeigt.', status: 'Offen' },
                { ticketNumber: '#1323', title: 'Kursübersicht Feedback', ticketType: 'Feedback', section: 'Kurse', description: 'Die Kursübersicht könnte mehr Filteroptionen haben.', status: 'Offen' },
                { ticketNumber: '#1290', title: 'Kartenansicht Fehler', ticketType: 'Fehlermeldung', section: 'Karte', description: 'Die Kartenansicht zeigt falsche Daten an.', status: 'In Bearbeitung' },
                { ticketNumber: '#1267', title: 'FAQ Verbesserung', ticketType: 'Feedback', section: 'FAQ', description: 'Die FAQs könnten detaillierter sein.', status: 'Offen' },
                { ticketNumber: '#1234', title: 'Bugtracker Fehler', ticketType: 'Fehlermeldung', section: 'Bugtracker', description: 'Der Bugtracker stürzt häufig ab.', status: 'Offen' },
                { ticketNumber: '#1203', title: 'Stundenplan Feedback', ticketType: 'Feedback', section: 'Stundenplan', description: 'Der Stundenplan könnte farblich besser gestaltet sein.', status: 'In Bearbeitung' },
                { ticketNumber: '#1189', title: 'Fehler in Kursdetails', ticketType: 'Fehlermeldung', section: 'Kurse', description: 'Die Kursdetails werden nicht korrekt angezeigt.', status: 'Offen' },
                { ticketNumber: '#1156', title: 'Kartenansicht Verbesserung', ticketType: 'Feedback', section: 'Karte', description: 'Die Kartenansicht könnte interaktiver sein.', status: 'Offen' },
                { ticketNumber: '#1123', title: 'FAQ Fehler', ticketType: 'Fehlermeldung', section: 'FAQ', description: 'Einige FAQs sind veraltet.', status: 'In Bearbeitung' },
                { ticketNumber: '#1099', title: 'Bugtracker Feedback', ticketType: 'Feedback', section: 'Bugtracker', description: 'Der Bugtracker ist schwer zu bedienen.', status: 'Offen' },
                { ticketNumber: '#1078', title: 'Stundenplan Fehler', ticketType: 'Fehlermeldung', section: 'Stundenplan', description: 'Einige Kurse werden doppelt angezeigt.', status: 'Offen' },
                { ticketNumber: '#1045', title: 'Feedback zu Kursen', ticketType: 'Feedback', section: 'Kurse', description: 'Die Kursübersicht könnte übersichtlicher sein.', status: 'In Bearbeitung' },
                { ticketNumber: '#1023', title: 'Fehler in der Kartenansicht', ticketType: 'Fehlermeldung', section: 'Karte', description: 'Die Kartenansicht lädt nicht korrekt.', status: 'Offen' }
            ]
        };
    },
    methods: {
        openPopup() {
            this.showPopup = true;
            this.ticketNumber = '#' + Math.floor(1557 + Math.random() * 8443).toString();
        },
        submitBug() {
            this.confirmationTitle = this.bug.title;
            this.confirmationTicketNumber = this.ticketNumber;
            this.exampleBugs.unshift({ ...this.bug, ticketNumber: this.ticketNumber }); // Add new tickets on top
            this.bug.ticketType = '';
            this.bug.section = '';
            this.bug.title = '';
            this.bug.description = '';
            this.showPopup = false;
            this.showConfirmation = true;
            setTimeout(() => {
                this.showConfirmation = false;
            }, 3500);
        }
    }
};
</script>

<style scoped>
.bugtracker {
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 20px 0 0 50px;
    display: flex;
    justify-content: space-between;
}

.left {
    width: 45%;
    padding: 10px;
    border-radius: 4px;
}

.right {
    width: calc(55% + 50px); 
    position: absolute;
    right: 20px; 
}

.table-container {
    max-height: calc(100vh - 200px);
    overflow: auto;
}

.search-bar {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    padding: 10px 15px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 4px;
}

button:hover {
    background-color: #0056b3;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    font-size: 12px;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

.status-offen {
    background-color: red;
    color: white;
}

.status-in-bearbeitung {
    background-color: yellow;
    color: black;
}

.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    width: 80%;
    max-width: 600px;
    position: relative;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
}

form {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input, textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

h2 {
    margin-top: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
}

.confirmation-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.confirmation-content {
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
    animation: fadeOut 6s forwards;
}

.throbber {
    width: 40px;
    height: 40px;
    border: 4px solid #28a745;
    border-top: 4px solid transparent;
    border-radius: 50%;
    margin: 0 auto 20px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
}
</style>
