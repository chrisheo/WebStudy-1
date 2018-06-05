# Javascript

- Javascript 기본적 문법구조   
  + 블럭의 구분 : 중괄호{}를 이용하여 구분   
  + 구문 실행 후에는 세미콜론;을 이용하여 마침   
  + HTML 내에서 onclick=""등의 태그를 이용하여 자바스크립트 구문을 실행할 수 있음.   
  + HTML 내에서 script태그를 이용하여 자바스크립트 구문을 실행할 수 있음.   
   
- 조건문   
  + if(condition) {script}   
  + 조건 검사 후 조건이 참일 시 구문 실행    
   
- 반복문   
  + while(condition) {script} : 조건 검사 후 조건이 참일 시 구문 반복   
  + for(define; condition; operation) {script} : 기존 while에 변수 할당 및 가감연산 기능 추가, 보통 정해진 회수만큼 반복할 때 사용   
    
- 배열    
  + arr[index] : 대괄호[] 내에 인덱스를 입력하여 배열의 요소에 접근함.   
  
- 함수   
  + function funcname(emlement) {script} : element라는 인자를 받는 funcname라는 함수를 지정함.
  + var funcname = function(element) {script}; 와 같은 방식으로 지정할 수 있음.
   
- 객체   
  + var object = {property1 : contents1, property2 : contents2, property3 : contents3} 를 이용하여 객체를 형성함.
  + object.property1과 같은 방식으로 접근하여 해당 객체에 저장된 contents1이라는 값을 얻을 수 있다.
  + 또한 객체 내에서도 함수를 정의할 수 있으며, 이의 경우를 메소드라고 한다.
  
- js파일 분리 및 불러오기
  + &lt;script src="path">&lt;/script>를 이용하여 경로에 해당하는 자바스크립트 파일을 불러올 수 있다.

----------------------
### 추가된 기능

- 왼쪽 바의 ㅎㅇ라고 적힌 텍스트 위에 마우스를 갖다대면 메뉴를 출력합니다.   
   
- 메뉴의 최상단에 위치한 버튼을 누르면 화면이 어두워집니다. 이미 화면이 어두운 경우, 밝아집니다. 또한 index 페이지 본문의 내용이 바뀝니다.   
   
- ㅎㅇ라고 적힌 텍스트나 본문 상단의 버튼을 누르면 누르지 말라는 메시지를 출력합니다.   

----------------------
### 실행 이미지

![웱](https://raw.githubusercontent.com/junhyuk0801/WebStudy/master/Javascript/runcapture.JPG)   
![웱](https://raw.githubusercontent.com/junhyuk0801/WebStudy/master/Javascript/runcapture2.JPG)   
![웱](https://raw.githubusercontent.com/junhyuk0801/WebStudy/master/Javascript/runcapture3.JPG)   
----------------------

ATOM으로 코딩하였음
