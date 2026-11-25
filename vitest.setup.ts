import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Makes ui-sdk development warnings fail the test.
;(globalThis as { __UI_SDK_STRICT__?: boolean }).__UI_SDK_STRICT__ = true

afterEach(cleanup)

// jsdom gaps that ui-sdk popups need; assigned, not ??=, since jsdom has partial versions.
HTMLElement.prototype.showPopover = function () {}
HTMLElement.prototype.hidePopover = function () {}
Element.prototype.getAnimations = () => []
Element.prototype.scrollIntoView = function () {}
Element.prototype.checkVisibility = () => true
Element.prototype.getClientRects = () => [] as unknown as DOMRectList
document.elementFromPoint = () => null
document.elementsFromPoint = () => []
globalThis.ResizeObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
}
document.head.append(
  Object.assign(document.createElement('style'), {
    textContent: '[popover] { display: block !important }'
  })
)
