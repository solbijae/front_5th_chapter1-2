import { setupEventListeners } from "./eventManager";
import { createElement } from "./createElement";
import { normalizeVNode } from "./normalizeVNode";
// import { updateElement } from "./updateElement";

export function renderElement(vNode, container) {
  // vNode 정규화
  const normalizedVNode = normalizeVNode(vNode);

  // createElement로 노드를 만들고
  const element = createElement(normalizedVNode);

  // container에 삽입하고
  container.appendChild(element);

  // 이벤트를 등록합니다.
  setupEventListeners(container);

  // 최초 렌더링시에는 createElement로 DOM을 생성하고
  // 이후에는 updateElement로 기존 DOM을 업데이트한다.
  // 렌더링이 완료되면 container에 이벤트를 등록한다.
}
