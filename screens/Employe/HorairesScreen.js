import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const horairesMensuels = {
  "2025-03-10": [
    { day: "Lundi", hours: "8h00 - 18h00" },
    { day: "Mardi", hours: "8h00 - 18h00" },
    { day: "Mercredi", hours: "8h00 - 18h00" },
    { day: "Jeudi", hours: "8h00 - 18h00" },
    { day: "Vendredi", hours: "8h00 - 18h00" },
    { day: "Samedi", hours: "10h00 - 14h00" },
    { day: "Dimanche", hours: "Repos" },
  ],
  "2025-03-17": [
    { day: "Lundi", hours: "9h00 - 18h00" },
    { day: "Mardi", hours: "9h00 - 18h00" },
    { day: "Mercredi", hours: "9h00 - 18h00" },
    { day: "Jeudi", hours: "9h00 - 18h00" },
    { day: "Vendredi", hours: "9h00 - 18h00" },
    { day: "Samedi", hours: "Repos" },
    { day: "Dimanche", hours: "Repos" },
  ]
};

const HorairesMensuelsScreen = () => {
  const [selectedDate, setSelectedDate] = useState("2025-03-10"); // Date initiale (par exemple, lundi 10 mars)
  const [schedule, setSchedule] = useState([]);
  const [noData, setNoData] = useState(false); // Pour afficher "Aucune donnée" si la semaine n'a pas d'horaires

  // Fonction pour calculer les jours de la semaine à partir du lundi
  const getWeekDays = (date) => {
    const selectedDay = new Date(date);
    const firstDayOfWeek = new Date(selectedDay.setDate(selectedDay.getDate() - selectedDay.getDay() + 1)); // Lundi
    const weekDays = [];

    // Ajouter chaque jour de la semaine (lundi à dimanche)
    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(firstDayOfWeek);
      currentDay.setDate(firstDayOfWeek.getDate() + i);
      weekDays.push(currentDay.toISOString().split("T")[0]);
    }

    return weekDays;
  };

  // Mettre à jour l'affichage des horaires en fonction de la semaine
  useEffect(() => {
    const weekDays = getWeekDays(selectedDate);
    const weekStartDate = weekDays[0]; // Récupérer la date du lundi
    const weeklySchedule = horairesMensuels[weekStartDate];

    if (weeklySchedule) {
      setSchedule(weeklySchedule.map((item, index) => {
        return {
          day: item.day,
          date: weekDays[index],
          hours: item.hours,
        };
      }));
      setNoData(false); // S'il y a des horaires, on n'affiche pas le message "Aucune donnée"
    } else {
      setSchedule([]); // Si aucune donnée pour la semaine, on réinitialise l'état des horaires
      setNoData(true); // On indique qu'il n'y a pas de données pour cette semaine
    }
  }, [selectedDate]);

  // Fonction pour gérer la sélection d'un jour dans le calendrier
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString); // Mettre à jour la date sélectionnée
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mes Horaires de la Semaine</Text>

      <View style={styles.calendarContainer}>
        {/* Calendrier */}
        <Calendar
          current={selectedDate}
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: "#3498db" },
          }}
          minDate={"2025-03-01"} // Date de début
          maxDate={"2025-03-31"} // Date de fin
          hideExtraDays={true}
          monthFormat={"yyyy MMMM"}
          style={styles.calendar}
        />
      </View>

      <View style={styles.scheduleContainer}>
        {noData ? (
          <Text style={styles.noData}>Aucune donnée pour cette semaine.</Text>
        ) : (
          schedule.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.date}>{item.day} ({item.date})</Text>
              <Text style={styles.hours}>{item.hours}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
  },
  calendarContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  calendar: {
    width: "90%",
    marginBottom: 20,
  },
  scheduleContainer: {
    flex: 1,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  date: {
    fontSize: 16,
    fontWeight: "600",
    color: "#34495e",
  },
  hours: {
    fontSize: 16,
    color: "#7f8c8d",
  },
  noData: {
    fontSize: 18,
    color: "#7f8c8d",
    textAlign: "center",
    marginTop: 20,
  },
});

export default HorairesMensuelsScreen;
