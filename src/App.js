/* eslint-disabled */
import './App.css';
import {Component, useState} from "react";

function App() {

  let logo = 'ReactBlog';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값저장] = useState('');
  function changeTitle() {
      let copy = [...글제목];
      copy[0] = '여자 코트 추천';
      글제목변경(copy)
  }

  return (
    <div className="App">
      <div className="black-nav">
          <h4>{logo}</h4>
      </div>
        <button onClick={() => {
            let copy2 = [...글제목];
            copy2.sort();
            글제목변경(copy2);
        }}>가나다순정렬</button>
        <button onClick={changeTitle}>글수정</button>
        {
            글제목.map(function (title, i) {
               return (
                <div className="list">
                    <h4 onClick={() => {
                        modal === true ? setModal(false) : setModal(true);
                        setTitle(i);

                    }}>{title}
                        <span onClick={(e) => {
                        let copy = [...따봉];
                        copy[i] = copy[i] + 1;
                        따봉변경(copy);
                        e.stopPropagation();
                    }}>👍</span> {따봉[i]} </h4>
                    <p>2월 17일 발행</p>
                    <button onClick={() => {
                        let copy = [...글제목];
                        copy.splice(i, 1);
                        글제목변경(copy);
                    }}>삭제</button>
                </div>
               )
            })

        }
        <input onChange={(e) => 입력값저장(e.target.value)}></input>
        {/*<button onClick={() => {
            let copy = [...글제목];
            copy.unshift(입력값);
            글제목변경(copy);
        }}>저장</button>*/}
        <button onClick={() => 글제목변경([입력값, ...글제목 ])}>저장</button>
        {
            modal === true ? <Modal color={'grey'} 글제목={글제목} title={title} /> : null
        }
        <Modal2/>

    </div>
  );
}


function Modal(props) {
    return (
        <div className="modal" style={{background : props.color}}>
            <h4>{ props.글제목[props.title] }</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

class Modal2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'kim',
            age : 20
        }
    }

    render() {
        return (
            <div>안녕 {this.props}
            <button onClick={() => {this.setState({name:'lee'})}}>버튼</button>
            </div>
        )
    }
}

export default App;
