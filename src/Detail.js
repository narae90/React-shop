import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function Detail(){

    let history = useHistory();

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://images.unsplash.com/photo-1638901549491-26b7dd3dba23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" 
                        width="100%"
                        height="500px"  />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">상품명</h4>
                    <p>상품설명</p>
                    <p>120000원</p>
                    <button className="btn btn-danger">주문하기</button> 
                    <button className="btn btn-primary" onClick={ ()=>{
                        history.goBack();
                        // history.push('/');
                    } }>뒤로가기</button> 

                </div>
            </div>
        </div> 
    )
}


export default Detail;