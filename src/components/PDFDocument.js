import React from "react";
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30,
    fontFamily: 'Helvetica',
    backgroundColor: 'white'
  },
  heading: {
    marginTop: 10,
    fontFamily: 'Helvetica-Bold'
  },
  text: {
    marginTop: 10,
    fontSize: 14,
  },
  groups: {
    marginBottom: 10
  },
  standardText: {
    fontSize: 12,
    marginBottom: 10
  }
})

const PDFDocument = ({ activityTypes, activities }) => {
  console.log(activityTypes)
  const types = activityTypes.map((type, index) => {
    if (activityTypes.length > 1) {
      return `${type}, `
    }
    return (
      `${type} `
    )
  })
  
  const pdfActivities = activities.map((activity, index) => {
    return (
      <View key={index}>
        <View style={styles.heading}>
          <Text>{activity.NameOfService}</Text>
        </View>
        <View style={styles.text}>
          <Text>{activity.AddressLine1}</Text>
          <Text>{activity.AddressLine2}</Text>
          <Text>{activity.AddressLine3}</Text>
          <Text>{activity.Postcode}</Text>
        </View>
        <View style={styles.text}>
          <Text>{activity.OtherDetailedInformation}</Text>
        </View>
        <View style={styles.text}>
          {activity.MondayStart ? <Text>Monday: {activity.MondayStart} - {activity.MondayEnd}</Text> : null}
          {activity.TuesdayStart ? <Text>Tuesday: {activity.TuesdayStart} - {activity.TuesdayEnd}</Text> : null}
          {activity.WednesdayStart ? <Text>Wednesday: {activity.WednesdayStart} - {activity.WednesdayEnd}</Text> : null}
          {activity.ThursdayStart ? <Text>Thursday: {activity.ThursdayStart} - {activity.ThursdayEnd}</Text> : null}
          {activity.FridayStart ? <Text>Friday: {activity.FridayStart} - {activity.FridayEnd}</Text> : null}
          {activity.SaturdayStart ? <Text>Saturday: {activity.SaturdayStart} - {activity.SaturdayEnd}</Text> : null}
          {activity.SundayStart ? <Text>Sunday: {activity.SundayStart} - {activity.SundayEnd}</Text> : null}
        </View>
        <View style={styles.text}>
          <Text>Cost: {activity.Cost}</Text>
        </View>
        <View style={styles.text}>
          <Text>Transport:</Text>
          <Text>Buses: {activity.Buses}</Text>
          <Text>Tube and Trains: {activity.TubeAndTrains}</Text>
          <Text>Car park Availibility: {activity.CarParkingDetails}</Text>
        </View>
        <View style={styles.text}>
          {activity.AccessibilityDetails ? <Text>Accessibility: {activity.AccessibilityDetails}</Text> : null}
        </View>
        <View style={styles.text}>
          <Text>Contact Details:</Text>
          <Text>{activity.Name1}: {activity.PhoneNumber1}; {activity.Email1}</Text>
          {activity.Name2 ? <Text>{activity.Name2}: {activity.PhoneNumber2}; {activity.Email2}</Text> : null}
        </View>
        <View style={styles.text}>
          {activity.Website ? <Text>{activity.Website}</Text> : null}
        </View>
        <View style={styles.text}>
          {activity.OtherContactInfo ? <Text>{activity.OtherContactInfo}</Text> : null}
        </View>
      </View>
    )
  })
    
  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.groups}>
            <Text>{types} groups near you</Text>
          </View>
          <View >
            <Text style={styles.standardText}>Going to a new group can feel daunting but be very worthwhile. Groups all vary so you may need to try a few groups or go more than once to get to know people and find somewhere that suits you. And while we provide information about what groups are out there we can't guarantee them.</Text>
            <Text style={styles.standardText}>You can simply turn up to most groups, they run on a drop-on basis and there's no need to book unless it says so. While our information is fairly recent it's best to double check before making a long journey as classes can stop or take a break.</Text>
          </View>
          {pdfActivities}
          <View>
            <Text render={({ pageNumber, totalPages }) => (
              `page ${pageNumber} of ${totalPages}`
            )} fixed />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
};

export default PDFDocument;
