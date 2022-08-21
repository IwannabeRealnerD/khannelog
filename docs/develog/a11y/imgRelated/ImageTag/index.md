---
tags: [img, alt, role, A11Y]
---

# 디자인적인 요소로 존재하는 사진

## 사용처

---

디자인을 위한 이미지 사용 시 -> 화면 낭독기 이용자들에게 필요 없는 이미지일 경우에 대한 처리법

## 예시

---

아래 예시의 하이라이트된 이미지는 실제 화면 낭독기를 사용하는 웹 이용자들에게 필요없는 정보.
- 디자인적인 요소로 존재하는 이미지, 로고, 전부다 해당
- 서비스 로고의 경우 계속 화면 낭독기 사용 시 계속 반복되는 정보를 전달 -> 이미 타이틀에서 사이트를 알 수있음, 중복된 정보

![](./example.png)

## 해결법

---

### 1. aria 사용

aria의 role에 `presentation`을 활용

```html
<img src="./meaningless_img.png" role="presentation" />
```

:::caution 해결 가능한 방법이지만 하지만 aria의 기본 원칙에 벗어나는 접근법 입니다.

> Note: There is a saying `"No ARIA is better than bad ARIA."` In WebAim's survey of over...

`없는 ARIA는 나쁜 ARIA 보다 좋다.`

[mdn 링크](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)를 참조
:::

### 2. alt 사용

```html
<img src="./meaningless_img.png" alt="" />
```

화면 낭독기는 alt가 `""`로 존재할 경우 읽지 않고 그냥 넘어감
