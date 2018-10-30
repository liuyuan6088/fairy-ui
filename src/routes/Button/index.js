import React, { Component } from 'react'
import Button from '@/components/Button';
import Icon from '@/components/Icon';

import styles from './style.less';

const ButtonGroup = Button.Group;

export class ButtonPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkIndex: -1,
    };
  }

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
        <br />
        <ButtonGroup size={'large'}>
          {[1, 2, 3].map((e,i) => <Button
            key={e}
            data={e}
            className={this.state.checkIndex === i ? styles.light : ''}
            onClick={data => {
              console.log(data);
              this.setState({ checkIndex: i })
            }}
          />)}
        </ButtonGroup>
        <br />
        <Button href='https://www.baidu.com' />
        <br />
        <Button>
          aaaaa<Icon type='address-book' className={styles.color} />
        </Button>
      </div>
    )
  }
}

export default ButtonPage
