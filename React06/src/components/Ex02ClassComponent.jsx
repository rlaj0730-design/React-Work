/*
    Class Component
     - React에서는 컴포넌트를 만들때 함수형, 클래스형 2가지 존재
     - 함수형 컴포넌트의 경우에는 LifeCycle 확인 및 사용이 불가능
     - React Hook이 도입되면서 그 기능들을 함수형에서도 사용가능
*/

import React, { Component } from 'react'

export class Ex02ClassComponent extends Component {
    // 1. 생성자 : 최초 생성될때 한 번 호출
    // => state관리, 변수선언, 함수선언, 화면을 구성하기 위한 초기 데이터 관리
    constructor(props){
        super(props);
        console.log("1번 : 생성자 호출!");
        // state로 사용할 숫자 저장하기
        this.state = {
            num : 0
        }
        // state에 함수 연결하기
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement(){
        this.setState({
            num : this.state.num +1
        });
    }

  // 2.render : 화면을 구성
  // => render에서 사용할 state나 함수는 생성자에 미리 만들어져 있어야 한다
  render() {
    console.log("2번 : 렌더 호출!");
    return (
      <div>
        Ex02ClassComponent : {this.state.num}
        <button onClick={this.handleIncrement}>올리기!</button>
      </div>
    )
  }

  // 3. 화면이 렌더링된 직후 실행
  // => API Call,무거운 데이터 읽어오기, 무거운 작업을 수행해야 할때
  componentDidMount(){
    console.log("3번 : DidMount 호출!");
  }

  // 4. 갱신이 일어난 직후 실행
  // => state, props의 값이 갱신되었을때 사용 (단, useRef는 제외)
  componentDidUpdate(){
    console.log("4번 : DidUpdate 호출!");
  }

  // 5. 컴포넌트가 제거되기 직전 실행
  // => 데이터 정리, 네트워크 연결 제거 등( clean)에 사용
  componentWillUnmount(){
    console.log("5번 : UnMount 호출!");
  }
}

export default Ex02ClassComponent