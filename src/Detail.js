import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import './Detail.scss';
import { 재고context } from './App';
import { CSSTransition } from "react-transition-group";

import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';


// styled-components의 큰 장점 : 컴포넌트가 많아지면 class 겹칠 일이 줄어듬
let 박스 = styled.div`
    padding : 20px;
`;

let 제목 = styled.h4`
    font-size : 25px;
    color : ${ props => props.색상 }
`;

function Detail(props){

    let [alert, alert변경] = useState(true);
    let [inputData, inputData변경] = useState('');

    let [누른탭, 누른탭변경] = useState(0);
    let [스위치, 스위치변경] = useState(false);


    // 컴포넌트가 mount 되었을때 
    // 컴포넌트가 update 될때
    // 특정 코드를 실행할 수 있음, 여러개 사용할수 있음
    useEffect(()=>{
        let 타이머 = setTimeout(()=>{ alert변경(false) }, 2000);
        return ()=>{ clearTimeout(타이머) }

    },[alert]); // 특정 state가 변경될 때만 실행 단, 조건이 없을 경우 등장시 한번 실행하고 끝남





    let { id } = useParams();
    let history = useHistory();

    let 찾은상품 = props.향수.find(function(상품){
        return 상품.id == id
    })


    // let 찾은상품 = props.향수.find(x => x.id == id);

    return(
        <div className="container">
            <박스>
                <제목>상세페이지</제목>
                <제목 className="blue" >Detail</제목>
            </박스>

            {/* { inputData }
            <input onChange={(e)=>{ inputData변경( e.target.value )}}/> */}

            {
                alert === true 
                ? (<div className="my-alert">
                    <p>재고가 얼마 남지 않았습니다.</p>
                    </div>)
                : null
            }


            <div className="row">
                <div className="col-md-6">
                    <img src={ 찾은상품.img } 
                        width="100%"
                        height="400px"  />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{ 찾은상품.content }</p>
                    <p>{ 찾은상품.price }</p>

                    <Info 재고={props.재고}></Info>

                    <button className="btn btn-danger" onClick={ ()=>{ 
                        
                        props.재고변경([9,11,12]);
                        props.dispatch({type : '항목추가', payload : {id:2, name:'새로운상품', quan:1} });
                        history.push('/cart');
                        
                        }}>주문하기</button> 
                    <button className="btn btn-primary" onClick={ ()=>{
                        // history.goBack();
                        history.push('/');
                    } }>뒤로가기</button> 
                </div>
            </div>


            <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false); 누른탭변경(0) }}>상품 설명</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"  onClick={()=>{ 스위치변경(false);누른탭변경(1) }}>배송 안내</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"  onClick={()=>{ 스위치변경(false); 누른탭변경(2) }}>리뷰</Nav.Link>
                </Nav.Item>
            </Nav>
            
            <CSSTransition in={스위치} classNames="wow" timeout={500}>
                <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
            </CSSTransition>


        </div> 
    )
}

function TabContent(props){

    useEffect(()=>{
        props.스위치변경(true);
    });

    if (props.누른탭 === 0){
        return <div>0번째 내용입니다</div>
     } else if (props.누른탭 === 1){
        return <div>1번째 내용입니다.</div>
     } else if (props.누른탭 === 2){
        return <div>2번째 내용입니다.</div>
     }


}

    function Info(props){
        return (
            <p>재고 : {props.재고[0]}</p>
        )
    }


    function state를props화(state){
        console.log(state);
        return{
            state : state,
            alert열렸니 : state.reducer2
        }
    
    }
    
    export default connect(state를props화)(Detail)


// export default Detail;