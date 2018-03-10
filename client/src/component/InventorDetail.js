import React from 'react';
import { Form, Input, Row, Col, Button, message, Timeline } from 'antd';
import { InventorService } from '../services/InventorService';

const FormItem = Form.Item;

export class InventorDetail extends React.Component {
  state = {
    inventor: {},
  };

  componentWillReceiveProps(nextProps) {
    if (
      this.props.type !== nextProps.type ||
      this.props.match.params.id !== nextProps.match.params.id
    ) {
      this.loadInventor(nextProps.type, nextProps.match.params.id);
    }
  }

  componentDidMount() {
    this.loadInventor(this.props.type, this.props.match.params.id);
  }

  loadInventor(type, id) {
    if (id === 'new') {
      this.setState({
        inventor: {
          firstname: '',
          lastname: '',
          nationality: '',
          born: '',
          died: '',
          patents: [],
        },
      });
    } else {
      InventorService['getInventor' + type](id).then(inventor =>
        this.setState({
          inventor: inventor,
        })
      );
    }
  }

  handleSave = () => {
    if (this.props.match.params.id === 'new') {
      InventorService['createInventor' + this.props.type](
        this.state.inventor
      ).then(inventor => {
        message.info('Inventor was created');
        this.props.history.push(`/inventor/${inventor.id}`);
      });
    } else {
      let inventor = this.state.inventor;
      inventor.id = this.props.match.params.id;
      delete inventor.patents;
      InventorService['updateInventor' + this.props.type](inventor).then(
        inventor => {
          message.info('Inventor was updated');
        }
      );
    }
  };

  handleDelete = () => {
    InventorService['deleteInventor' + this.props.type](
      this.props.match.params.id
    ).then(() => {
      message.info('Inventor was deleted');
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <div>
        <Form style={{ marginBottom: '30px' }}>
          <Row gutter={16}>
            <Col md={8}>
              <FormItem label="Firstname">
                <Input
                  value={this.state.inventor.firstname}
                  onChange={e =>
                    this.setState({
                      inventor: {
                        ...this.state.inventor,
                        firstname: e.target.value,
                      },
                    })
                  }
                />
              </FormItem>
            </Col>
            <Col md={8}>
              <FormItem label="Lastname">
                <Input
                  value={this.state.inventor.lastname}
                  onChange={e =>
                    this.setState({
                      inventor: {
                        ...this.state.inventor,
                        lastname: e.target.value,
                      },
                    })
                  }
                />
              </FormItem>
            </Col>
            <Col md={8}>
              <FormItem label="Nationality">
                <Input
                  value={this.state.inventor.nationality}
                  onChange={e =>
                    this.setState({
                      inventor: {
                        ...this.state.inventor,
                        nationality: e.target.value,
                      },
                    })
                  }
                />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Button icon="left" onClick={() => this.props.history.push('/')}>
              Back
            </Button>
            <Button
              icon="save"
              type="primary"
              onClick={this.handleSave}
              style={{ marginLeft: '10px' }}
            >
              Save
            </Button>
            {this.props.match.params.id !== 'new' && (
              <Button
                icon="delete"
                style={{ marginLeft: '10px' }}
                onClick={this.handleDelete}
              >
                Delete
              </Button>
            )}
            {this.props.match.params.id !== 'new' && (
              <Button
                icon="user-add"
                style={{ marginLeft: '10px' }}
                onClick={() => this.props.history.push('/inventor/new')}
              >
                New
              </Button>
            )}
          </Row>
        </Form>
        <Timeline>
          <Timeline.Item>
            <h3>{this.state.inventor.born} Born</h3>
          </Timeline.Item>
          {this.state.inventor.patents &&
            this.state.inventor.patents.map((patent, i) => (
              <Timeline.Item key={i}>
                <h3>
                  {patent.year} {patent.name}
                </h3>
                <p>{patent.description}</p>
              </Timeline.Item>
            ))}
          <Timeline.Item>
            <h3>{this.state.inventor.died} Died</h3>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }
}
