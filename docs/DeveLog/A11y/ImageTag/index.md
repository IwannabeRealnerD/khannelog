---
title: 디자인적인 요소만 존재하는 사진
tags: [img, alt, role]
---

# 의미없는 사진

## 사용처

- 디자인을 위한 이미지 사용 시 -> 화면 낭독기 이용자들에게 필요 없는 이미지일 경우

## 예시

(의미없는이미지)

## 해결법

### 1. aria

aria의 role에 `presentation`을 활용

```html
<img src="./example" role="presentation" />
```

- 해결 가능한 방법, 하지만 aria의 기본 원칙에 벗어남
  > Note: There is a saying `"No ARIA is better than bad ARIA."` In WebAim's survey of over... [mdn 링크](<[https:](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)>)

### 2. alt 사용

```html
<img src="./example" alt="" />
```

- 화면 낭독기는 alt가 `""`로 존재할 경우 읽지 않고 그냥 넘어감
