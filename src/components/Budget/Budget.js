import React, { Component } from 'react';
import Background from './../shared/Background/Background'
import Chart1 from './../shared/Chart1';
import Chart2 from './../shared/Chart2';
import AddPurchase from './../shared/AddPurchase';
import DisplayPurchases from './../shared/DisplayPurchases';
import Loading from './../shared/Loading/Loading';
import Nav from './../shared/Nav';
import './Budget.css';
import {connect} from 'react-redux';
import {requestUserData} from './../../ducks/userReducer';
import {requestBudgetData} from './../../ducks/budgetReducer';
import {addPurchase} from './../../ducks/budgetReducer';
import {removePurchase} from './../../ducks/budgetReducer';


class Budget extends Component {

  componentDidMount = () => {
    this.props.requestUserData();
    this.props.requestBudgetData();
  }
  render() {
    console.log(this.props.budget)
    console.log(this.props.user)
    const {budgetLimit} = this.props.budget;
    const {purchases} = this.props.budget;
    const {loading} = this.props.budget;
    const {firstName, lastName} = this.props.user;
    return (
      <Background>
        {true ? loading : null}
        <div className='budget-container'>
          <Nav 
          firstName={firstName}
          lastName={lastName}/>
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase addPurchase={this.props.addPurchase} budgetData={this.props.requestBudgetData}/>
              <DisplayPurchases 
              purchases={purchases}
              removePurchase={this.props.removePurchase}
              budgetData={this.props.requestBudgetData}/>
            </div>
            <div className='chart-container'>
              <Chart1 
                purchases={purchases}
                budgetLimit={budgetLimit}/>
              <Chart2 purchases={purchases}/>
            </div>
          </div>
        </div>
      </Background>
    )
  }
}


const mapStateToProps = state => {
  return{
    budget: state.budget,
    user:state.user
  }
};
export default connect(mapStateToProps, {requestUserData, requestBudgetData, addPurchase, removePurchase})(Budget);
