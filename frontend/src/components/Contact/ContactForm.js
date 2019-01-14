import React, { Component } from 'react'
import { connect } from 'react-redux';
import {demoAction} from '../../store/actions/demo'
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import './ContactForm.scss'
import Axios from 'axios';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: "100%",
  },
})

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    firstName: '',
    companyName: '',
    email: '',
    phone: '',
    activitySector: 'Patrimoine',
    message: '',
    sectors: []
    }
  }

  componentDidMount() {
    this.getSectors()
  }

  getSectors = () => {
    Axios.get('/sectors')
    .then((res) => this.setState({sectors : res.data.sectors}))
    .catch((err) => console.log(err))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('/subscribers/create', {
      firstName: this.state.firstName,
      companyName: this.state.companyName,
      email: this.state.email,
      phone: this.state.phone,
      activitySector: this.state.activitySector,
      requestDemo: this.props.shared.requestDemo,
      message: this.state.message
    })
    .then((res) => {
      return this.props.click(e)
    })
    .catch((err) => console.log("Erreur lors de l'envoie des données du formulaire", err))
  }

  handleChange = (e) => {
    const currentFieldName = e.target.name

    this.setState({[currentFieldName]: e.target.value})
    if (e.target.name === 'requestDemo'){
      this.setState({requestDemo: !this.state.requestDemo})
    }
  }    
  
  render() {
    const { classes } = this.props;
    return (
      <div className="ContactContainer" id="contact">

          <form 
          className="contact-form"
          onSubmit={(e) => this.handleSubmit(e)}>

            <h1>Contact</h1>

{/* NAME FIELD */}

            <div className="form-fields">
              <TextField
                required
                id="firstName" 
                name="firstName" 
                label="Nom"
                className={classes.textField}
                value={this.state.firstName}
                onChange={(e) => this.handleChange(e)} 
                />
            </div>
            
{/* COMPANY FIELD */}

            <div className="form-fields">
              <TextField
                name="companyName"
                id="companyName"
                value={this.state.companyName}
                onChange={(e) => this.handleChange(e)} 
                label="Société"
                className={classes.textField}
              />
            </div>
            
{/* EMAIL FIELD */}

            <div className="form-fields">
              <TextField
                required
                type="email" 
                name="email" 
                id="email" 
                value={this.state.email}
                onChange={(e) => this.handleChange(e)} 
                label="Email"
                className={classes.textField}
              />
            </div>

{/* PHONE FIELD */}


            <div className="form-fields">
              <TextField
                required
                type="tel" 
                name="phone" 
                id="phone" 
                value={this.state.phone}
                onChange={(e) => this.handleChange(e)} 
                label="Téléphone"
                className={classes.textField}
              />
            </div>

{/* SECTORS FIELD */}


            <div className="form-group form-fields">
              <TextField
                required
                select
                name="activitySector"
                onChange={(e) => this.handleChange(e)}
                label="Secteur d'activité"
                className={classes.textField}
                value={this.state.activitySector}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
              >
              {this.state.sectors.map(sector => (
                <option key={sector.id} value={sector.title}>
                  {sector.title}
                </option>
              ))}
                <option value="Autre">
                    Autre
                </option>
              </TextField>
            </div>

{/* DEMO FIELD */}


            <div className="form-fields demo">
              <Checkbox
                type="checkbox"
                name="requestDemo"
                id="requestDemo" 
                checked={this.props.shared.requestDemo}
                color="default"
                onClick={(e) => this.props.demoAction()}
              />
              <label 
                htmlFor="requestDemo">
              Je souhaite une démo
              </label>
            </div>

{/* MESSAGE FIELD */}


            <div className="form-fields message">
              <TextField
                label="Message"
                multiline
                rowsMax="5"
                type="text" 
                name="message" 
                id="message" 
                value={this.state.message}
                onChange={(e) => this.handleChange(e)} 
                className={classes.textField}
              />
            </div>

          {/* BUTTON */}

            <div className="form-fields button">
              <button 
              className="btn btn-warning"
              >Envoyer</button>   
            </div>

          </form>
          
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  demoAction
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Contact)); 
