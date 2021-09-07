import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tabletop from 'tabletop';
import Papa from 'papaparse';
import { orderByDistance } from 'geolib';
import axios from 'axios';
import Nav from './components/Nav';
import Loading from './components/Loading';
import ActivitySearchForm from './components/ActivitySearchForm';
import SearchResults from './components/SearchResults';
import Review from './components/Review';
import Modal from './components/Modal';
import Message from './components/Message';
import Footer from './components/Footer';

import './styles.css';
import BackToTop from './components/BackToTop';

class App extends Component {
  state = {
    loading: false,
    sibiData: null,
    selectedCategory: null,
    typeOptions: null,
    disableTypeSelect: true,
    selectedType: null,
    postcode: '',
    patientLat: null,
    patientLong: null,
    selectedDistance: 0,
    searchResults: null,
    selectedActivityTypes: [],
    selectedActivities: [],
    modal: false,
    message: '',
  };

  componentDidMount() {
    //The old way when Tabletop relied on Google infrastructure.
    // this.setState({ loading: true }, () => {
    //   Tabletop.init({
    //     key: 'https://docs.google.com/spreadsheets/d/1K_YUYDlRGX1Z5IXtEuQTmu3U_T8sXjw76r90sNNi2W0/edit?usp=sharing',
    //     callback: (data) => {
    //       this.setState({
    //         sibiData: data,
    //       });
    //       this.setState({ loading: false });
    //     },
    //     simpleSheet: true,
    //   });
    // });
    //The new way using Papa Parse.
    this.setState({ loading: true }, () => {
      Papa.parse(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vThxDYkrd21qQ83vT9Fb0bJD0ZP138dlqcsmrOFdIcvWa6Sk7fJCYupGPemnyfBbfhTVGqcfUTBYBE4/pub?output=csv',
        {
          download: true,
          header: true,
          complete: (results) => {
            const data = results.data;
            this.setState({
              sibiData: data,
            });
            this.setState({ loading: false });
          },
        }
      );
    });
  }

  handleCategorySelect = (category) => {
    this.setState({
      selectedCategory: category.value,
      disableTypeSelect: false,
      selectedType: null,
    });

    if (category.value === 'Activity (art & craft)') {
      this.setState({
        typeOptions: [
          { value: '1101- Art class', label: 'Art Class' },
          { value: '1113- DIY', label: 'DIY' },
          { value: '1112- Drawing', label: 'Drawing' },
          { value: '1114- Glasswork', label: 'Glasswork' },
          { value: '1115- Jewellery making', label: 'Jewellery making' },
          { value: '1111- Painting', label: 'Painting' },
          { value: '1110- Photography', label: 'Photography' },
          { value: '1105- Pottery', label: 'Pottery' },
          { value: '1106- Sculpting', label: 'Sculpting' },
          {
            value: '1103- Sewing, knitting, crochet',
            label: 'Sewing, knitting, crochet',
          },
        ],
      });
    } else if (category.value === 'Activity (social)') {
      this.setState({
        typeOptions: [
          { value: '1406- Befriending', label: 'Befriending' },
          { value: '1407- Bingo', label: 'Bingo' },
          { value: '1401- Book club', label: 'Book club' },
          {
            value: '1414- Community action and forums',
            label: 'Community action and forums',
          },
          { value: '1410- Day trips', label: 'Day trips' },
          {
            value: '1405- Discussion, lectures',
            label: 'Discussion and lectures',
          },
          {
            value: '1408- Film / theatre visits',
            label: 'Film and Theatre visits',
          },
          { value: '1403- Lunch club', label: 'Lunch club' },
          {
            value: '1412- Parent/carer and toddler',
            label: 'Parent/carer and toddler',
          },
          { value: '1411- Quiz', label: 'Quiz' },
          { value: '1402- Reading group/club', label: 'Reading group' },
          { value: '1404- Social drop-in', label: 'Social drop-in' },
          { value: '1413- Tea/coffee morning', label: ' Tea/coffee morning' },
          { value: '1400- Tea Parties', label: 'Tea parties' },
          { value: '1409- Writing club', label: 'Writing club' },
        ],
      });
    } else if (category.value === 'Activity (wellbeing)') {
      this.setState({
        typeOptions: [
          { value: '1501- Aerobics', label: 'Aerobics' },
          { value: '1533- Alternative Therapy', label: 'Alternative therapy' },
          { value: '1502- Aqua fit', label: 'Aqua fit' },
          { value: '1530- Cookery', label: 'Cookery' },
          { value: '1521- Cycling', label: 'Cycling' },
          { value: '1522- Dance', label: 'Dance' },
          { value: '1532- Diet club', label: 'Diet club' },
          { value: '1523- Gardening', label: 'Gardening' },
          { value: '1503- Keep fit', label: 'Keep fit' },
          { value: '1534- Massage', label: 'Massage' },
          { value: '1526- Meditation', label: 'Meditation' },
          { value: '1504- Pilates', label: 'Pilates' },
          { value: '1510- PIYO', label: 'PIYO' },
          { value: '1506- Religious services', label: 'Religious services' },
          { value: '1525- Jogging / running', label: 'Running and jogging' },
          { value: '1535- Sauna', label: 'Sauna' },
          { value: '1505- Self defence', label: 'Self defence' },
          { value: '1531- Spiritual wellbeing', label: 'Spiritual wellbeing' },
          { value: '1528- Swimming', label: 'Swimming' },
          { value: '1507- Tai chi', label: 'Tai chi' },
          { value: '1511- Trampoline', label: 'Trampoline' },
          { value: '1529- Walking', label: 'Walking' },
          { value: '1508- Yoga', label: 'Yoga' },
          { value: '1509- Zumba', label: 'Zumba' },
        ],
      });
    } else if (category.value === 'Activity (board & card games)') {
      this.setState({
        typeOptions: [
          { value: '1201- Backgammon', label: 'Backgammon' },
          { value: '1207- Bridge', label: 'Bridge' },
          { value: '1206- Card games', label: 'Card games' },
          { value: '1203- Chess', label: 'Chess' },
          { value: '1208- Classic board games', label: 'Classic board games' },
          { value: '1204- Dominoes', label: 'Dominoes' },
          { value: '1205- Scrabble', label: 'Scrabble' },
        ],
      });
    } else if (category.value === 'Activity (music & drama)') {
      this.setState({
        typeOptions: [
          { value: '1303- Concert', label: 'Concert' },
          { value: '1305- Drama class', label: 'Drama class' },
          { value: '1307- Listening to music', label: 'Listening to music' },
          {
            value: '1306- Playing an instrument',
            label: 'Playing an instrument',
          },
          { value: '1300- Playing CDs', label: 'Playing CDs' },
          { value: '1304- Singing', label: 'Singing' },
          { value: '1302- Theatre', label: 'Theatre' },
        ],
      });
    } else if (category.value === 'Activity (sport & active games)') {
      this.setState({
        typeOptions: [
          { value: '1609- Archery', label: 'Archery' },
          { value: '1611- Athletics', label: 'Athletics' },
          { value: '1621- Badminton', label: 'Badminton' },
          { value: '1601- Basketball', label: 'Basketball' },
          { value: '1610- Boccia', label: 'Boccia' },
          { value: '1642- Boxing', label: 'Boxing' },
          { value: '1602- Cricket', label: 'Cricket' },
          { value: '1608- Disability sports', label: 'Disability sports' },
          { value: '1603- Football', label: 'Football' },
          { value: '1612- Footgolf', label: 'Footgolf' },
          { value: '1662- Golf', label: 'Golf' },
          { value: '1663- Lawn bowls', label: 'Lawn bowls' },
          { value: '1641- Martial arts', label: 'Martial arts' },
          { value: '1605- Netball', label: 'Netball' },
          { value: '1606- Rounders / baseball', label: 'Rounders / baseball' },
          { value: '1607- Rugby', label: 'Rugby' },
          { value: '1622- Squash', label: 'Squash' },
          { value: '1623- Table tennis', label: 'Table tennis' },
          { value: '1613- Tag Rugby', label: 'Tag rugby' },
          { value: '1624- Tennis', label: 'Tennis' },
          { value: '1614- Triathlon', label: 'Triathlon' },
          { value: '1625 - Volleyball', label: 'Volleyball' },
        ],
      });
    } else if (category.value === 'Learning topic') {
      this.setState({
        typeOptions: [
          { value: '1701- ESOL', label: 'ESOL' },
          { value: '1709- General education', label: 'General education' },
          { value: '1704- IT', label: 'IT' },
          { value: '1705- Languages', label: 'Languages' },
          { value: '1710- Maths', label: 'Maths' },
          {
            value: '1700- Novels and their TV adaptations',
            label: 'Novels and TV adaptions',
          },
          { value: '1711- Philosophy', label: 'Philosophy' },
          { value: '1707- Religion', label: 'Religion' },
        ],
      });
    } else if (category.value === 'Advice category') {
      this.setState({
        typeOptions: [
          { value: '2009- Advocacy', label: 'Advocacy' },
          { value: '2001- Benefits', label: 'Benefits' },
          {
            value: '2016- Care / social services',
            label: 'Care / social services',
          },
          {
            value: '2015- Community support / befriending',
            label: 'Community support / befriending',
          },
          {
            value: '2011- Counselling/psychotherapy',
            label: 'Counselling / psychotherapy',
          },
          { value: '2014- Day care / respite', label: 'Day care / respite' },
          { value: '2021- Dementia', label: 'Dementia' },
          { value: '2008- Disability issues', label: 'Disability issues' },
          { value: '2017- Education', label: 'Education' },
          {
            value: '2006- Employment / training',
            label: 'Employment / training',
          },
          { value: '2005- Financial', label: 'Financial' },
          { value: '2010- Foodbank', label: 'Foodbank' },
          { value: '2007- General advice', label: 'General advice' },
          { value: '2002- Health', label: 'Health' },
          {
            value: '2012- Home / community library',
            label: 'Home / community library',
          },
          { value: '2003- Housing', label: 'Housing' },
          { value: '2022- Mindfulness', label: 'Mindfulness' },
          { value: '2018- Peer support', label: 'Peer support' },
          { value: '2020- Relaxation therapy', label: 'Relaxation therapy' },
        ],
      });
    }
  };

  handleTypeSelect = (type) => {
    this.setState({ selectedType: type });
  };

  // controls postcode input
  handlePostcodeInput = (ev) => {
    this.setState({ postcode: ev.target.value.toUpperCase() });
  };

  // gets lat long then returns searched activities
  handleActivitySearch = (ev) => {
    ev.preventDefault();
    //if no postcode or partial postcode entered show message
    if (this.state.postcode === '') {
      this.setState({ message: 'Please enter a valid postcode in Brent.' });
    } else if (this.state.postcode.length < 7) {
      this.setState({ message: 'Please enter a valid postcode in Brent.' });
    } else if (this.state.selectedType === null) {
      this.setState({ message: 'Please select an activity type.' });
    } else {
      this.setState({ message: '' });
    }

    const postcode = this.state.postcode.replace(' ', '+');
    let resultsByDistance;
    if (
      postcode.length > 6 &&
      postcode !== '' &&
      this.state.selectedType !== null
    ) {
      this.setState({ loading: true });
      axios
        .get(`https://api.getthedata.com/postcode/${postcode}`)
        .then((res) => {
          this.setState(
            {
              loading: false,
              patientLat: res.data.data.latitude,
              patientLong: res.data.data.longitude,
            },
            () => {
              // return all objects that have the value of the selected type
              const results = this.state.sibiData.filter((item) => {
                return (
                  item[this.state.selectedCategory] ===
                  this.state.selectedType.value
                );
              });

              // create new array and push only lat long coords
              let arrayOfPoints = [];
              results.map((item) => {
                return arrayOfPoints.push({
                  latitude: item.Latitude,
                  longitude: item.Longitude,
                });
              });

              // use new arrayOfPoints to sort coords by nearest
              resultsByDistance = orderByDistance(
                {
                  latitude: this.state.patientLat,
                  longitude: this.state.patientLong,
                },
                [...arrayOfPoints]
              );

              //go over sorted coords and find and return items with same lat coord
              let array = [];
              resultsByDistance.forEach((item) => {
                results.forEach((i) => {
                  if (i.Latitude === item.latitude && array.indexOf(i) === -1) {
                    array.push(i);
                  }
                });
              });

              //set state with sorted coords array
              this.setState({ searchResults: array });
            }
          );
        })
        .catch((err) => {
          console.log('err', err);
          this.setState({ loading: false });
          this.setState({ message: 'Please enter a valid postcode in Brent.' });
        });
    }
  };

  // clears search form inputs
  handleClearForm = () => {
    this.setState({
      postcode: '',
      selectedDistance: 0,
      searchResults: [],
      selectedType: null,
      selectedCategory: null, //does not clear
    });
  };

  handleDistanceSelect = (ev) => {
    if (ev.target.value === 'option2km') {
      this.setState({ selectedDistance: 2000 });
    } else if (ev.target.value === 'option5km') {
      this.setState({ selectedDistance: 5000 });
    } else if (ev.target.value === 'all') {
      this.setState({ selectedDistance: 0 });
    }
  };

  // remove selected item from search results and add to preview
  handleActivitySelect = (item) => {
    // add activity type to array to pass to pdf document
    let str = item.ActivityType;
    // trim off unwanted text from string
    str = str.substring(str.indexOf('-') + 1);
    const selectedTypes = Object.assign([], this.state.selectedActivityTypes);
    // if string not in array then push to array
    if (selectedTypes.indexOf(str) === -1) {
      selectedTypes.push(str);
    }
    const searchedActivities = Object.assign([], this.state.searchResults);
    const activities = Object.assign([], this.state.selectedActivities);
    searchedActivities.splice(item, 1);
    // if item already in selected activities do not add again
    if (activities.indexOf(item) === -1) {
      activities.push(item);
    }
    this.setState({
      searchResults: searchedActivities,
      selectedActivities: activities,
      selectedActivityTypes: selectedTypes,
    });
  };

  // remove an item from preview and from selected activity types
  handleActivityRemove = (item) => {
    let str = item.ActivityType;
    str = str.substring(str.indexOf('-') + 1);
    const activities = Object.assign([], this.state.selectedActivities);
    const activityTypes = Object.assign([], this.state.selectedActivityTypes);
    activities.splice(item, 1);
    activityTypes.splice(str, 1);
    this.setState({
      selectedActivities: activities,
      selectedActivityTypes: activityTypes,
    });
    //add back to searched activities
    const searchedActivities = Object.assign([], this.state.searchResults);
    if (searchedActivities.indexOf(item) === -1) {
      searchedActivities.push(item);
    }
    this.setState({ searchResults: searchedActivities });
  };

  // open modal to show pdf with print functionality
  handlePrint = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  // remove all selected activities from review page
  handleRemoveAll = () => {
    this.setState({ selectedActivities: [] });
    this.setState({ selectedActivityTypes: [] });
  };

  // closes pdf view
  handleModalClose = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <div className="container">
            <Loading loading={this.state.loading} />
            <Switch>
              <Route exact path="/">
                <ActivitySearchForm
                  postcode={this.state.postcode}
                  activitySearch={this.handleActivitySearch}
                  postcodeChange={this.handlePostcodeInput}
                  latitude={this.state.patientLat}
                  longitude={this.state.patientLong}
                  selectedDistance={this.state.selectedDistance}
                  distanceSelect={this.handleDistanceSelect}
                  categoryValue={this.state.selectedCategory}
                  handleCategorySelect={this.handleCategorySelect}
                  typeOptions={this.state.typeOptions}
                  typeValue={this.state.selectedType}
                  typeSelect={this.handleTypeSelect}
                  disableTypeSelect={this.state.disableTypeSelect}
                  clearForm={this.handleClearForm}
                />
                {this.state.message !== '' ? (
                  <Message message={this.state.message} />
                ) : null}
                {this.state.searchResults !== null ? (
                  <div>
                    <SearchResults
                      searchResults={this.state.searchResults}
                      handleSelect={this.handleActivitySelect}
                      selectedActivities={this.state.selectedActivities}
                      patientLatitude={this.state.patientLat}
                      patientLongitude={this.state.patientLong}
                      selectedDistance={this.state.selectedDistance}
                    />
                    <BackToTop scrollStepInPx="60" delayInMs="16.66" />
                  </div>
                ) : null}
              </Route>
              )}
              <Route
                path="/review"
                render={(props) => (
                  <>
                    <Review
                      {...props}
                      selectedActivities={this.state.selectedActivities}
                      handleActivityRemove={this.handleActivityRemove}
                      print={this.handlePrint}
                      removeAll={this.handleRemoveAll}
                      modalClose={this.handleModalClose}
                    />
                    {this.state.modal && (
                      <Modal
                        selectedTypes={this.state.selectedActivityTypes}
                        selectedActivities={this.state.selectedActivities}
                        modalOpen={this.state.modal}
                        modalClose={this.handleModalClose}
                      />
                    )}
                  </>
                )}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
