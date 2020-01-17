import React from 'react';

/**
 * Common modal in Application
 */
class Mymodal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {type: this.props.type, data: this.props.data};
    }
    
    render() {
      return (
        <div className="clearfix container fntColor">
          <div className="modal fade" show="false" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">{this.props.type} Details</h4>
                </div>
                <div className="modal-body">

                  <table className="table table-bordered fntSize">
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    
                      {this.props.data.map((user) => 
                      <tbody key={user.hash}>  
                        <tr >
                          <td>Hash</td>
                          <td>{user.hash}</td>
                        </tr>
                        <tr>
                          <td>Block Index</td>
                          <td>{user.block_index}</td>
                        </tr>
                        <tr>
                          <td>Height</td>
                          <td>{user.height}</td>
                        </tr>
                        <tr>
                          <td>Time</td>
                          <td>{user.time}</td>
                        </tr>
                        <tr>
                          <td>txIndexes</td>
                          <td>{user.txIndexes}</td>
                        </tr>
                      </tbody>
                      )}
                  </table>
                  
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}
export default Mymodal;