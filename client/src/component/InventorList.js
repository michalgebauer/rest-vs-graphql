import React from 'react';
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { InventorService } from '../services/InventorService';

export class InventorList extends React.Component {
  state = {
    inventors: [],
  };

  componentDidMount() {
    this.loadInventors(this.props.type);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      this.loadInventors(nextProps.type);
    }
  }

  loadInventors(type) {
    InventorService['getInventors' + type]().then(inventors =>
      this.setState({
        inventors: inventors,
      })
    );
  }

  render() {
    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={this.state.inventors}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon="user" />}
                title={
                  <Link to={`/inventor/${item.id}`}>{`${item.firstname}  ${
                    item.lastname
                  }`}</Link>
                }
                description={item.nationality}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
