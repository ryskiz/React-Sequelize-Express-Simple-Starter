import React, {Component} from 'react';
import {connect} from 'react-redux'
import UserActions from '../redux/UserRedux'

class Home extends Component {
  componentDidMount() {
    console.log(this.props.user)
    // this.props.getUsers()
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Let's get crackin'!</h1>
        </div>
      </div>
    )
  }
}

const mapState = ({user}) => ({
  user
})

const mapDispatch = (dispatch) => ({
  getUsers: () => dispatch(UserActions.getUsers())
})

export default connect(mapState, mapDispatch)(Home)