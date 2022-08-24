---
sidebar_position: 2
displayed_sidebar: a11ySidebar
---

# ARIA

- 장애가 있는 사람들에게 (자바스크립트로 만들어진)웹 애플리케이션을 좀 더 접근성있게 만들기 위해 만들어진 roles와 attributes의 집합.
- HTML의 접근성 문제를 보완하는 W3C 명세 → 보조기기의 웹 문서 접근을 지원
- 접근성 부분에서 모자란 HTML5의 부분을 메꿔주는 보충제 같은 역할

## ARIA의 첫번째 규칙

> If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so.

- 구현하고자 하는 기능이 HTML 태그로 존재할 경우 ARIA role을 이용해 마개조 하지 말고 이미 존재하는 HTML 태그를 사용한다.
- 실제 해당 태그가 하는 일을 모킹해야하므로 그럴바엔 semantic한 태그를 쓰는게 맞음
- ARIA 명세에 존재하는 몇몇 role은 HTML5에 의해 흡수되었음 - role을 사용하기 전에 HTML 태그를 먼저 확인해보는 습관을 가지자!

```html
<!--Do not this-->
<div role="button">is this button?</div>
```

<!--Do this-->

<button>this is button</button>

````

### ARIA의 두번째 규칙

> Do not change native semantics, unless you really have to.

- 태그의 native semantic - 태그가 기본적으로 가지고 있는 의미를 바꾸지 않아야 한다. (정말 필요하지 않는 이상)

```html
<!--Do not this-->
<h2 role="tab">heading tab</h2>

<!--Do this-->
<div role="tab"><h2>heading tab</h2></div>
````

### ARIA의 세번째 규칙

> All interactive ARIA controls must be usable with the keyboard.

- 상호작용이 가능한 ARIA 컨트롤 들은 키보드로 사용할 수 있어야한다.
- 예시 - 위젯
  - 이용자가 클릭, 드래그앤 드롭, 슬라이드 ,스크롤 할 수 있는 위젯이 존재.
  -

[Aria 명세 링크](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
