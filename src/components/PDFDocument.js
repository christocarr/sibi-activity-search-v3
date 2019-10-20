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
  // const { NameOfService, AccessibilityDetails, AddressLine1, AddressLine2, AddressLine3, Postcode, OtherDetailedInformation, MondayStart, MondayEnd, TuesdayStart, TuesdayEnd, WednesdayStart, WednesdayEnd, ThursdayStart, ThursdayEnd, FridayStart, FridayEnd, SaturdayStart, SaturdayEnd, SundayStart, SundayEnd, Cost,  Buses, TubeAndTrains, CarParkingDetails, Name1, PhoneNumber1, Email1, Name2, PhoneNumber2, Email2, Website, OtherContactInfo  } = activities
  
  const types = activityTypes.map((type, index) => {
    if (activityTypes.length > 1) {
      return `${type}, `
    }
    return (
      `${type} `
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

          {/* <View style={styles.heading}>
            <Text>{NameOfService}</Text>
          </View>
          <View style={styles.text}>
            <Text>{AddressLine1}</Text>
            <Text>{AddressLine2}</Text>
            <Text>{AddressLine3}</Text>
            <Text>{Postcode}</Text>
          </View>
          <View style={styles.text}>
            <Text>{OtherDetailedInformation}</Text>
          </View>
          <View style={styles.text}>
            {MondayStart ? <Text>Monday: {MondayStart} - {MondayEnd}</Text> : null}
            {TuesdayStart ? <Text>Tuesday: {TuesdayStart} - {TuesdayEnd}</Text> : null}
            {WednesdayStart ? <Text>Wednesday: {WednesdayStart} - {WednesdayEnd}</Text> : null}
            {ThursdayStart ? <Text>Thursday: {ThursdayStart} - {ThursdayEnd}</Text> : null}
            {FridayStart ? <Text>Friday: {FridayStart} - {FridayEnd}</Text> : null}
            {SaturdayStart ? <Text>Saturday: {SaturdayStart} - {SaturdayEnd}</Text> : null}
            {SundayStart ? <Text>Sunday: {SundayStart} - {SundayEnd}</Text> : null}
          </View>
          <View style={styles.text}>
            <Text>Cost: {Cost}</Text>
          </View>
          <View style={styles.text}>
            <Text>Transport:</Text>
            <Text>Buses: {Buses}</Text>
            <Text>Tube and Trains: {TubeAndTrains}</Text>
            <Text>Car park Availibility: {CarParkingDetails}</Text>
          </View>
          <View style={styles.text}>
            {AccessibilityDetails ? <Text>Accessibility: {AccessibilityDetails}</Text> : null}
          </View>
          <View style={styles.text}>
            <Text>Contact Details:</Text>
            <Text>{Name1}: {PhoneNumber1}; {Email1}</Text>
            {Name2 ? <Text>{Name2}: {PhoneNumber2}; {Email2}</Text> : null}
          </View>
          <View style={styles.text}>
            {Website ? <Text>{Website}</Text> : null}
          </View>
          <View style={styles.text}>
            {OtherContactInfo ? <Text>{OtherContactInfo}</Text> : null}
          </View> */}
        </Page>
      </Document>
    </PDFViewer>
  )
};

export default PDFDocument;
