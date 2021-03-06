import React, { Component } from 'react'
import Page from '../../layouts/Default'
import Icon from '../../components/Icon'
import TextInput from '../../components/TextInput'
import addSVGintoDOM from '../../components/Icon/addSVGtoDOM'
import sprite from '../../assets/icons/sprite.js'
import Form from '../../components/Form'
import styles from './TestPage.css'

export default class Homepage extends Component {
  componentDidMount () {
    addSVGintoDOM(null, sprite)
  }
  handleInput (event, value, isValid) {
    console.log('event=', event)
    console.log('value====', value)
    console.log('isValid', isValid)
  }
  handleForm (event, name, data, change) {
    console.log('event', event),
    console.log('name', name)
    console.log('data', data)
    console.log('change', change)
  }
  handleSubmit (event, data) {
    event.preventDefault()
    console.log('event', event)
    console.log('data', data)
  }
  render () {
    return (
      <Page {...this.props} fullWidth>
        <div className={styles.test}>
          <Icon name='sls-icon-facebook' />
          <Icon name='sls-icon-pencil' />
          <Form
            onChange={this.handleForm.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}>
            <TextInput
              validation={'isEmail'}
              name='what'
              onChange={(e) => console.log('change', e)}
              placeholder='Enter your email'
            />
            <TextInput
              validation={'isPhone'}
              onChange={(e) => console.log('change', e)}
              placeholder='phone'
            />
            <TextInput
              validation={'isFullName'}
              name='fullname'
              onChange={this.handleInput.bind(this)}
              placeholder='Full name'
            />
            <button type='submit' name='teccccc' >
            click
            </button>
          </Form>
        </div>
      </Page>
    )
  }
}
