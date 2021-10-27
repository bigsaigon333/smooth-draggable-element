# smooth-draggable-element

## TODO LIST

### 1. 요소를 드래그 하는 도중 커서가 요소를 벗어나면 요소가 이동하지 않는다.

- why: 요소에만 `mousemove` 이벤트핸들러가 등록되어 있어 요소 밖에서는 `mousemove` 이벤트 핸들러가 동작하지 않는다

### 2. 요소 이동시에 `left, top` 스타일 속성을 사용하고 있다.

- `left, top` 스타일 속성은 `layout, paint, composition`이 모두 발생하는 비용이 큰 연산이므로, `compositoin`만 발생하는 `transform`으로 변경을 검토한다
