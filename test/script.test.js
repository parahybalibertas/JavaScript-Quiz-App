const { setStatusClass } = require('../script');

function createMockElement() {
  return {
    classList: {
      classes: new Set(),
      add(cls) { this.classes.add(cls); },
      remove(cls) { this.classes.delete(cls); },
      contains(cls) { return this.classes.has(cls); }
    }
  };
}

test('applies correct class when correct is true', () => {
  const el = createMockElement();
  setStatusClass(el, true);
  expect(el.classList.contains('correct')).toBe(true);
  expect(el.classList.contains('wrong')).toBe(false);
});

test('applies wrong class when correct is false', () => {
  const el = createMockElement();
  setStatusClass(el, false);
  expect(el.classList.contains('wrong')).toBe(true);
  expect(el.classList.contains('correct')).toBe(false);
});
