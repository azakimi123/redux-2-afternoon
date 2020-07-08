import React, { Component } from 'react';

class DisplayPurchases extends Component {

  // componentDidMount= ()=> {
  //   this.props.budgetData();
  // }
  render() {
    let { purchases } = this.props;
    if (!purchases) purchases = [{ id: 1000, description: 'Ship', price: 1, category: 'Other' }]
    return (
      <div className='display-purchases'>
        {
          purchases.map(purchase => {
            return (
              <div className="card mb-2" key={purchase.id}>
                <div className="card-body">
                  ${purchase.price} for {purchase.description} <strong>({purchase.category})</strong>
                  <button onClick={() => {
                    this.props.removePurchase(purchase.id); 
                    this.props.budgetData();
                    } } className='btn btn-sm btn-danger' id='delete-btn'>X</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default DisplayPurchases