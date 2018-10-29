import React, { Component } from 'react'
import Button from '@/components/Button';

export class ButtonPage extends Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <Button type={'primary'}/>
        <br />
        <Button size={'small'}/>
        <br />
        <Button size={'large'} className={'abc'}/>
        <br />
        <Button block>!!!!</Button>
        <br />
        <Button block onClick={() => {console.log('aaa');}} />
        <br />
        <Button disabled={true} />
      </div>
    )
  }
}

export default ButtonPage
